/**
 * Jamey Gittings Worker — serves the static Astro build (ASSETS), sends the bare
 * domain to www, and handles the contact form at POST /api/contact:
 *   honeypot → Turnstile siteverify → validate → email via Cloudflare Email Sending.
 *
 * The form posts with fetch (JSON reply) when JS is available, and as a plain
 * HTML form otherwise (303 back to /contact/?sent=1 or ?error=<code>).
 *
 * Secrets: TURNSTILE_SECRET_KEY (`wrangler secret put TURNSTILE_SECRET_KEY`).
 * Sending domain: notify.jameygittings.com (enabled with `wrangler email sending enable`).
 */

interface SendEmailBinding {
  send(message: {
    to: string | string[];
    from: string | { email: string; name?: string };
    replyTo?: string;
    subject: string;
    text?: string;
    html?: string;
  }): Promise<{ messageId: string }>;
}

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  EMAIL: SendEmailBinding;
  TURNSTILE_SECRET_KEY: string;
  CONTACT_TO: string;
  CONTACT_FROM: string;
}

const SITEVERIFY = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// The site's own domains plus Workers Builds preview URLs (<branch>-jameygittings.yasinyaqoobi.workers.dev)
const allowedHost = (host: string) =>
  host === "jameygittings.com" ||
  host.endsWith(".jameygittings.com") ||
  host === "jameygittings.yasinyaqoobi.workers.dev" ||
  host.endsWith("-jameygittings.yasinyaqoobi.workers.dev");

type Failure = "captcha" | "invalid" | "send";
const MESSAGES: Record<Failure, string> = {
  captcha: "Please complete the “I’m not a robot” check, then send again.",
  invalid: "Please fill in your name, a valid email address, and a message.",
  send: "Sorry — the message could not be sent. Please try again, or email jameygittings@gmail.com.",
};

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

async function verifyTurnstile(secret: string, token: string, ip: string | null): Promise<boolean> {
  if (!token) return false;
  const body = new FormData();
  body.append("secret", secret);
  body.append("response", token);
  if (ip) body.append("remoteip", ip);
  const res = await fetch(SITEVERIFY, { method: "POST", body });
  const data = (await res.json()) as { success: boolean; hostname?: string };
  return data.success && allowedHost(data.hostname ?? "");
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  const wantsJson = (request.headers.get("accept") ?? "").includes("application/json");
  const done = (failure?: Failure) => {
    if (wantsJson) {
      return Response.json(failure ? { ok: false, error: MESSAGES[failure] } : { ok: true }, {
        status: failure === "send" ? 502 : failure ? 400 : 200,
      });
    }
    const url = new URL("/contact/", request.url);
    url.searchParams.set(failure ? "error" : "sent", failure ?? "1");
    return Response.redirect(url.toString(), 303);
  };

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return done("invalid");
  }
  const field = (k: string) => String(form.get(k) ?? "").trim();

  // Bots that fill the hidden field get a success-shaped dead end.
  if (field("bot-field")) return done();

  const human = await verifyTurnstile(
    env.TURNSTILE_SECRET_KEY,
    field("cf-turnstile-response"),
    request.headers.get("cf-connecting-ip"),
  );
  if (!human) return done("captcha");

  const name = field("name").slice(0, 200);
  const email = field("email").slice(0, 320);
  const message = field("message").slice(0, 10_000);
  if (!name || !EMAIL_RE.test(email) || !message) return done("invalid");

  try {
    await env.EMAIL.send({
      to: env.CONTACT_TO,
      from: { email: env.CONTACT_FROM, name: "JameyGittings.com" },
      replyTo: email,
      subject: `JameyGittings.com contact form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}\n\n— Sent from the contact form on jameygittings.com. Reply to this email to answer ${name}.`,
      html:
        `<p><strong>Name:</strong> ${esc(name)}<br><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>` +
        `<p style="white-space:pre-wrap">${esc(message)}</p>` +
        `<p style="color:#888;font-size:12px">Sent from the contact form on jameygittings.com. Reply to this email to answer ${esc(name)}.</p>`,
    });
  } catch (err) {
    console.error("contact: send failed", err);
    return done("send");
  }
  return done();
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.hostname === "jameygittings.com") {
      url.hostname = "www.jameygittings.com";
      return Response.redirect(url.toString(), 301);
    }
    if (url.pathname === "/api/contact" || url.pathname === "/api/contact/") {
      if (request.method !== "POST") return new Response("Method Not Allowed", { status: 405, headers: { Allow: "POST" } });
      return handleContact(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};
