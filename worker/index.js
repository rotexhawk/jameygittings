// Serves the static Astro build and sends the bare domain to www.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "jameygittings.com") {
      url.hostname = "www.jameygittings.com";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
