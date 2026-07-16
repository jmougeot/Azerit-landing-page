import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { App } from "./App";

// Built with `vite build --ssr`, then invoked by scripts/prerender.mjs to
// bake the landing page markup into dist/index.html so crawlers that don't
// execute JavaScript still see the content.
export function render() {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location="/">
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
}
