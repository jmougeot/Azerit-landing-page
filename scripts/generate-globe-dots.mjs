// Generates src/data/land-dots.json: the halftone dot grid for the hero globe.
//
// Samples the sphere on an equal-area grid (longitude step widened by 1/cos(lat)
// so density stays uniform toward the poles) and keeps only points that fall on
// land, tested against Natural Earth's 50m land polygons. Run once, commit the
// JSON — the build never touches the network.
//
//   node scripts/generate-globe-dots.mjs
//
// Output format: { step, dots: [lat0, lng0, lat1, lng1, ...] } with coordinates
// in tenths of a degree (ints), which keeps the file ~4x smaller than floats.

import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const STEP = 0.8; // degrees between dots at the equator (~18k land dots)
const LAT_RANGE = [-84, 84];

const SOURCES = [
  "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_land.geojson",
  "https://raw.githubusercontent.com/martynafford/natural-earth-geojson/master/50m/physical/ne_50m_land.json",
  "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_land.geojson",
];

async function fetchLand() {
  for (const url of SOURCES) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      console.log(`land polygons: ${url}`);
      return await res.json();
    } catch (err) {
      console.warn(`failed ${url}: ${err.message}`);
    }
  }
  throw new Error("no land GeoJSON source reachable");
}

// Flatten Polygon/MultiPolygon features into rings with bounding boxes.
// Even-odd ray casting over all of a polygon's rings handles holes for free.
function collectPolygons(geojson) {
  const polys = [];
  for (const f of geojson.features) {
    const g = f.geometry;
    const shapes = g.type === "Polygon" ? [g.coordinates] : g.type === "MultiPolygon" ? g.coordinates : [];
    for (const rings of shapes) {
      let minX = 180, maxX = -180, minY = 90, maxY = -90;
      for (const ring of rings) {
        for (const [x, y] of ring) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
      polys.push({ rings, minX, maxX, minY, maxY });
    }
  }
  return polys;
}

function inPolygon(lng, lat, poly) {
  if (lng < poly.minX || lng > poly.maxX || lat < poly.minY || lat > poly.maxY) return false;
  let inside = false;
  for (const ring of poly.rings) {
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const [xi, yi] = ring[i];
      const [xj, yj] = ring[j];
      if (yi > lat !== yj > lat && lng < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) {
        inside = !inside;
      }
    }
  }
  return inside;
}

const land = collectPolygons(await fetchLand());
const dots = [];
let tested = 0;

for (let lat = LAT_RANGE[0]; lat <= LAT_RANGE[1]; lat += STEP) {
  const row = Math.round(lat / STEP);
  const cols = Math.max(1, Math.round((360 * Math.cos((lat * Math.PI) / 180)) / STEP));
  for (let c = 0; c < cols; c++) {
    // offset alternate rows half a cell so the grid reads as halftone, not stripes
    const lng = -180 + ((c + 0.5 + (row % 2) * 0.5) / cols) * 360;
    tested++;
    if (land.some((p) => inPolygon(lng, lat, p))) {
      dots.push(Math.round(lat * 10), Math.round(lng * 10));
    }
  }
}

const out = join(dirname(fileURLToPath(import.meta.url)), "../src/data/land-dots.json");
await writeFile(out, JSON.stringify({ step: STEP, dots }));
console.log(`tested ${tested} grid points -> ${dots.length / 2} land dots -> ${out}`);
