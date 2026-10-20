// Injects server-rendered markup into static HTML files, one per route.
// Runs after `vite build` (client) and `vite build --ssr` (dist-ssr).
//
// GitHub Pages resolves /try to try.html (no redirect), so each route gets
// a real file served with HTTP 200 — required for search engines to index
// anything beyond "/". 404.html (copied from index.html in CI) keeps
// handling genuinely unknown paths.
import { readFileSync, writeFileSync, rmSync, mkdirSync } from "node:fs";
import { render, POSTS } from "../dist-ssr/entry-prerender.js";

const ROUTES = [
  { path: "/", out: "index.html" },
  {
    path: "/try",
    out: "try.html",
    title: "Try Azerit on Your Role · Recruit Engineers from GitHub",
    desc: "Tell us the role you're hiring for and get a shortlist of GitHub engineers who have already built it. Your first candidate batch is free.",
  },
  {
    path: "/legal",
    out: "legal.html",
    title: "Legal Notice & Privacy Policy · Azerit",
    desc: "Legal notice and privacy policy for Azerit: who publishes the service, what data we collect, why we collect it, how long we keep it and your rights.",
  },
  {
    path: "/terms",
    out: "terms.html",
    title: "Terms of Sale · Azerit",
    desc: "Terms of sale for Azerit subscriptions: what the service includes, price and payment, term and cancellation, liability and use of candidate data.",
  },
  {
    path: "/pricing",
    out: "pricing.html",
    title: "Pricing · Azerit · 300 € / month",
    desc: "Azerit costs 300 € a month: up to 10 open roles, 20+ ranked GitHub candidates per role, verified emails and a personalized first email for each one.",
  },
  {
    path: "/about",
    out: "about.html",
    title: "About · Azerit",
    desc: "Azerit is built by two founders who think engineers should be hired on what they've built. Why we read GitHub instead of CVs, and what we believe.",
  },
  {
    // a directory index, not blog.html: the posts live under blog/, and a
    // blog.html next to a blog/ folder is ambiguous for GitHub Pages
    path: "/blog/",
    out: "blog/index.html",
    title: "Blog · Azerit",
    desc: "Notes on hiring engineers from their code: sourcing on GitHub, writing outreach engineers answer, and what public code says about a developer.",
  },
  ...POSTS.map((post) => ({
    path: `/blog/${post.slug}`,
    out: `blog/${post.slug}.html`,
    title: `${post.title} · Azerit`,
    desc: post.description,
    post,
  })),
];

// Azerit used to ship a lead-generation product alongside sourcing, on its own
// page; both product URLs now fold into "/". GitHub Pages can't return a 301,
// so each old path keeps a file whose only job is to send visitors and crawlers
// home — canonical + meta-refresh is what Google reads as a redirect here.
// No robots noindex on these: Google obeys it over the refresh and drops the
// URL ("Excluded by noindex") instead of folding it into "/".
const REDIRECTS = ["/prospection", "/hiring"];

const base = readFileSync(new URL("../dist/index.html", import.meta.url), "utf8");
const marker = '<div id="root"></div>';
if (!base.includes(marker)) {
  throw new Error("Empty #root div not found in dist/index.html");
}

mkdirSync(new URL("../dist/blog/", import.meta.url), { recursive: true });

for (const { path, out, title, desc, post } of ROUTES) {
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
  if (post) {
    // articles: og:type article + BlogPosting data so search engines can show
    // the date and author
    const ld = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      author: { "@type": "Person", name: post.author },
      publisher: { "@id": "https://www.azerit.tech/#organization" },
      mainEntityOfPage: url,
    };
    html = html
      .replace('<meta property="og:type" content="website"', '<meta property="og:type" content="article"')
      .replace("</head>", `  <script type="application/ld+json">${JSON.stringify(ld)}</script>\n  </head>`);
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
