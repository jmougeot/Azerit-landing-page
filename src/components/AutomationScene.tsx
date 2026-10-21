import { useEffect, useRef } from "react";

// The about page's isometric machine. Renders only an empty div (so the
// prerender stays trivial) and pulls in the three.js engine as its own chunk
// once mounted in the browser, the same way HeroGlobe does.
export function AutomationScene() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cancelled = false;
    let cleanup: (() => void) | undefined;
    import("./automation/engine").then((m) => {
      if (cancelled) return;
      cleanup = m.initAutomation(el);
    });
    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return <div ref={ref} className="automation" aria-hidden />;
}
