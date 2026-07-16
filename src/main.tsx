import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import { App } from "./App";

const root = document.getElementById("root")!;
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// index.html ships with the landing page prerendered into #root — hydrate it.
// 404.html is a copy of index.html, so /try and /admin also arrive with that
// markup; there it doesn't match the route, so discard it and render fresh.
if (root.hasChildNodes() && window.location.pathname === "/") {
  ReactDOM.hydrateRoot(root, app);
} else {
  root.innerHTML = "";
  ReactDOM.createRoot(root).render(app);
}
