import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, spring } from "remotion";
import { T } from "./theme";

export const SceneBg: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AbsoluteFill
    style={{
      background: T.bg,
      /* même grille de points que le hero de la landing (.dot-grid), version sombre */
      backgroundImage: `radial-gradient(circle at center, rgba(34,48,64,0.9) 2px, transparent 2.5px)`,
      backgroundSize: "34px 34px",
      fontFamily: T.sans,
      color: T.text,
    }}
  >
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

// Légende flottante en bas de l'écran, par-dessus le dashboard
export const StepTag: React.FC<{ num: string; label: string }> = ({ num, label }) => {
  const pop = usePop(10);
  return (
    <div
      style={{
        position: "absolute",
        bottom: 48,
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
          gap: 18,
          fontFamily: T.mono,
          background: "rgba(10, 15, 22, 0.94)",
          border: `1px solid ${T.border}`,
          borderRadius: 99,
          padding: "14px 30px",
          boxShadow: "0 16px 50px rgba(0,0,0,0.55)",
        }}
      >
        {/* même idiome que les tags [ step n ] des sections de la landing */}
        <div
          style={{
            color: T.green,
            fontSize: 20,
            fontWeight: 700,
            whiteSpace: "nowrap",
          }}
        >
          [ step {num} ]
        </div>
        <div style={{ fontSize: 22, color: T.text }}>{label}</div>
      </div>
    </div>
  );
};
