// Injects the server-rendered landing page into dist/index.html.
// Runs after `vite build` (client) and `vite build --ssr` (dist-ssr).
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { render } from "../dist-ssr/entry-prerender.js";

const file = new URL("../dist/index.html", import.meta.url);
const html = readFileSync(file, "utf8");
const marker = '<div id="root"></div>';
if (!html.includes(marker)) {
  throw new Error("Empty #root div not found in dist/index.html");
}
writeFileSync(file, html.replace(marker, `<div id="root">${render()}</div>`));
rmSync(new URL("../dist-ssr/", import.meta.url), { recursive: true, force: true });
console.log("Prerendered / into dist/index.html");
