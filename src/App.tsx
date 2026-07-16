import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Landing } from "./pages/Landing";

// Only the landing page is needed for the initial paint; split the rest.
const Try = lazy(() => import("./pages/Try").then((m) => ({ default: m.Try })));
const Admin = lazy(() => import("./pages/Admin").then((m) => ({ default: m.Admin })));

// GitHub Pages serves the same index.html for every route (404 fallback),
// so the canonical URL must be kept in sync with the current route.
function CanonicalSync() {
  const { pathname } = useLocation();
  useEffect(() => {
    const link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (link) link.href = `https://www.azerit.tech${pathname === "/" ? "/" : pathname}`;
  }, [pathname]);
  return null;
}

// Shared between the browser entry (main.tsx) and the build-time prerender
// entry (entry-prerender.tsx); the router lives outside so each can pick its own.
export function App() {
  return (
    <>
      <CanonicalSync />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/try" element={<Try />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Suspense>
    </>
  );
}
