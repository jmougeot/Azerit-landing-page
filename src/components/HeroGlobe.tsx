import { useEffect, useRef } from "react";

// Hero globe in the spirit of github.com's homepage. This wrapper renders only
// an empty div (so SSR prerender + hydration stay trivial) and pulls in the
// three.js engine as a separate chunk once mounted in the browser.
export function HeroGlobe() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cancelled = false;
    let cleanup: (() => void) | undefined;
    import("./globe/engine").then((m) => {
      if (cancelled) return;
      cleanup = m.initGlobe(el);
    });
    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return <div ref={ref} className="hero-globe" aria-hidden />;
}
