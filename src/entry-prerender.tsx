import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { App } from "./App";
import { Try } from "./pages/Try";
import { Legal } from "./pages/Legal";

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
  const page = { "/try": <Try />, "/legal": <Legal /> }[path];
  if (!page) throw new Error(`No prerender component for route ${path}`);
  return renderToString(<StaticRouter location={path}>{page}</StaticRouter>);
}
