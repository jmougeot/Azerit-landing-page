import { useEffect, useRef, useState } from "react";
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
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 800px)");
    const update = () => setIsMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) return;
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  // start the demo video only once it scrolls into view
  useEffect(() => {
    const el = frameRef.current;
    if (!el || isMobile || isOpen) return;
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
  }, [isMobile, isOpen]);

  const player = (
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
      autoPlay={isOpen}
    />
  );

  return (
    <>
      <div className="app-frame demo-inline" ref={frameRef}>
        {!isMobile && !isOpen ? player : null}
      </div>
      <div className="demo-preview">
        <span className="demo-preview-label">Illustrative example</span>
        <h2>See why they fit.</h2>
        <p className="demo-preview-role">Your role: senior backend · real-time systems</p>
        <div className="demo-preview-candidate">
          <div className="demo-preview-person">
            <strong>Léa Fabre</strong>
            <span className="demo-preview-score">#1 · match 94</span>
          </div>
          <p>Built a real-time matching engine in Rust, with a lock-free hot path.</p>
          <span className="demo-preview-repo">↗ lea-fabre/rt-order-matching</span>
        </div>
        <button ref={triggerRef} type="button" className="btn-try" onClick={() => setIsOpen(true)} aria-haspopup="dialog">
          <span aria-hidden="true">▶ </span>Watch the full demo
        </button>
      </div>
      <dialog
        ref={dialogRef}
        className="demo-dialog"
        aria-labelledby="demo-dialog-title"
        onCancel={() => setIsOpen(false)}
        onClose={() => setIsOpen(false)}
      >
        <div className="demo-dialog-head">
          <h2 id="demo-dialog-title">Azerit in action</h2>
          <button type="button" className="demo-close" onClick={() => setIsOpen(false)} autoFocus>
            Close <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="demo-dialog-body">
          <div className="demo-dialog-player">{isOpen ? player : null}</div>
        </div>
        <p className="demo-orientation-hint">Turn your phone sideways for a larger view.</p>
      </dialog>
    </>
  );
}
