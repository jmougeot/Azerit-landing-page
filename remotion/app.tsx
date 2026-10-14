import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { L } from "./theme";
import { LogoMark } from "../src/components/Logo";

/* ============ The real app, as a video ============
   Every component here is traced from App/ui/src (App.css, Sidebar.jsx,
   JobPage.jsx, LeadsPage.jsx): same px values, same colors, same copy style.
   The app is laid out in a 1280×660 window and scaled ×1.5 onto the 1920×990
   canvas, so on the landing page (where the video shows ~1300px wide) it
   reads at the app's real size. Cursor targets are in window coordinates. */
export const APP_W = 1280;
export const APP_H = 660;
export const APP_SCALE = 1.5;

const hair = `1px solid ${L.border}`;
const dashed = `1px dashed ${L.border}`;

/* ---- icons (paths copied from the app) ---- */
const PATHS = {
  linkedin:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
  github:
    "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z",
  mail:
    "M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z",
};
const VIEWBOX = { linkedin: "0 0 24 24", github: "0 0 16 16", mail: "0 0 16 16" };

export const Icon: React.FC<{ name: keyof typeof PATHS; size?: number; color?: string }> = ({
  name,
  size = 16,
  color = L.text,
}) => (
  <svg width={size} height={size} viewBox={VIEWBOX[name]} aria-hidden style={{ display: "block", flexShrink: 0 }}>
    <path d={PATHS[name]} fill={color} />
  </svg>
);

const NavIcon: React.FC<{ name: "candidates" | "search" | "settings"; color: string }> = ({ name, color }) => {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 20 20",
    fill: "none",
    stroke: color,
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    style: { flexShrink: 0, display: "block" },
  };
  if (name === "candidates")
    return (
      <svg {...common}>
        <circle cx="10" cy="6" r="3" />
        <path d="M4.5 16c.6-3 2.4-4.5 5.5-4.5s4.9 1.5 5.5 4.5" />
      </svg>
    );
  if (name === "settings")
    return (
      <svg {...common}>
        <path d="M3 5h14M3 10h14M3 15h14" />
        <circle cx="7" cy="5" r="1.5" fill="white" />
        <circle cx="13" cy="10" r="1.5" fill="white" />
        <circle cx="8.5" cy="15" r="1.5" fill="white" />
      </svg>
    );
  return (
    <svg {...common}>
      <circle cx="8.5" cy="8.5" r="5" />
      <path d="m12.2 12.2 4 4" />
    </svg>
  );
};

const GearButton: React.FC = () => (
  <div
    style={{
      marginLeft: "auto",
      alignSelf: "center",
      display: "grid",
      placeItems: "center",
      width: 34,
      height: 34,
      border: hair,
      borderRadius: 8,
      background: L.bg,
      color: L.dim,
      flexShrink: 0,
    }}
  >
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"
      />
    </svg>
  </div>
);

/* ---- the window : sidebar + main, scaled onto the canvas ----
   Plain <div>s only, no <main>/<h1>/<p>: the player renders inside the
   landing page, whose global `main { background-image }` rule would paint
   the page's dot grid over the video. */
export type NavId = "jobs" | "search" | "settings";

const NavItem: React.FC<{
  active: boolean;
  icon: "candidates" | "search" | "settings";
  label: string;
  badge?: string;
  badgeOn?: boolean;
}> = ({ active, icon, label, badge, badgeOn = true }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 10,
      minHeight: 46,
      padding: "11px 10px",
      borderRadius: 8,
      fontSize: 16,
      fontWeight: 600,
      color: active ? L.green : L.text,
      lineHeight: 1.5,
    }}
  >
    <NavIcon name={icon} color={active ? L.green : "#111111"} />
    {label}
    {badge !== undefined && (
      <span
        style={{
          marginLeft: "auto",
          fontFamily: L.mono,
          fontSize: 11.5,
          fontWeight: 700,
          color: L.green,
          border: `1px solid ${L.greenLine}`,
          background: L.greenSoft,
          borderRadius: 6,
          padding: "1px 8px",
          lineHeight: 1.6,
          opacity: badgeOn ? 1 : 0,
        }}
      >
        {badge}
      </span>
    )}
  </div>
);

const Sidebar: React.FC<{ nav: NavId; searching: boolean; jobCount: number }> = ({ nav, searching, jobCount }) => {
  const frame = useCurrentFrame();
  const blinkOn = Math.floor(frame / 18) % 2 === 0; // .badge.pulse : 1.2s step-end
  return (
    <div
      style={{
        width: 290,
        flexShrink: 0,
        height: APP_H,
        background: L.bg,
        borderRight: hair,
        padding: "28px 18px",
        display: "flex",
        flexDirection: "column",
        gap: 6,
      }}
    >
      <div
        style={{
          fontFamily: L.mono,
          fontWeight: 700,
          fontSize: 17,
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "0 14px",
          marginBottom: 28,
          lineHeight: 1.6,
        }}
      >
        <LogoMark size={18} /> azerit
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <NavItem active={nav === "jobs"} icon="candidates" label="Positions" badge={String(jobCount)} />
        <NavItem
          active={nav === "search"}
          icon="search"
          label={searching ? "Searching…" : "New position"}
          badge={searching ? "…" : undefined}
          badgeOn={blinkOn}
        />
        <NavItem active={nav === "settings"} icon="settings" label="Settings" />
      </div>
      <div
        style={{
          marginTop: "auto",
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "12px 12px 4px",
          borderTop: dashed,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 13.5, fontWeight: 600, lineHeight: 1.5 }}>Jacques</span>
          <span style={{ fontFamily: L.mono, fontSize: 11.5, color: L.dim, lineHeight: 1.3 }}>Sign out</span>
        </div>
      </div>
    </div>
  );
};

export const AppWindow: React.FC<{
  nav: NavId;
  searching?: boolean;
  jobCount?: number;
  children: React.ReactNode;
  overlay?: React.ReactNode;
}> = ({ nav, searching = false, jobCount = 4, children, overlay }) => (
  <AbsoluteFill>
    <div
      style={{
        width: APP_W,
        height: APP_H,
        transform: `scale(${APP_SCALE})`,
        transformOrigin: "top left",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        background: L.bg,
        color: L.text,
        fontFamily: L.sans,
        lineHeight: 1.6,
      }}
    >
      <Sidebar nav={nav} searching={searching} jobCount={jobCount} />
      <div style={{ flex: 1, minWidth: 0, padding: "48px 56px 40px" }}>{children}</div>
      {overlay}
    </div>
  </AbsoluteFill>
);

/* ---- page furniture ---- */
export const BackLink: React.FC = () => (
  <div style={{ fontFamily: L.mono, fontSize: 12.5, color: L.dim, marginBottom: 14, lineHeight: 1.4 }}>
    ← Positions
  </div>
);

// .panel-title : capitales mono, filet teal à gauche
export const PanelTitle: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
  <div
    style={{
      fontFamily: L.mono,
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: L.green,
      paddingLeft: 12,
      borderLeft: `3px solid ${L.green}`,
      lineHeight: 1.5,
      ...style,
    }}
  >
    {children}
  </div>
);

export const StatusPill: React.FC<{ state: "open" | "running" }> = ({ state }) => (
  <span
    style={{
      fontFamily: L.mono,
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      borderRadius: 6,
      padding: "2px 8px",
      alignSelf: "center",
      lineHeight: 1.6,
      ...(state === "running"
        ? { color: "#ffffff", background: L.green, border: `1px solid ${L.green}` }
        : { color: L.green, border: `1px solid ${L.greenLine}`, background: L.greenSoft }),
    }}
  >
    {state}
  </span>
);

export const JobHead: React.FC<{
  title: string;
  company: string;
  state: "open" | "running";
  children?: React.ReactNode;
}> = ({ title, company, state, children }) => (
  <div style={{ marginBottom: 26 }}>
    <BackLink />
    <div style={{ display: "flex", alignItems: "baseline", gap: "6px 14px" }}>
      <div
        style={{
          fontFamily: L.mono,
          fontSize: 38,
          fontWeight: 800,
          letterSpacing: "-0.03em",
          lineHeight: 1.08,
          margin: 0,
          whiteSpace: "nowrap",
        }}
      >
        {title}
      </div>
      <span style={{ fontFamily: L.mono, fontSize: 15, color: L.dim, whiteSpace: "nowrap" }}>· {company}</span>
      <StatusPill state={state} />
      <GearButton />
    </div>
    {children}
  </div>
);

// .job-progress : bandeau vert sous le titre pendant qu'une recherche tourne
export const JobProgress: React.FC<{ text: string; style?: React.CSSProperties }> = ({ text, style }) => {
  const frame = useCurrentFrame();
  const on = Math.floor(frame / 18) % 2 === 0;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginTop: 14,
        padding: "10px 14px",
        border: `1px solid ${L.greenLine}`,
        background: L.greenSoft,
        borderRadius: 8,
        fontFamily: L.mono,
        fontSize: 12.5,
        color: L.green,
        lineHeight: 1.6,
        ...style,
      }}
    >
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: L.green, opacity: on ? 1 : 0, flexShrink: 0 }} />
      {text}
      <span style={{ marginLeft: "auto", fontWeight: 700 }}>View log →</span>
    </div>
  );
};

// .li-stats : les chiffres de l'approche LinkedIn du poste, sous son titre
export const OutreachStats: React.FC<{ contacted: number; invited: number; accepted: number; replied: number; style?: React.CSSProperties }> = ({
  contacted,
  invited,
  accepted,
  replied,
  style,
}) => {
  const b = { color: L.text, fontWeight: 700 } as const;
  const rate = contacted > 0 ? Math.round((replied / contacted) * 100) : 0;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px 18px",
        margin: "14px 0 4px",
        fontFamily: L.mono,
        fontSize: 12.5,
        color: L.dim,
        lineHeight: 1.6,
        ...style,
      }}
    >
      <span>LinkedIn outreach</span>
      <span>
        <span style={b}>{contacted}</span> contacted
      </span>
      <span>
        <span style={b}>{accepted}</span>/{invited} invitations accepted
      </span>
      <span>
        <span style={b}>{replied}</span> replied · {rate}%
      </span>
    </div>
  );
};

/* ---- candidates ---- */
export type Candidate = {
  initials: string;
  color: string;
  name: string;
  role: string;
  company: string;
  location: string;
  inArea?: boolean;
  exp: string;
};

// .cand-face : visage du candidat. L'app montre sa photo ; ici ses initiales
// sur un rond teinté, à défaut de photos.
export const Face: React.FC<{ initials: string; color: string; size?: number }> = ({ initials, color, size = 28 }) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: "50%",
      flexShrink: 0,
      background: `color-mix(in srgb, ${color} 14%, #ffffff)`,
      border: `1px solid color-mix(in srgb, ${color} 40%, #ffffff)`,
      color,
      fontFamily: L.mono,
      fontSize: Math.round(size * 0.36),
      fontWeight: 700,
      lineHeight: 1,
    }}
  >
    {initials}
  </span>
);

// .candidate-links : icônes LinkedIn + GitHub ; encadrées dans le tableau,
// nues en tête de fiche
export const CandidateLinks: React.FC<{ framed?: boolean; gap?: number }> = ({ framed = true, gap = 8 }) => (
  <span style={{ display: "inline-flex", gap }}>
    {(["linkedin", "github"] as const).map((n) => (
      <span
        key={n}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 28,
          height: 28,
          border: framed ? hair : "none",
          borderRadius: 6,
          background: framed ? L.bgSoft : "transparent",
        }}
      >
        <Icon name={n} size={16} />
      </span>
    ))}
  </span>
);

// .fb-thumb : pouces 👍/👎 (discrets tant qu'ils ne sont pas posés)
const Thumb: React.FC<{ up: boolean; active?: boolean; compact?: boolean }> = ({ up, active = false, compact = true }) => (
  <span
    style={{
      display: "inline-block",
      border: `1px solid ${active ? (up ? L.green : "#c1362b") : L.border}`,
      background: active ? (up ? L.greenSoft : "rgba(193, 54, 43, 0.08)") : L.bg,
      borderRadius: compact ? 6 : 8,
      padding: compact ? "1px 5px" : "3px 7px",
      fontSize: compact ? 12 : 15,
      lineHeight: 1.4,
      marginRight: compact ? 3 : 0,
      filter: active ? "none" : "grayscale(0.6)",
      opacity: active ? 1 : 0.55,
    }}
  >
    {up ? "👍" : "👎"}
  </span>
);

// .li-badge--ok : pastille d'avancement LinkedIn
export const RepliedBadge: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <span
    style={{
      display: "inline-block",
      fontFamily: L.mono,
      fontSize: 11,
      padding: "2px 8px",
      borderRadius: 999,
      whiteSpace: "nowrap",
      color: L.greenDim,
      border: `1px solid ${L.greenLine}`,
      background: L.greenSoft,
      lineHeight: 1.5,
      marginLeft: 8,
      verticalAlign: "middle",
      ...style,
    }}
  >
    💬 Replied
  </span>
);

const COLS = "50px 208px minmax(0, 1fr) 118px 110px 58px 80px 76px";
const HEADERS = ["", "Candidate", "Current role", "Company", "Location", "Exp.", "Links", "Rating"];

const cell: React.CSSProperties = {
  padding: "9px 10px",
  minWidth: 0,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  display: "flex",
  alignItems: "center",
};

// .cand-table : tableau pleine largeur, entêtes en capitales mono, lignes
// séparées par des tirets. Grille plutôt que <table> pour pouvoir animer
// chaque ligne (transform sur un <tr> est capricieux).
export const CandTable: React.FC<{
  rows: Candidate[];
  selected?: number;
  rowStyle?: (i: number) => React.CSSProperties;
  decorate?: (i: number) => React.ReactNode;
  thumbsUp?: (i: number) => boolean;
}> = ({ rows, selected = -1, rowStyle, decorate, thumbsUp }) => (
  <div style={{ fontSize: 13 }}>
    <div style={{ display: "grid", gridTemplateColumns: COLS, borderBottom: hair }}>
      {HEADERS.map((h, i) => (
        <div
          key={i}
          style={{
            fontFamily: L.mono,
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: L.dim,
            padding: "8px 10px",
            whiteSpace: "nowrap",
            lineHeight: 1.6,
          }}
        >
          {h}
        </div>
      ))}
    </div>
    {rows.map((r, i) => (
      <div
        key={r.name}
        style={{
          display: "grid",
          gridTemplateColumns: COLS,
          borderBottom: dashed,
          background: selected === i ? L.greenSoft : "transparent",
          ...rowStyle?.(i),
        }}
      >
        <div style={cell}>
          <Face initials={r.initials} color={r.color} />
        </div>
        <div style={{ ...cell, fontSize: 13.5, fontWeight: 700 }}>
          <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{r.name}</span>
          {decorate?.(i)}
        </div>
        <div style={{ ...cell, whiteSpace: "normal", lineHeight: 1.3 }}>
          <span
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
            }}
          >
            {r.role}
          </span>
        </div>
        <div style={cell}>
          <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{r.company}</span>
        </div>
        <div style={{ ...cell, color: r.inArea ? L.green : L.dim, fontWeight: r.inArea ? 700 : 400 }}>
          <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{r.location}</span>
        </div>
        <div style={{ ...cell, fontFamily: L.mono, fontSize: 11.5, color: L.dim }}>{r.exp}</div>
        <div style={cell}>
          <CandidateLinks />
        </div>
        <div style={{ ...cell, overflow: "visible" }}>
          <Thumb up active={thumbsUp?.(i) ?? false} />
          <Thumb up={false} />
        </div>
      </div>
    ))}
  </div>
);

/* ---- the candidate drawer (.cand-drawer) ---- */
export const Drawer: React.FC<{ offset?: number; backdrop?: number; children: React.ReactNode }> = ({
  offset = 0,
  backdrop = 1,
  children,
}) => (
  <>
    <div style={{ position: "absolute", inset: 0, background: "rgba(31, 35, 40, 0.28)", opacity: backdrop }} />
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        width: 680,
        padding: "20px 32px 32px",
        background: L.bg,
        borderLeft: hair,
        boxShadow: "-12px 0 32px rgba(31, 35, 40, 0.12)",
        transform: `translateX(${offset}px)`,
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  </>
);

export const DrawerHead: React.FC<{
  face: { initials: string; color: string };
  name: string;
  meta: string[];
  email: string;
}> = ({ face, name, meta, email }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 18 }}>
    <Face initials={face.initials} color={face.color} size={48} />
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ fontSize: 21, fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.01em" }}>{name}</div>
      {meta.map((m) => (
        <div key={m} style={{ margin: "4px 0 0", fontSize: 13, lineHeight: 1.5, color: L.dim }}>
          {m}
        </div>
      ))}
      <div style={{ margin: "4px 0 0", fontSize: 13, lineHeight: 1.5, color: L.dim }}>{email}</div>
    </div>
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
      <CandidateLinks framed={false} gap={2} />
      <span
        style={{
          width: 28,
          height: 28,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          color: L.dim,
        }}
      >
        ✕
      </span>
    </span>
  </div>
);

// .feedback-bar : commentaire libre + pouces
export const FeedbackBar: React.FC = () => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 14 }}>
    <div
      style={{
        flex: 1,
        minWidth: 0,
        border: "1px solid transparent",
        borderRadius: 8,
        background: L.bgSoft,
        padding: "4px 10px",
        fontSize: 13,
        lineHeight: 1.5,
        color: L.dim,
      }}
    >
      A note on this profile…
    </div>
    <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
      <span style={{ display: "inline-block", padding: "3px 7px", fontSize: 15, lineHeight: 1.4, filter: "grayscale(0.6)", opacity: 0.7 }}>👍</span>
      <span style={{ display: "inline-block", padding: "3px 7px", fontSize: 15, lineHeight: 1.4, filter: "grayscale(0.6)", opacity: 0.7 }}>👎</span>
    </div>
  </div>
);

export const DETAIL_TABS = ["Why", "Experience", "Interview", "Message"];

// .detail-tabs : onglets mono, l'actif souligné de teal
export const Tabs: React.FC<{ active: string }> = ({ active }) => (
  <div style={{ display: "flex", gap: 4, marginTop: 4, paddingTop: 8 }}>
    {DETAIL_TABS.map((t) => {
      const on = t === active;
      return (
        <span
          key={t}
          style={{
            padding: "8px 14px",
            borderBottom: `2px solid ${on ? L.green : "transparent"}`,
            fontFamily: L.mono,
            fontSize: 12.5,
            color: on ? L.text : L.dim,
            fontWeight: on ? 700 : 400,
            lineHeight: 1.6,
          }}
        >
          {t}
        </span>
      );
    })}
  </div>
);

export const DetailLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      fontFamily: L.mono,
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: L.dim,
      marginBottom: 8,
      lineHeight: 1.6,
    }}
  >
    {children}
  </div>
);

// .fit-comp : une compétence de la fiche, son statut, le lien vers la preuve,
// et le détail quand elle est dépliée (progress 0→1)
export const FitRow: React.FC<{
  mark: "ok" | "partiel";
  label: string;
  link?: string;
  proof?: string;
  open?: number;
  style?: React.CSSProperties;
}> = ({ mark, label, link, proof, open = 0, style }) => (
  <div style={{ borderBottom: hair, ...style }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 10, padding: "10px 2px", fontSize: 14, fontWeight: 600, lineHeight: 1.6 }}>
      <span
        style={{
          flexShrink: 0,
          width: 14,
          fontWeight: 700,
          textAlign: "center",
          color: mark === "ok" ? L.green : L.orange,
        }}
      >
        {mark === "ok" ? "✓" : "◐"}
      </span>
      <span style={{ flex: 1, textDecoration: open > 0.5 ? "underline" : "none", textUnderlineOffset: 3 }}>{label}</span>
      {link && (
        <span
          style={{
            flexShrink: 1,
            maxWidth: "40%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            fontFamily: L.mono,
            fontSize: 11.5,
            fontWeight: 400,
            color: L.dim,
          }}
        >
          {link} ↗
        </span>
      )}
      {proof && (
        <span
          style={{
            flexShrink: 0,
            alignSelf: "center",
            width: 7,
            height: 7,
            marginRight: 4,
            borderRight: `1.5px solid ${L.dim}`,
            borderBottom: `1.5px solid ${L.dim}`,
            transform: `rotate(${interpolate(open, [0, 1], [45, -135])}deg) translateY(-2px)`,
          }}
        />
      )}
    </div>
    {proof && open > 0 && (
      <div style={{ overflow: "hidden", maxHeight: open * 90, opacity: open }}>
        <div style={{ margin: "0 0 12px 24px", fontSize: 13, lineHeight: 1.55, color: L.dim }}>{proof}</div>
      </div>
    )}
  </div>
);

// .msg-btn
export const MsgBtn: React.FC<{ primary?: boolean; done?: boolean; children: React.ReactNode }> = ({
  primary = false,
  done = false,
  children,
}) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      border: `1px solid ${primary ? L.green : L.border}`,
      background: primary ? (done ? L.greenSoft : L.green) : L.bg,
      color: primary ? (done ? L.green : "#ffffff") : L.text,
      borderRadius: 8,
      padding: "6px 13px",
      fontSize: 13,
      fontWeight: 500,
      lineHeight: 1.4,
      whiteSpace: "nowrap",
    }}
  >
    {children}
  </span>
);

/* ---- simulated cursor, in window coordinates ---- */
export const Cursor: React.FC<{ x: number; y: number; down?: boolean; opacity?: number }> = ({
  x,
  y,
  down = false,
  opacity = 1,
}) => (
  <div
    style={{
      position: "absolute",
      left: x,
      top: y,
      opacity,
      transform: `scale(${down ? 0.84 : 1})`,
      transformOrigin: "top left",
      zIndex: 50,
      filter: "drop-shadow(0 2px 5px rgba(31, 35, 40, 0.32))",
      pointerEvents: "none",
    }}
  >
    <svg width="26" height="26" viewBox="0 0 24 24">
      <path
        d="M4 1 L4 20 L8.5 15.7 L11.5 22 L14.4 20.6 L11.5 14.5 L18 14.5 Z"
        fill={L.text}
        stroke="#ffffff"
        strokeWidth="1.4"
      />
    </svg>
  </div>
);

// Glide from one point to another between two frames, eased
export const glide = (frame: number, from: [number, number, number], to: [number, number, number]) => ({
  x: interpolate(frame, [from[0], to[0]], [from[1], to[1]], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  }),
  y: interpolate(frame, [from[0], to[0]], [from[2], to[2]], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  }),
});

export const fadeIn = (frame: number, start: number, len = 10) =>
  interpolate(frame, [start, start + len], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
