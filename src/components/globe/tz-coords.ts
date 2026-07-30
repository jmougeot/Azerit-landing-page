// Rough lat/lng lookup for centering the hero globe on the visitor's region,
// derived purely from their IANA time zone (Intl) — no geolocation prompt, no
// network call. Coordinates are the zone's principal city (from the tz
// database's zone.tab), which is plenty accurate for "spin the globe to roughly
// where you are". Unknown zones fall back to the UTC offset for a sensible
// longitude and a mild northern-hemisphere latitude.

const TZ_COORDS: Record<string, [lat: number, lng: number]> = {
  // Europe
  "Europe/London": [51.51, -0.13],
  "Europe/Dublin": [53.33, -6.25],
  "Europe/Lisbon": [38.72, -9.13],
  "Europe/Madrid": [40.42, -3.7],
  "Europe/Paris": [48.85, 2.35],
  "Europe/Brussels": [50.85, 4.35],
  "Europe/Amsterdam": [52.37, 4.9],
  "Europe/Berlin": [52.52, 13.4],
  "Europe/Zurich": [47.38, 8.54],
  "Europe/Rome": [41.9, 12.5],
  "Europe/Vienna": [48.21, 16.37],
  "Europe/Prague": [50.08, 14.44],
  "Europe/Warsaw": [52.23, 21.01],
  "Europe/Copenhagen": [55.68, 12.57],
  "Europe/Stockholm": [59.33, 18.07],
  "Europe/Oslo": [59.91, 10.75],
  "Europe/Helsinki": [60.17, 24.94],
  "Europe/Athens": [37.98, 23.73],
  "Europe/Bucharest": [44.43, 26.1],
  "Europe/Budapest": [47.5, 19.05],
  "Europe/Kyiv": [50.45, 30.52],
  "Europe/Kiev": [50.45, 30.52],
  "Europe/Istanbul": [41.01, 28.98],
  "Europe/Moscow": [55.75, 37.62],

  // Americas
  "America/New_York": [40.71, -74.0],
  "America/Toronto": [43.65, -79.38],
  "America/Halifax": [44.65, -63.57],
  "America/Chicago": [41.85, -87.65],
  "America/Mexico_City": [19.43, -99.13],
  "America/Denver": [39.74, -104.98],
  "America/Phoenix": [33.45, -112.07],
  "America/Los_Angeles": [34.05, -118.24],
  "America/Vancouver": [49.28, -123.12],
  "America/Anchorage": [61.22, -149.9],
  "America/Bogota": [4.6, -74.08],
  "America/Lima": [-12.05, -77.04],
  "America/Sao_Paulo": [-23.55, -46.63],
  "America/Argentina/Buenos_Aires": [-34.6, -58.38],
  "America/Santiago": [-33.45, -70.67],

  // Asia
  "Asia/Jerusalem": [31.78, 35.22],
  "Asia/Riyadh": [24.71, 46.68],
  "Asia/Dubai": [25.2, 55.27],
  "Asia/Tehran": [35.7, 51.42],
  "Asia/Karachi": [24.86, 67.0],
  "Asia/Kolkata": [22.57, 88.36],
  "Asia/Calcutta": [22.57, 88.36],
  "Asia/Dhaka": [23.81, 90.41],
  "Asia/Bangkok": [13.75, 100.5],
  "Asia/Ho_Chi_Minh": [10.82, 106.63],
  "Asia/Jakarta": [-6.21, 106.85],
  "Asia/Kuala_Lumpur": [3.14, 101.69],
  "Asia/Singapore": [1.35, 103.82],
  "Asia/Manila": [14.6, 120.98],
  "Asia/Hong_Kong": [22.32, 114.17],
  "Asia/Shanghai": [31.23, 121.47],
  "Asia/Taipei": [25.03, 121.57],
  "Asia/Seoul": [37.57, 126.98],
  "Asia/Tokyo": [35.68, 139.69],

  // Africa
  "Africa/Casablanca": [33.57, -7.59],
  "Africa/Algiers": [36.75, 3.06],
  "Africa/Tunis": [36.8, 10.18],
  "Africa/Lagos": [6.52, 3.38],
  "Africa/Cairo": [30.04, 31.24],
  "Africa/Nairobi": [-1.29, 36.82],
  "Africa/Johannesburg": [-26.2, 28.05],

  // Oceania
  "Australia/Perth": [-31.95, 115.86],
  "Australia/Adelaide": [-34.93, 138.6],
  "Australia/Brisbane": [-27.47, 153.03],
  "Australia/Melbourne": [-37.81, 144.96],
  "Australia/Sydney": [-33.87, 151.21],
  "Pacific/Auckland": [-36.85, 174.76],
  "Pacific/Honolulu": [21.31, -157.86],
};

export type LatLng = { lat: number; lng: number };

// Best-effort guess of the visitor's location from their time zone alone.
export function guessViewerLatLng(): LatLng {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const hit = tz && TZ_COORDS[tz];
    if (hit) return { lat: hit[0], lng: hit[1] };
  } catch {
    // Intl unavailable — fall through to the offset heuristic
  }

  // Fallback: longitude from the UTC offset (~15° per hour), latitude nudged
  // into the northern mid-latitudes where most visitors are.
  // getTimezoneOffset() is minutes to ADD to local to reach UTC (positive west),
  // so east longitude = -offset / 4.
  const offsetMin = new Date().getTimezoneOffset();
  const lng = Math.max(-180, Math.min(180, -offsetMin / 4));
  return { lat: 30, lng };
}
