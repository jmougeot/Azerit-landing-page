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
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { POSTS } from "./blog/posts";

// prerender.mjs reads the post list to emit one file per article
export { POSTS };

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
  if (path.startsWith("/blog/") && path !== "/blog/") {
    // BlogPost reads its slug from the route, so it needs a matching <Route>
    return renderToString(
      <StaticRouter location={path}>
        <Routes>
          <Route path="/blog/:slug" element={<BlogPost />} />
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
    "/blog/": <Blog />,
  }[path];
  if (!page) throw new Error(`No prerender component for route ${path}`);
  return renderToString(<StaticRouter location={path}>{page}</StaticRouter>);
}
