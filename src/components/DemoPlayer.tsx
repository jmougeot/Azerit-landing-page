import { useEffect, useRef } from "react";
import { Player, PlayerRef } from "@remotion/player";
import {
  DemoVideo,
  DEMO_DURATION,
  DEMO_FPS,
  DEMO_WIDTH,
  DEMO_HEIGHT,
} from "../../remotion/DemoVideo";

// Isolated so the Remotion player + demo scenes land in their own lazy chunk,
// keeping them out of the landing page's critical path.
export function DemoPlayer() {
  const playerRef = useRef<PlayerRef>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  // start the demo video only once it scrolls into view
  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playerRef.current?.play();
          obs.disconnect();
        }
      },
      { threshold: 0.45 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="app-frame" ref={frameRef}>
      <div className="app-bar">
        <span className="dots">
          <span className="d" />
          <span className="d" />
          <span className="d" />
        </span>
        <span className="url">app.azerit.com</span>
        <span className="spacer" />
      </div>
      <Player
        ref={playerRef}
        component={DemoVideo}
        durationInFrames={DEMO_DURATION}
        fps={DEMO_FPS}
        compositionWidth={DEMO_WIDTH}
        compositionHeight={DEMO_HEIGHT}
        style={{ width: "100%" }}
        controls
        loop
        initiallyMuted
      />
    </div>
  );
}
