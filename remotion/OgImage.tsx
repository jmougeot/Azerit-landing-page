import React from "react";
import { AbsoluteFill } from "remotion";
import { LogoMark } from "../src/components/Logo";
import { T } from "./theme";

const GH_MARK =
  "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z";

// 1200x630 social sharing card, rendered once at build time via
// `remotion still OgImage public/og.png`.
export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

export const OgImage: React.FC = () => (
  <AbsoluteFill
    style={{
      background: T.bg,
      fontFamily: T.sans,
      justifyContent: "center",
      padding: "0 96px",
      overflow: "hidden",
    }}
  >
    {/* faint GitHub marks in the background, echoing the landing hero */}
    {[
      { top: 40, left: 860, size: 260, opacity: 0.05, rotate: -14 },
      { top: 400, left: 1020, size: 170, opacity: 0.06, rotate: 18 },
      { top: -60, left: 520, size: 150, opacity: 0.04, rotate: 8 },
      { top: 470, left: 640, size: 120, opacity: 0.05, rotate: -22 },
    ].map((l, i) => (
      <svg
        key={i}
        viewBox="0 0 16 16"
        fill={T.text}
        style={{
          position: "absolute",
          top: l.top,
          left: l.left,
          width: l.size,
          height: l.size,
          opacity: l.opacity,
          transform: `rotate(${l.rotate}deg)`,
        }}
      >
        <path d={GH_MARK} />
      </svg>
    ))}

    <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 42 }}>
      <LogoMark size={46} />
      <span style={{ fontFamily: T.mono, fontSize: 40, fontWeight: 700, color: T.text }}>
        azerit
      </span>
    </div>

    <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.06, color: T.text, letterSpacing: -2 }}>
      Find leads on <span style={{ color: T.green }}>GitHub</span>
      <br />
      with AI
    </div>

    <div style={{ marginTop: 34, fontSize: 30, lineHeight: 1.45, color: T.dim, maxWidth: 760 }}>
      We scan GitHub for devs already building in your niche, then reach out with messages that
      prove we read their code.
    </div>
  </AbsoluteFill>
);
