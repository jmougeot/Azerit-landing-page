import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Routes, Route } from "react-router-dom";
import { App } from "./App";
import { Try } from "./pages/Try";
import { Legal } from "./pages/Legal";
import { Terms } from "./pages/Terms";
import { Pricing } from "./pages/Pricing";
import { About } from "./pages/About";
import { Engineers } from "./pages/Engineers";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { POSTS } from "./blog/posts";
import { COMPANY_LINKEDIN, FOUNDERS } from "./links";
import { BLOG_META, HOME_TITLE, PAGES, SITE_URL, postTitle } from "./meta";

// prerender.mjs reads the post list to emit one file per article, and the
// pages' titles and descriptions to write into each file's <head>
export { POSTS, COMPANY_LINKEDIN, FOUNDERS, BLOG_META, HOME_TITLE, PAGES, SITE_URL, postTitle };

// Built with `vite build --ssr`, then invoked by scripts/prerender.mjs to
// bake each route's markup into a static HTML file so crawlers that don't
// execute JavaScript still see the content — and so GitHub Pages serves
// these routes with HTTP 200 instead of the 404 fallback.
//
// Only "/" hydrates in main.tsx, so only it must match the client tree
// exactly. Other routes are rendered directly (their components are lazy in
// App, which renderToString would output as an empty Suspense fallback);
// the client discards that markup and renders fresh.
export function render(path: string): string {
  if (path === "/") {
    return renderToString(
      <React.StrictMode>
        <StaticRouter location="/">
          <App />
        </StaticRouter>
      </React.StrictMode>
    );
  }
  // the blog, in English under /blog/ and in French under /fr/blog/: the
  // pages read their language from the URL and the slug from the route
  if (/^(\/fr)?\/blog\//.test(path)) {
    return renderToString(
      <StaticRouter location={path}>
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/fr/blog" element={<Blog />} />
          <Route path="/fr/blog/:slug" element={<BlogPost />} />
        </Routes>
      </StaticRouter>
    );
  }
  const page = {
    "/try": <Try />,
    "/legal": <Legal />,
    "/terms": <Terms />,
    "/pricing": <Pricing />,
    "/about": <About />,
    "/engineers": <Engineers />,
  }[path];
  if (!page) throw new Error(`No prerender component for route ${path}`);
  return renderToString(<StaticRouter location={path}>{page}</StaticRouter>);
}
