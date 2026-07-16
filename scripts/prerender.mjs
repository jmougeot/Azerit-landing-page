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
  { path: "/try", out: "try.html", title: "Try Azerit on Your Niche · AI Lead Generation on GitHub" },
  { path: "/legal", out: "legal.html", title: "Legal Notice & Privacy Policy · Azerit" },
];

const base = readFileSync(new URL("../dist/index.html", import.meta.url), "utf8");
const marker = '<div id="root"></div>';
if (!base.includes(marker)) {
  throw new Error("Empty #root div not found in dist/index.html");
}

for (const { path, out, title } of ROUTES) {
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
  writeFileSync(new URL(`../dist/${out}`, import.meta.url), html);
  console.log(`Prerendered ${path} into dist/${out}`);
}

rmSync(new URL("../dist-ssr/", import.meta.url), { recursive: true, force: true });
