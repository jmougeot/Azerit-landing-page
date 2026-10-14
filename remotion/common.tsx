import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, spring } from "remotion";
import { L } from "./theme";

// Plain white, like the app's own canvas: the window chrome around the video
// on the landing page does the framing, the video just shows the app.
export const SceneBg: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AbsoluteFill style={{ background: L.bg, fontFamily: L.sans, color: L.text }}>
    {children}
  </AbsoluteFill>
);

// Fondu entrée/sortie appliqué à toute une scène. fadeIn=false pour la
// première scène : la frame 0 sert de poster au player, elle doit montrer
// l'app, pas un écran noir.
export const FadeScene: React.FC<{
  durationInFrames: number;
  fadeIn?: boolean;
  children: React.ReactNode;
}> = ({ durationInFrames, fadeIn = true, children }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame,
    fadeIn
      ? [0, 12, durationInFrames - 12, durationInFrames]
      : [durationInFrames - 12, durationInFrames],
    fadeIn ? [0, 1, 1, 0] : [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  return <AbsoluteFill style={{ opacity }}>{children}</AbsoluteFill>;
};

export const usePop = (delay: number, distance = 14) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - delay, fps, config: { damping: 14, mass: 0.6 } });
  return {
    opacity: interpolate(s, [0, 1], [0, 1]),
    transform: `translateY(${interpolate(s, [0, 1], [distance, 0])}px)`,
  };
};

export const Pop: React.FC<{
  delay: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
  distance?: number;
}> = ({ delay, children, style, distance }) => {
  const pop = usePop(delay, distance);
  return <div style={{ ...pop, ...style }}>{children}</div>;
};

// Texte tapé caractère par caractère
export const TypeText: React.FC<{
  text: string;
  startFrame: number;
  charsPerFrame?: number;
  style?: React.CSSProperties;
  cursor?: boolean;
}> = ({ text, startFrame, charsPerFrame = 1.2, style, cursor = true }) => {
  const frame = useCurrentFrame();
  const chars = Math.max(0, Math.floor((frame - startFrame) * charsPerFrame));
  const shown = text.slice(0, chars);
  const done = chars >= text.length;
  const blink = Math.floor(frame / 15) % 2 === 0;
  return (
    <span style={style}>
      {shown}
      {cursor && (!done || blink) && chars > 0 && (
        <span style={{ color: L.green }}>▌</span>
      )}
    </span>
  );
};

// Number of characters TypeText shows at this frame (for live counters)
export const typedCount = (frame: number, text: string, startFrame: number, charsPerFrame: number) =>
  Math.min(text.length, Math.max(0, Math.floor((frame - startFrame) * charsPerFrame)));

// Légende flottante en bas de l'écran, par-dessus l'app. Même recette que
// les titres de panneau de l'app (.panel-title : mono, capitales, filet teal).
export const StepTag: React.FC<{ num: string; label: string }> = ({ num, label }) => {
  const pop = usePop(10, 22);
  return (
    <div
      style={{
        position: "absolute",
        bottom: 44,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        ...pop,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          background: L.bg,
          border: `1px solid ${L.border}`,
          borderRadius: 12,
          padding: "16px 30px 16px 26px",
          boxShadow: "0 16px 40px rgba(31, 35, 40, 0.16)",
        }}
      >
        <div
          style={{
            fontFamily: L.mono,
            fontSize: 17,
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: L.green,
            paddingLeft: 16,
            borderLeft: `4px solid ${L.green}`,
            lineHeight: 1.25,
            whiteSpace: "nowrap",
          }}
        >
          step {num}
        </div>
        <div style={{ fontFamily: L.sans, fontSize: 23, fontWeight: 600, color: L.text, lineHeight: 1.3 }}>
          {label}
        </div>
      </div>
    </div>
  );
};
