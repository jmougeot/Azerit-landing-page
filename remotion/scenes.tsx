import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  spring,
} from "remotion";
import { L } from "./theme";
import { Pop, TypeText, StepTag } from "./common";
import { LogoMark } from "../src/components/Logo";

/* ============ Dashboard shell : full-screen app (sidebar + content) ============ */
/* The video IS the app — no window chrome inside. It borrows the landing
   page's vocabulary: light surfaces, hairline panels with teal corner squares,
   square tags and avatars, mono titles. Nothing pill-shaped. */
const NAV = [
  { id: "describe", label: "1 · Your role" },
  { id: "rank", label: "2 · Ranked candidates" },
  { id: "outreach", label: "3 · Outreach" },
  { id: "inbox", label: "Inbox" },
];

const DashFrame: React.FC<{
  active: string;
  children: React.ReactNode;
}> = ({ active, children }) => (
  <AbsoluteFill style={{ flexDirection: "row" }}>
    <div
      style={{
        width: 320,
        flexShrink: 0,
        borderRight: `1px solid ${L.border}`,
        padding: "44px 0",
        background: L.bgSoft,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          fontFamily: L.mono,
          fontSize: 23,
          fontWeight: 700,
          padding: "0 38px",
          marginBottom: 40,
        }}
      >
        <LogoMark size={30} /> azerit
      </div>
      {NAV.map((n) => {
        const on = n.id === active;
        return (
          <div
            key={n.id}
            style={{
              fontFamily: L.mono,
              fontSize: 18,
              padding: "15px 38px",
              color: on ? L.green : L.dim,
              background: on ? L.greenSoft : "transparent",
              /* même marque que les lignes .repo-row.hit de la landing */
              boxShadow: on ? `inset 3px 0 0 ${L.green}` : "none",
              fontWeight: on ? 700 : 400,
            }}
          >
            {n.label}
          </div>
        );
      })}
    </div>
    <div
      style={{
        flex: 1,
        padding: "52px 72px 120px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: 1340, width: "100%", margin: "0 auto" }}>{children}</div>
    </div>
  </AbsoluteFill>
);

const PageTitle: React.FC<{ title: string; right?: React.ReactNode }> = ({ title, right }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 26,
    }}
  >
    <div style={{ fontFamily: L.mono, fontSize: 30, fontWeight: 700, letterSpacing: "-0.03em" }}>
      {title}
    </div>
    {right}
  </div>
);

/* Teal squares where the panel's hairlines cross, like the landing's bands */
const Corner: React.FC<{ pos: React.CSSProperties }> = ({ pos }) => (
  <div style={{ position: "absolute", width: 10, height: 10, background: L.green, ...pos }} />
);

const Panel: React.FC<{
  head?: React.ReactNode;
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ head, children, style }) => (
  <div style={{ position: "relative", background: L.bg, border: `1px solid ${L.border}`, ...style }}>
    {head && (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          padding: "14px 26px",
          background: L.bgSoft,
          borderBottom: `1px solid ${L.border}`,
          fontFamily: L.mono,
          fontSize: 16,
          color: L.dim,
        }}
      >
        {head}
      </div>
    )}
    {children}
    <Corner pos={{ top: -6, left: -6 }} />
    <Corner pos={{ top: -6, right: -6 }} />
    <Corner pos={{ bottom: -6, left: -6 }} />
    <Corner pos={{ bottom: -6, right: -6 }} />
  </div>
);

/* "■ label" status line, as in the landing's "■ scanning github…" feed head */
const Status: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = L.green }) => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 12, color }}>
    <span style={{ width: 10, height: 10, background: color, flexShrink: 0 }} />
    {children}
  </span>
);

const Tag: React.FC<{ color?: string; solid?: boolean; children: React.ReactNode }> = ({
  color = L.green,
  solid = false,
  children,
}) => (
  <div
    style={{
      fontFamily: L.mono,
      fontSize: 15,
      fontWeight: 700,
      color: solid ? "#ffffff" : color,
      background: solid ? color : L.bg,
      border: `1px solid ${color}`,
      borderRadius: 4,
      padding: "5px 14px",
      whiteSpace: "nowrap",
    }}
  >
    {children}
  </div>
);

/* GitHub-style square avatar: tinted tile, initials in the accent */
const Avatar: React.FC<{ initials: string; color: string; size: number }> = ({ initials, color, size }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: 8,
      flexShrink: 0,
      background: `color-mix(in srgb, ${color} 12%, #ffffff)`,
      border: `1px solid color-mix(in srgb, ${color} 35%, #ffffff)`,
      color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: L.mono,
      fontSize: Math.round(size * 0.33),
      fontWeight: 700,
    }}
  >
    {initials}
  </div>
);

const Button: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
  <div
    style={{
      display: "inline-block",
      fontFamily: L.mono,
      fontSize: 20,
      fontWeight: 700,
      /* même recette que le .hero-cta .btn-try de la landing : teal plat */
      color: "#ffffff",
      background: L.green,
      borderRadius: 8,
      padding: "17px 36px",
      ...style,
    }}
  >
    {children}
  </div>
);

/* Simulated mouse cursor */
const Cursor: React.FC<{ x: number; y: number; down?: boolean; opacity?: number }> = ({
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
      transform: `scale(${down ? 0.82 : 1})`,
      transformOrigin: "top left",
      zIndex: 20,
      filter: "drop-shadow(0 4px 8px rgba(31,35,40,0.3))",
    }}
  >
    <svg width="42" height="42" viewBox="0 0 24 24">
      <path
        d="M4 1 L4 20 L8.5 15.7 L11.5 22 L14.4 20.6 L11.5 14.5 L18 14.5 Z"
        fill={L.text}
        stroke="#ffffff"
        strokeWidth="1.4"
      />
    </svg>
  </div>
);

/* ============ Scene 1 — Describe : the client types the role they're hiring for ============ */
const ROLE_TEXT = "Senior backend engineer, real-time systems (Rust or Go).";

export const SceneDescribe: React.FC = () => {
  const frame = useCurrentFrame();
  const cx = interpolate(frame, [72, 100], [1350, 640], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const cy = interpolate(frame, [72, 100], [835, 600], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const cursorOpacity = interpolate(frame, [65, 75], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const pressed = frame >= 105 && frame <= 114;
  const scanCount = Math.round(
    interpolate(frame, [118, 162], [0, 2148302], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
  );
  const focused = frame < 80;
  return (
    <AbsoluteFill>
      <DashFrame active="describe">
        <PageTitle title="Your role" />
        <Panel head={<span style={{ color: L.green }}>[ input ]</span>} style={{ padding: 0 }}>
          <div style={{ padding: "30px 36px 36px" }}>
            <div style={{ fontSize: 21, color: L.dim, marginBottom: 16 }}>Who are you hiring?</div>
            <div
              style={{
                background: L.bg,
                border: `1px solid ${focused ? L.green : L.border}`,
                boxShadow: focused ? `0 0 0 4px ${L.greenSoft}` : "none",
                borderRadius: 8,
                padding: "26px 30px",
                fontSize: 23,
                minHeight: 96,
                marginBottom: 30,
              }}
            >
              <TypeText text={ROLE_TEXT} startFrame={20} charsPerFrame={1.2} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
              {/* visible dès la frame 0 : elle sert de poster au player */}
              <Button style={{ transform: `scale(${pressed ? 0.94 : 1})` }}>Find my candidates</Button>
              <div
                style={{
                  fontFamily: L.mono,
                  fontSize: 18,
                  opacity: frame >= 118 ? 1 : 0,
                }}
              >
                {frame < 168 ? (
                  <Status color={L.dim}>
                    scanning github… {scanCount.toLocaleString("en-US")} profiles
                  </Status>
                ) : (
                  <Status>27 devs matched · ranked on shipped work</Status>
                )}
              </div>
            </div>
          </div>
        </Panel>
      </DashFrame>
      <Cursor x={cx} y={cy} down={pressed} opacity={cursorOpacity} />
      <StepTag num="1" label="Describe the role you're hiring for" />
    </AbsoluteFill>
  );
};

/* ============ Scene 2 — Rank : candidates sorted by match, click the top one ============ */
const CANDIDATES = [
  {
    initials: "LF",
    name: "Léa Fabre",
    role: "Staff SWE · rt-order-matching",
    signal: "lock-free hot path · Rust",
    score: 94,
    color: L.purple,
  },
  {
    initials: "SB",
    name: "Sami Benali",
    role: "Backend eng · distributed-kv",
    signal: "Raft from scratch · Go",
    score: 87,
    color: L.blue,
  },
  {
    initials: "NT",
    name: "Nina Torres",
    role: "Infra eng · ws-gateway",
    signal: "50k conns per node",
    score: 81,
    color: L.orange,
  },
  {
    initials: "MO",
    name: "Marc Olivier",
    role: "Systems eng · lockfree-queue",
    signal: "MPMC queue + benchmarks",
    score: 74,
    color: L.green,
  },
];

export const SceneRank: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const cx = interpolate(frame, [115, 150], [1400, 720], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const cy = interpolate(frame, [115, 150], [855, 362], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const cursorOpacity = interpolate(frame, [108, 118], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const clicked = frame >= 158;
  return (
    <AbsoluteFill>
      <DashFrame active="rank">
        <PageTitle title="Ranked candidates" right={<Tag>sorted by match ▾</Tag>} />
        <Panel
          head={
            <>
              <Status>27 devs matched</Status>
              <span>ranked on shipped work</span>
            </>
          }
        >
          {CANDIDATES.map((l, i) => {
            const delay = 15 + i * 14;
            const p = spring({ frame: frame - delay, fps, config: { damping: 16 } });
            const top = i === 0;
            const lit = top && clicked;
            return (
              <div
                key={l.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 24,
                  padding: "20px 26px",
                  borderTop: i === 0 ? "none" : `1px solid ${L.border}`,
                  opacity: p,
                  transform: `translateY(${interpolate(p, [0, 1], [24, 0])}px)`,
                  background: lit ? "rgba(15, 118, 110, 0.14)" : top ? L.greenSoft : L.bg,
                  boxShadow: top ? `inset 3px 0 0 ${L.green}` : "none",
                }}
              >
                <div style={{ fontFamily: L.mono, fontSize: 18, color: L.dim, width: 34 }}>
                  #{i + 1}
                </div>
                <Avatar initials={l.initials} color={l.color} size={56} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 21, fontWeight: 700 }}>{l.name}</div>
                  <div style={{ fontFamily: L.mono, fontSize: 15, color: L.dim, marginTop: 2 }}>
                    {l.role}
                  </div>
                </div>
                <Tag color={L.blue}>{l.signal}</Tag>
                <div style={{ width: 130, textAlign: "right" }}>
                  <div style={{ fontFamily: L.mono, fontSize: 33, fontWeight: 700, color: L.green }}>
                    {Math.round(p * l.score)}
                  </div>
                  <div style={{ height: 6, background: L.track, marginTop: 4 }}>
                    <div style={{ height: "100%", width: `${p * l.score}%`, background: L.green }} />
                  </div>
                </div>
              </div>
            );
          })}
        </Panel>
      </DashFrame>
      <Cursor x={cx} y={cy} down={frame >= 158 && frame <= 168} opacity={cursorOpacity} />
      <StepTag num="2" label="Your candidates, ranked on shipped work" />
    </AbsoluteFill>
  );
};

/* ============ Scene 3 — Why : the proof behind the score ============ */
const WHY = [
  {
    badge: "built it already",
    color: L.green,
    text: "rt-order-matching: a real-time matching engine, lock-free hot path",
  },
  {
    badge: "ships daily",
    color: L.blue,
    text: "3,669 contributions and 212 pull requests reviewed this year",
  },
  {
    badge: "stack match",
    color: L.purple,
    text: "Rust 52% · Go 26% · TypeScript 14% — exactly your stack",
  },
  {
    badge: "reachable",
    color: L.orange,
    text: "lea.fabre@… found in commit metadata",
  },
];

export const SceneWhy: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const score = Math.round(
    interpolate(frame, [20, 75], [0, 94], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
  );
  return (
    <AbsoluteFill>
      <DashFrame active="rank">
        <div style={{ fontFamily: L.mono, fontSize: 16, color: L.dim, marginBottom: 20 }}>
          Ranked candidates <span style={{ color: L.border }}>/</span>{" "}
          <span style={{ color: L.text }}>Léa Fabre</span>
        </div>
        <Panel>
          <div style={{ display: "flex", alignItems: "stretch", borderBottom: `1px solid ${L.border}` }}>
            <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 26, padding: "28px 30px" }}>
              <Avatar initials="LF" color={L.purple} size={76} />
              <div>
                <div style={{ fontSize: 28, fontWeight: 700 }}>Léa Fabre</div>
                <div style={{ fontFamily: L.mono, fontSize: 16, color: L.dim, marginTop: 3 }}>
                  Staff SWE · lea-fabre/rt-order-matching
                </div>
              </div>
            </div>
            <div
              style={{
                width: 220,
                borderLeft: `1px solid ${L.border}`,
                background: L.greenSoft,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ fontFamily: L.mono, fontSize: 51, fontWeight: 700, color: L.green, lineHeight: 1.1 }}>
                {score}
              </div>
              <div style={{ fontFamily: L.mono, fontSize: 15, color: L.dim }}>match score</div>
            </div>
          </div>
          <div
            style={{
              padding: "14px 30px",
              background: L.bgSoft,
              borderBottom: `1px solid ${L.border}`,
              fontFamily: L.mono,
              fontSize: 17,
              fontWeight: 700,
            }}
          >
            Why she&rsquo;s a fit
          </div>
          {WHY.map((w, i) => {
            const delay = 30 + i * 16;
            const p = spring({ frame: frame - delay, fps, config: { damping: 16 } });
            return (
              <div
                key={w.badge}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 22,
                  padding: "19px 30px",
                  borderTop: i === 0 ? "none" : `1px solid ${L.border}`,
                  opacity: p,
                  transform: `translateY(${interpolate(p, [0, 1], [20, 0])}px)`,
                }}
              >
                <div style={{ fontFamily: L.mono, fontSize: 20, fontWeight: 700, color: w.color }}>✓</div>
                <div style={{ flex: 1, fontSize: 19 }}>{w.text}</div>
                <Tag color={w.color}>{w.badge}</Tag>
              </div>
            );
          })}
        </Panel>
      </DashFrame>
      <StepTag num="3" label="Why she’s a fit — the proof behind the score" />
    </AbsoluteFill>
  );
};

/* ============ Scene 4 — Personalize : the email cites their code ============ */
const EMAIL_TEXT = `Hi Léa,

Just went through rt-order-matching. The way you
handle partial fills under contention is really
clean, and the replay log in journal.rs? Smart.

We're building the matching engine behind a new
exchange, and we hit the exact backpressure issue
your README calls out.

Worth a chat? I'm free Thursday.`;

export const SceneMessage: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      <DashFrame active="outreach">
        <PageTitle title="Outreach · Léa Fabre" right={<Tag>match score: 94</Tag>} />
        <Panel>
          <div
            style={{
              fontFamily: L.mono,
              fontSize: 16,
              color: L.dim,
              padding: "14px 30px",
              background: L.bgSoft,
              borderBottom: `1px solid ${L.border}`,
              lineHeight: 1.7,
            }}
          >
            <div>
              To: <span style={{ color: L.text }}>lea.fabre@…</span>
            </div>
            <div>
              Subject:{" "}
              <span style={{ color: L.text }}>
                <TypeText
                  text="your matching engine in rt-order-matching"
                  startFrame={20}
                  charsPerFrame={1.4}
                  cursor={false}
                />
              </span>
            </div>
          </div>
          <div
            style={{
              fontSize: 21,
              lineHeight: 1.6,
              whiteSpace: "pre-wrap",
              minHeight: 390,
              padding: "24px 30px",
            }}
          >
            <TypeText text={EMAIL_TEXT} startFrame={45} charsPerFrame={2.4} />
          </div>
          <div
            style={{
              display: "flex",
              gap: 14,
              padding: "16px 30px",
              borderTop: `1px solid ${L.border}`,
              opacity: frame >= 200 ? 1 : 0,
            }}
          >
            {["real repo cited", "her code read", "zero templates"].map((t) => (
              <Tag key={t}>✓ {t}</Tag>
            ))}
          </div>
        </Panel>
      </DashFrame>
      <StepTag num="4" label="The email reads her code — nothing like a recruiter blast" />
    </AbsoluteFill>
  );
};

/* ============ Scene 5 — Inbox : replies come back ============ */
const REPLIES = [
  {
    initials: "LF",
    name: "Léa Fabre",
    text: "You're the first person to actually read journal.rs. I'm free Thursday.",
    when: "2m ago",
    color: L.purple,
  },
  {
    initials: "SB",
    name: "Sami Benali",
    text: "Not looking, but this one's different. What's the team like?",
    when: "1h ago",
    color: L.blue,
  },
];

export const SceneResults: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const stats = [
    { n: 27, label: "devs matched & ranked" },
    { n: 27, label: "personalized emails" },
    { n: 9, label: "replies" },
  ];
  return (
    <AbsoluteFill>
      <DashFrame active="inbox">
        <PageTitle title="Inbox" />
        {/* stats share hairlines, like the landing's numbers strip */}
        <Pop delay={14}>
        <Panel style={{ display: "flex", marginBottom: 36 }}>
          {stats.map((s, i) => {
            const delay = 20 + i * 12;
            const p = spring({ frame: frame - delay, fps, config: { damping: 15 } });
            return (
              <div
                key={s.label}
                style={{
                  flex: 1,
                  padding: "26px 24px",
                  textAlign: "center",
                  borderLeft: i === 0 ? "none" : `1px solid ${L.border}`,
                  opacity: p,
                  transform: `translateY(${interpolate(p, [0, 1], [20, 0])}px)`,
                }}
              >
                <div style={{ fontFamily: L.mono, fontSize: 43, fontWeight: 700, color: L.green }}>
                  {Math.round(p * s.n)}
                </div>
                <div style={{ fontSize: 16, color: L.dim, marginTop: 4 }}>{s.label}</div>
              </div>
            );
          })}
        </Panel>
        </Pop>
        <Pop delay={62}>
        <Panel head={<Status>2 new replies</Status>}>
          {REPLIES.map((r, i) => {
            const delay = 70 + i * 20;
            const p = spring({ frame: frame - delay, fps, config: { damping: 16 } });
            return (
              <div
                key={r.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  padding: "20px 26px",
                  borderTop: i === 0 ? "none" : `1px solid ${L.border}`,
                  boxShadow: `inset 3px 0 0 ${L.green}`,
                  opacity: p,
                  transform: `translateY(${interpolate(p, [0, 1], [20, 0])}px)`,
                }}
              >
                <Avatar initials={r.initials} color={r.color} size={52} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 19, fontWeight: 700 }}>{r.name}</div>
                  <div style={{ fontSize: 17, color: L.dim, marginTop: 2 }}>“{r.text}”</div>
                </div>
                <div style={{ fontFamily: L.mono, fontSize: 15, color: L.dim }}>{r.when}</div>
              </div>
            );
          })}
        </Panel>
        </Pop>
      </DashFrame>
      <StepTag num="5" label="You just book the calls" />
    </AbsoluteFill>
  );
};

/* ============ Scene 6 — Outro ============ */
export const SceneOutro: React.FC = () => {
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <Pop delay={5}>
        <div
          style={{
            fontFamily: L.mono,
            fontSize: 46,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          <LogoMark size={56} /> azerit
        </div>
      </Pop>
      <Pop delay={25}>
        <div
          style={{
            fontFamily: L.mono,
            fontSize: 40,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            marginTop: 40,
            textAlign: "center",
            maxWidth: 1300,
            lineHeight: 1.3,
          }}
        >
          Find them. Rank them. Hire them.
          <br />
          <span style={{ color: L.green }}>The proof is already on GitHub.</span>
        </div>
      </Pop>
      <Pop delay={55}>
        <Button style={{ marginTop: 48, fontSize: 21, padding: "17px 44px" }}>Try it</Button>
      </Pop>
    </AbsoluteFill>
  );
};
