// Injects server-rendered markup into static HTML files, one per route, and
// writes the sitemap. Runs after `vite build` (client) and `vite build --ssr`
// (dist-ssr).
//
// GitHub Pages resolves /try to try.html (no redirect), so each route gets
// a real file served with HTTP 200 — required for search engines to index
// anything beyond "/". 404.html (copied from index.html in CI) keeps
// handling genuinely unknown paths.
import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, rmSync, mkdirSync } from "node:fs";
import {
  render,
  POSTS,
  COMPANY_LINKEDIN,
  FOUNDERS,
  PRICE_EUR_MONTHLY,
  BLOG_META,
  HOME_TITLE,
  PAGES,
  SITE_URL,
  postTitle,
} from "../dist-ssr/entry-prerender.js";

// The day files were last committed: the sitemap's lastmod and the posts'
// dateModified. CI checks out the whole history for it (deploy.yml).
function lastCommit(...paths) {
  try {
    return execFileSync("git", ["log", "-1", "--format=%cs", "--", ...paths], { encoding: "utf8" }).trim() || undefined;
  } catch {
    return undefined;
  }
}
const latest = (...dates) => dates.filter(Boolean).sort().at(-1);

const LOCALE = { en: "en_US", fr: "fr_FR" };
const blogPath = (lang, rest = "") => `${lang === "fr" ? "/fr" : ""}/blog/${rest}`;

// the pages, each with the files whose last commit dates it
const SOURCES = {
  "/": ["src/pages/Landing.tsx", "src/components"],
  "/try": ["src/pages/Try.tsx"],
  "/pricing": ["src/pages/Pricing.tsx"],
  "/about": ["src/pages/About.tsx", "src/components/Founders.tsx"],
  "/legal": ["src/pages/Legal.tsx"],
  "/terms": ["src/pages/Terms.tsx"],
};

const posts = POSTS.map((post) => ({
  post,
  modified: latest(post.date, lastCommit(`src/blog/posts/${post.slug}.ts`)),
}));

const ROUTES = [
  { path: "/", out: "index.html", lang: "en", lastmod: lastCommit(...SOURCES["/"]) },
  ...Object.entries(PAGES).map(([path, { title, desc }]) => ({
    path,
    out: `${path.slice(1)}.html`,
    title,
    desc,
    lang: "en",
    lastmod: lastCommit(...SOURCES[path]),
  })),
  // the blog, once per language. The front pages are directory indexes, not
  // blog.html: the posts live under blog/, and a blog.html next to a blog/
  // folder is ambiguous for GitHub Pages
  ...["en", "fr"].map((lang) => ({
    path: blogPath(lang),
    out: `${blogPath(lang).slice(1)}index.html`,
    ...BLOG_META[lang],
    lang,
    alternates: { en: blogPath("en"), fr: blogPath("fr") },
    lastmod: latest(...posts.map((p) => p.modified)),
    blog: true,
  })),
  ...posts.flatMap(({ post, modified }) =>
    ["en", "fr"].map((lang) => ({
      path: blogPath(lang, post.slug),
      out: `${blogPath(lang, post.slug).slice(1)}.html`,
      title: postTitle(post[lang].title),
      desc: post[lang].description,
      lang,
      alternates: { en: blogPath("en", post.slug), fr: blogPath("fr", post.slug) },
      lastmod: modified,
      post,
    }))
  ),
];

// Azerit used to ship a lead-generation product alongside sourcing, on its own
// page; both product URLs now fold into "/". GitHub Pages can't return a 301,
// so each old path keeps a file whose only job is to send visitors and crawlers
// home — canonical + meta-refresh is what Google reads as a redirect here.
// No robots noindex on these: Google obeys it over the refresh and drops the
// URL ("Excluded by noindex") instead of folding it into "/".
const REDIRECTS = ["/prospection", "/hiring"];

// ---- structured data ----

const ORG_ID = `${SITE_URL}/#organization`;
const personId = (name) => `${SITE_URL}/about#${name.toLowerCase().replace(/\s+/g, "-")}`;

// on every page: who publishes the site, and what the product is
const SITE_GRAPH = [
  {
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Azerit",
    url: `${SITE_URL}/`,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.png`, width: 192, height: 192 },
    description:
      "Azerit finds the engineers who have already built what you are hiring for, from their public code on GitHub, and writes the first email they answer.",
    sameAs: [COMPANY_LINKEDIN],
    founder: FOUNDERS.map((f) => ({ "@id": personId(f.name) })),
  },
  ...FOUNDERS.map((f) => ({
    "@type": "Person",
    "@id": personId(f.name),
    name: f.name,
    url: `${SITE_URL}/about`,
    sameAs: [f.linkedin],
    worksFor: { "@id": ORG_ID },
  })),
  {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Azerit",
    url: `${SITE_URL}/`,
    inLanguage: ["en", "fr"],
    publisher: { "@id": ORG_ID },
  },
  {
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#product`,
    name: "Azerit",
    url: `${SITE_URL}/`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Azerit analyzes GitHub to find the developers who have already built what you are hiring for, scores them on their public code, and writes personalized outreach.",
    offers: {
      "@type": "Offer",
      price: String(PRICE_EUR_MONTHLY),
      priceCurrency: "EUR",
      url: `${SITE_URL}/pricing`,
    },
    publisher: { "@id": ORG_ID },
  },
];

function pageGraph({ url, lang, title, desc, post, blog, lastmod }) {
  const graph = [...SITE_GRAPH];
  if (blog) {
    graph.push({
      "@type": "Blog",
      "@id": `${url}#blog`,
      name: lang === "fr" ? "Le blog d'Azerit" : "The Azerit blog",
      description: desc,
      url,
      inLanguage: lang,
      publisher: { "@id": ORG_ID },
    });
  }
  if (post) {
    const v = post[lang];
    const author = FOUNDERS.find((f) => f.name === post.author);
    const blogUrl = `${SITE_URL}${blogPath(lang)}`;
    graph.push(
      {
        // articles: search engines show the date and author from this
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: v.title,
        description: v.description,
        inLanguage: lang,
        datePublished: post.date,
        dateModified: lastmod,
        author: author
          ? { "@id": personId(author.name), "@type": "Person", name: author.name, url: `${SITE_URL}/about` }
          : { "@type": "Person", name: post.author },
        publisher: { "@id": ORG_ID },
        image: post.image ? `${SITE_URL}${post.image.src}` : `${SITE_URL}/og.png?v=2`,
        mainEntityOfPage: url,
        isPartOf: { "@id": `${blogUrl}#blog` },
        articleSection: post.category,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Azerit", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: blogUrl },
          { "@type": "ListItem", position: 3, name: v.title, item: url },
        ],
      }
    );
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

// ---- pages ----

const base = readFileSync(new URL("../dist/index.html", import.meta.url), "utf8");
const marker = '<div id="root"></div>';
if (!base.includes(marker)) {
  throw new Error("Empty #root div not found in dist/index.html");
}

mkdirSync(new URL("../dist/fr/blog/", import.meta.url), { recursive: true });

// titles and descriptions land in HTML attributes: escape them, and pass the
// replacements as functions so a "$" in the copy is never read as a pattern
const attr = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
// JSON inside <script>: a "</script>" in the copy must not close the tag
const json = (o) => JSON.stringify(o).replace(/</g, "\\u003c");

for (const route of ROUTES) {
  const { path, out, lang, alternates, post } = route;
  const title = attr(route.title ?? HOME_TITLE);
  const desc = route.desc && attr(route.desc);
  const url = `${SITE_URL}${path}`;
  let html = base.replace(marker, () => `<div id="root">${render(path)}</div>`);
  html = html
    .replace('<html lang="en">', `<html lang="${lang}">`)
    .replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${url}"`)
    .replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${url}"`)
    .replace(/<title>[^<]*<\/title>/, () => `<title>${title}</title>`)
    .replace(/<meta property="og:title" content="[^"]*"/, () => `<meta property="og:title" content="${title}"`)
    .replace(/<meta name="twitter:title" content="[^"]*"/, () => `<meta name="twitter:title" content="${title}"`);
  if (desc) {
    // the three description tags span multiple lines in index.html, so the
    // pattern must cross newlines between attributes
    html = html
      .replace(/<meta\s+name="description"\s+content="[^"]*"/, () => `<meta name="description" content="${desc}"`)
      .replace(/<meta\s+property="og:description"\s+content="[^"]*"/, () => `<meta property="og:description" content="${desc}"`)
      .replace(/<meta\s+name="twitter:description"\s+content="[^"]*"/, () => `<meta name="twitter:description" content="${desc}"`);
  }
  if (post?.image) {
    // share previews show the article's own picture instead of the site card
    const img = `${SITE_URL}${post.image.src}`;
    html = html
      .replace(/<meta property="og:image" content="[^"]*"/, () => `<meta property="og:image" content="${img}"`)
      .replace(/<meta property="og:image:width" content="[^"]*"/, () => `<meta property="og:image:width" content="${post.image.width}"`)
      .replace(/<meta property="og:image:height" content="[^"]*"/, () => `<meta property="og:image:height" content="${post.image.height}"`)
      .replace(/<meta name="twitter:image" content="[^"]*"/, () => `<meta name="twitter:image" content="${img}"`);
  }
  if (post) {
    html = html.replace('<meta property="og:type" content="website"', '<meta property="og:type" content="article"');
  }

  const head = [`<meta property="og:locale" content="${LOCALE[lang]}" />`];
  if (alternates) {
    // each language version names the other, and English answers everyone else
    for (const [l, p] of Object.entries(alternates)) {
      head.push(`<link rel="alternate" hreflang="${l}" href="${SITE_URL}${p}" />`);
      if (l !== lang) head.push(`<meta property="og:locale:alternate" content="${LOCALE[l]}" />`);
    }
    head.push(`<link rel="alternate" hreflang="x-default" href="${SITE_URL}${alternates.en}" />`);
  }
  if (post) {
    head.push(`<meta property="article:published_time" content="${post.date}" />`);
    head.push(`<meta property="article:modified_time" content="${route.lastmod}" />`);
    head.push(`<meta property="article:author" content="${attr(post.author)}" />`);
  }
  head.push(`<script type="application/ld+json">${json(pageGraph({ ...route, url, desc: route.desc }))}</script>`);
  html = html.replace("</head>", () => `${head.map((h) => `  ${h}\n`).join("")}  </head>`);

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
    <meta http-equiv="refresh" content="0; url=${SITE_URL}/" />
    <link rel="canonical" href="${SITE_URL}/" />
    <title>Azerit</title>
  </head>
  <body>
    <p>This page has moved to <a href="${SITE_URL}/">azerit.tech</a>.</p>
  </body>
</html>
`
  );
  console.log(`Redirect stub ${path} -> / in dist/${out}`);
}

// ---- sitemap ----
// Every prerendered route, with its other-language version, so a new post
// is listed the moment it is added to src/blog/posts.ts.
const urls = ROUTES.map(({ path, lastmod, alternates }) => {
  const lines = [`    <loc>${SITE_URL}${path}</loc>`];
  if (lastmod) lines.push(`    <lastmod>${lastmod}</lastmod>`);
  if (alternates) {
    for (const [l, p] of [...Object.entries(alternates), ["x-default", alternates.en]]) {
      lines.push(`    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE_URL}${p}" />`);
    }
  }
  return `  <url>\n${lines.join("\n")}\n  </url>`;
});
writeFileSync(
  new URL("../dist/sitemap.xml", import.meta.url),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`
);
console.log(`Sitemap with ${urls.length} URLs in dist/sitemap.xml`);

// ---- llms.txt ----
// The llmstxt.org format: an H1, a one-paragraph summary in a blockquote,
// then sections of "- [title](url): description" links. Built from the same
// page and post data as the sitemap, so it stays current.
const llmsPage = (path, title, desc) => `- [${title}](${SITE_URL}${path}): ${desc}`;
const llms = `# Azerit

> Azerit is a recruiting service for software engineers. Tell it the role you're hiring for; it searches GitHub for the developers who have already built what you need, reads their code (commits, pull requests, reviews), and sends you the one who fits, with skills proven by their work, a verified professional email and a first message about their work ready to send. Built by two engineers from Centrale, Paris. 300 € a month, up to 10 open roles, first search free.

Azerit does not rank CVs or keywords: it starts from public code. Every match comes with the projects and contributions behind it. Candidates are contacted through the professional email they publish, with one personal message about their own work, which is why reply rates are around 30% instead of the 1 to 3% of LinkedIn InMails.

## Pages

${llmsPage("/", "Home", "How Azerit finds, reads, matches and messages engineers from GitHub.")}
${Object.entries(PAGES)
  .filter(([path]) => !["/legal", "/terms"].includes(path))
  .map(([path, { title, desc }]) => llmsPage(path, title, desc))
  .join("\n")}
${llmsPage("/blog/", "Blog (English)", "Guides and notes on hiring engineers from their code.")}
${llmsPage("/fr/blog/", "Blog (French)", "The same articles in French.")}

## Guides and articles

${posts.map(({ post }) => llmsPage(`/blog/${post.slug}`, post.en.title, post.en.description)).join("\n")}

## Optional

${llmsPage("/terms", "Terms of sale", "What the subscription includes, price, cancellation, use of candidate data.")}
${llmsPage("/legal", "Legal notice and privacy policy", "Publisher, data collected and why, retention, your rights.")}
${posts.map(({ post }) => llmsPage(`/fr/blog/${post.slug}`, post.fr.title, post.fr.description)).join("\n")}
`;
writeFileSync(new URL("../dist/llms.txt", import.meta.url), llms);
console.log(`llms.txt with ${posts.length} posts in dist/llms.txt`);

rmSync(new URL("../dist-ssr/", import.meta.url), { recursive: true, force: true });
