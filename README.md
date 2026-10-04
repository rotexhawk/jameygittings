# jameygittings.com

Author website for novelist Jamey Gittings, built with [Astro](https://astro.build) as a fully static site.
(The previous Gatsby + WordPress version lost its backend; all content now lives in this repo.)

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview
```

## Where things live

| What | Where |
| --- | --- |
| Book list, blurbs, covers, buy links | `src/data/books.ts` |
| Sample chapters (HTML in Markdown) | `src/content/chapters/<book>/<chapter>.md` |
| Home page | `src/pages/index.astro` |
| Chapter reader | `src/pages/[book]/[chapter].astro` |
| Design tokens (colors, type, spacing) | `src/styles/global.css` |
| Images | `src/assets/images/` (optimized at build time) |

To add a chapter, drop a new `.md` file in the book's folder with `book`, `order`, `label` and `title`
front matter. It will appear in that book's table of contents and in the prev/next navigation automatically.

## Deploy

Hosted on Cloudflare Workers (static assets), configured in `wrangler.jsonc`. `npm run deploy` builds and deploys from your machine; pushes to `main` deploy automatically once the repo is connected in Cloudflare (Workers Builds).
The contact form posts to the existing AWS Lambda endpoint, protected by reCAPTCHA v3.
