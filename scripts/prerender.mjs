// Injects server-rendered markup into static HTML files, one per route.
// Runs after `vite build` (client) and `vite build --ssr` (dist-ssr).
//
// GitHub Pages resolves /try to try.html (no redirect), so each route gets
// a real file served with HTTP 200 — required for search engines to index
// anything beyond "/". 404.html (copied from index.html in CI) keeps
// handling genuinely unknown paths.
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { render } from "../dist-ssr/entry-prerender.js";

const ROUTES = [
  { path: "/", out: "index.html" },
  {
    path: "/try",
    out: "try.html",
    title: "Try Azerit on Your Role · Recruit Engineers from GitHub",
  },
  { path: "/legal", out: "legal.html", title: "Legal Notice & Privacy Policy · Azerit" },
  { path: "/terms", out: "terms.html", title: "Terms of Sale · Azerit" },
  { path: "/pricing", out: "pricing.html", title: "Pricing · Azerit · 300 € / month" },
];

// Azerit used to ship a lead-generation product alongside sourcing, on its own
// page; both product URLs now fold into "/". GitHub Pages can't return a 301,
// so each old path keeps a file whose only job is to send visitors and crawlers
// home — canonical + meta-refresh is what Google reads as a redirect here.
const REDIRECTS = ["/prospection", "/hiring"];

const base = readFileSync(new URL("../dist/index.html", import.meta.url), "utf8");
const marker = '<div id="root"></div>';
if (!base.includes(marker)) {
  throw new Error("Empty #root div not found in dist/index.html");
}

for (const { path, out, title, desc } of ROUTES) {
  let html = base.replace(marker, `<div id="root">${render(path)}</div>`);
  const url = `https://www.azerit.tech${path === "/" ? "/" : path}`;
  html = html
    .replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${url}"`)
    .replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${url}"`);
  if (title) {
    html = html
      .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
      .replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${title}"`)
      .replace(/<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${title}"`);
  }
  if (desc) {
    // the three description tags span multiple lines in index.html, so the
    // pattern must cross newlines between attributes
    html = html
      .replace(/<meta\s+name="description"\s+content="[^"]*"/, `<meta name="description" content="${desc}"`)
      .replace(/<meta\s+property="og:description"\s+content="[^"]*"/, `<meta property="og:description" content="${desc}"`)
      .replace(/<meta\s+name="twitter:description"\s+content="[^"]*"/, `<meta name="twitter:description" content="${desc}"`);
  }
  writeFileSync(new URL(`../dist/${out}`, import.meta.url), html);
  console.log(`Prerendered ${path} into dist/${out}`);
}

for (const path of REDIRECTS) {
  const out = `${path.slice(1)}.html`;
  writeFileSync(
    new URL(`../dist/${out}`, import.meta.url),
    `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="refresh" content="0; url=https://www.azerit.tech/" />
    <link rel="canonical" href="https://www.azerit.tech/" />
    <meta name="robots" content="noindex, follow" />
    <title>Azerit</title>
  </head>
  <body>
    <p>This page has moved to <a href="https://www.azerit.tech/">azerit.tech</a>.</p>
  </body>
</html>
`
  );
  console.log(`Redirect stub ${path} -> / in dist/${out}`);
}

rmSync(new URL("../dist-ssr/", import.meta.url), { recursive: true, force: true });
