import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, spring } from "remotion";
import { T } from "./theme";

export const SceneBg: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AbsoluteFill
    style={{
      background: T.bg,
      backgroundImage: `linear-gradient(rgba(48,54,61,0.25) 1px, transparent 1px),
        linear-gradient(90deg, rgba(48,54,61,0.25) 1px, transparent 1px)`,
      backgroundSize: "60px 60px",
      fontFamily: T.sans,
      color: T.text,
    }}
  >
    {children}
  </AbsoluteFill>
);

// Fondu entrée/sortie appliqué à toute une scène
export const FadeScene: React.FC<{
  durationInFrames: number;
  children: React.ReactNode;
}> = ({ durationInFrames, children }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame,
    [0, 12, durationInFrames - 12, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  return <AbsoluteFill style={{ opacity }}>{children}</AbsoluteFill>;
};

export const usePop = (delay: number) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - delay, fps, config: { damping: 14, mass: 0.6 } });
  return {
    opacity: interpolate(s, [0, 1], [0, 1]),
    transform: `translateY(${interpolate(s, [0, 1], [26, 0])}px) scale(${interpolate(s, [0, 1], [0.96, 1])})`,
  };
};

export const Pop: React.FC<{
  delay: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ delay, children, style }) => {
  const pop = usePop(delay);
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
        <span style={{ color: T.green }}>▌</span>
      )}
    </span>
  );
};

export const StepTag: React.FC<{ num: string; label: string }> = ({ num, label }) => (
  <div
    style={{
      position: "absolute",
      top: 56,
      left: 80,
      display: "flex",
      alignItems: "center",
      gap: 16,
      fontFamily: T.mono,
    }}
  >
    <div
      style={{
        background: T.greenSoft,
        border: `2px solid ${T.green}`,
        color: T.green,
        borderRadius: 100,
        padding: "6px 22px",
        fontSize: 26,
        fontWeight: 700,
      }}
    >
      {num}
    </div>
    <div style={{ fontSize: 30, color: T.dim }}>{label}</div>
  </div>
);
