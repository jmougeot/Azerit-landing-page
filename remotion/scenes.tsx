import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  spring,
} from "remotion";
import { T } from "./theme";
import { Pop, TypeText, StepTag } from "./common";
import { LogoMark } from "../src/components/Logo";

/* ============ Dashboard shell : full-screen app (sidebar + content) ============ */
/* The landing page wraps the Player in an "app.azerit.com" browser frame,
   so the video itself IS the app — no window chrome inside. */
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
  <AbsoluteFill style={{ flexDirection: "row", background: "#010409" }}>
    <div
      style={{
        width: 320,
        flexShrink: 0,
        borderRight: `1px solid ${T.border}`,
        padding: "44px 24px",
        background: T.bgSoft,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          fontFamily: T.mono,
          fontSize: 23,
          fontWeight: 700,
          padding: "0 14px",
          marginBottom: 40,
        }}
      >
        <LogoMark size={34} /> azerit
      </div>
      {NAV.map((n) => (
        <div
          key={n.id}
          style={{
            fontFamily: T.mono,
            fontSize: 18,
            padding: "15px 18px",
            borderRadius: 16,
            marginBottom: 8,
            color: n.id === active ? T.green : T.dim,
            background: n.id === active ? T.greenSoft : "transparent",
            border: n.id === active ? "1px solid rgba(82,208,189,0.5)" : "1px solid transparent",
            fontWeight: n.id === active ? 700 : 400,
          }}
        >
          {n.label}
        </div>
      ))}
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
    <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.01em" }}>{title}</div>
    {right}
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
      filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.6))",
    }}
  >
    <svg width="42" height="42" viewBox="0 0 24 24">
      <path
        d="M4 1 L4 20 L8.5 15.7 L11.5 22 L14.4 20.6 L11.5 14.5 L18 14.5 Z"
        fill="#ffffff"
        stroke="#000000"
        strokeWidth="1.4"
      />
    </svg>
  </div>
);

/* ============ Scene 1 — Describe : the client types the role they're hiring for ============ */
const ROLE_TEXT = "Senior backend engineer, real-time systems (Rust or Go).";

export const SceneDescribe: React.FC = () => {
  const frame = useCurrentFrame();
  const cx = interpolate(frame, [72, 100], [1350, 620], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const cy = interpolate(frame, [72, 100], [835, 595], {
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
  return (
    <AbsoluteFill>
      <DashFrame active="describe">
        <PageTitle title="Your role" />
        <div style={{ fontSize: 21, color: T.dim, marginBottom: 16 }}>Who are you hiring?</div>
        <div
          style={{
            background: T.bgSoft,
            border: `1px solid ${frame < 80 ? T.green : T.border}`,
            borderRadius: 18,
            padding: "26px 30px",
            fontSize: 23,
            minHeight: 96,
            marginBottom: 30,
          }}
        >
          <TypeText text={ROLE_TEXT} startFrame={20} charsPerFrame={1.2} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div
            style={{
              display: "inline-block",
              fontFamily: T.mono,
              fontSize: 20,
              fontWeight: 700,
              /* même recette que le .btn-try de la landing */
              color: "#ffffff",
              background: "linear-gradient(180deg, #128379, #115e59)",
              border: "1px solid #000000",
              borderRadius: 12,
              padding: "16px 36px",
              /* visible dès la frame 0 : elle sert de poster au player */
              transform: `scale(${pressed ? 0.94 : 1})`,
            }}
          >
            Find my candidates →
          </div>
          <div
            style={{
              fontFamily: T.mono,
              fontSize: 18,
              color: frame >= 168 ? T.green : T.dim,
              opacity: frame >= 118 ? 1 : 0,
            }}
          >
            {frame < 168
              ? `⟳ scanning GitHub… ${scanCount.toLocaleString("en-US")} profiles`
              : "✓ 27 devs matched · ranked on shipped work"}
          </div>
        </div>
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
    grad: [T.purple, T.blue],
  },
  {
    initials: "SB",
    name: "Sami Benali",
    role: "Backend eng · distributed-kv",
    signal: "Raft from scratch · Go",
    score: 87,
    grad: [T.blue, T.green],
  },
  {
    initials: "NT",
    name: "Nina Torres",
    role: "Infra eng · ws-gateway",
    signal: "50k conns per node",
    score: 81,
    grad: [T.orange, T.red],
  },
  {
    initials: "MO",
    name: "Marc Olivier",
    role: "Systems eng · lockfree-queue",
    signal: "MPMC queue + benchmarks",
    score: 74,
    grad: [T.green, T.blue],
  },
];

export const SceneRank: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const cx = interpolate(frame, [115, 150], [1400, 700], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const cy = interpolate(frame, [115, 150], [855, 285], {
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
        <PageTitle
          title="Ranked candidates"
          right={
            <div
              style={{
                fontFamily: T.mono,
                fontSize: 16,
                color: T.green,
                background: T.greenSoft,
                border: "1px solid rgba(82,208,189,0.5)",
                borderRadius: 99,
                padding: "7px 20px",
              }}
            >
              sorted by match ▾
            </div>
          }
        />
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
                padding: "18px 24px",
                borderRadius: 16,
                marginTop: 12,
                opacity: p,
                transform: `translateY(${interpolate(p, [0, 1], [24, 0])}px) scale(${lit ? 1.015 : 1})`,
                background: lit ? "rgba(82,208,189,0.22)" : top ? T.greenSoft : T.bgSoft,
                border: `1px solid ${lit ? T.green : top ? "rgba(82,208,189,0.6)" : T.border}`,
              }}
            >
              <div style={{ fontFamily: T.mono, fontSize: 18, color: T.dim, width: 34 }}>
                #{i + 1}
              </div>
              <div
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: 99,
                  flexShrink: 0,
                  background: `linear-gradient(135deg, ${l.grad[0]}, ${l.grad[1]})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 19,
                  fontWeight: 800,
                }}
              >
                {l.initials}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 21, fontWeight: 700 }}>{l.name}</div>
                <div style={{ fontFamily: T.mono, fontSize: 15, color: T.dim, marginTop: 2 }}>
                  {l.role}
                </div>
              </div>
              <div
                style={{
                  fontFamily: T.mono,
                  fontSize: 15,
                  color: T.blue,
                  background: "rgba(108,182,255,0.1)",
                  border: "1px solid rgba(108,182,255,0.35)",
                  borderRadius: 99,
                  padding: "5px 16px",
                  whiteSpace: "nowrap",
                }}
              >
                {l.signal}
              </div>
              <div style={{ width: 130, textAlign: "right" }}>
                <div style={{ fontFamily: T.mono, fontSize: 33, fontWeight: 800, color: T.green }}>
                  {Math.round(p * l.score)}
                </div>
                <div
                  style={{
                    height: 8,
                    borderRadius: 99,
                    background: T.bg,
                    overflow: "hidden",
                    marginTop: 4,
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${p * l.score}%`,
                      borderRadius: 99,
                      background: T.green,
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
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
    color: T.green,
    soft: "rgba(82,208,189,0.14)",
    text: "rt-order-matching: a real-time matching engine, lock-free hot path",
  },
  {
    badge: "ships daily",
    color: T.blue,
    soft: "rgba(108,182,255,0.12)",
    text: "3,669 contributions and 212 pull requests reviewed this year",
  },
  {
    badge: "stack match",
    color: T.purple,
    soft: "rgba(188,140,255,0.12)",
    text: "Rust 52% · Go 26% · TypeScript 14% — exactly your stack",
  },
  {
    badge: "reachable",
    color: T.orange,
    soft: "rgba(210,153,34,0.12)",
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
        <div style={{ fontFamily: T.mono, fontSize: 16, color: T.dim, marginBottom: 20 }}>
          ← Ranked candidates
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 26,
            paddingBottom: 28,
            borderBottom: `1px solid ${T.border}`,
            marginBottom: 30,
          }}
        >
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 99,
              flexShrink: 0,
              background: `linear-gradient(135deg, ${T.purple}, ${T.blue})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 25,
              fontWeight: 800,
            }}
          >
            LF
          </div>
          <div>
            <div style={{ fontSize: 28, fontWeight: 800 }}>Léa Fabre</div>
            <div style={{ fontFamily: T.mono, fontSize: 16, color: T.dim, marginTop: 3 }}>
              Staff SWE · lea-fabre/rt-order-matching
            </div>
          </div>
          <div style={{ marginLeft: "auto", textAlign: "center" }}>
            <div style={{ fontFamily: T.mono, fontSize: 51, fontWeight: 800, color: T.green }}>
              {score}
            </div>
            <div style={{ fontFamily: T.mono, fontSize: 15, color: T.dim }}>match score</div>
          </div>
        </div>
        <div style={{ fontSize: 21, fontWeight: 700, marginBottom: 18 }}>
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
                padding: "18px 24px",
                borderRadius: 16,
                marginTop: 12,
                background: T.bgSoft,
                border: `1px solid ${T.border}`,
                opacity: p,
                transform: `translateY(${interpolate(p, [0, 1], [20, 0])}px)`,
              }}
            >
              <div style={{ fontFamily: T.mono, fontSize: 20, color: w.color }}>✓</div>
              <div style={{ flex: 1, fontSize: 19 }}>{w.text}</div>
              <div
                style={{
                  fontFamily: T.mono,
                  fontSize: 15,
                  fontWeight: 700,
                  color: w.color,
                  background: w.soft,
                  border: `1px solid ${w.color}`,
                  borderRadius: 99,
                  padding: "5px 18px",
                  whiteSpace: "nowrap",
                }}
              >
                {w.badge}
              </div>
            </div>
          );
        })}
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
          <PageTitle
            title="Outreach · Léa Fabre"
            right={
              <div
                style={{
                  fontFamily: T.mono,
                  fontSize: 16,
                  color: T.green,
                  background: T.greenSoft,
                  border: "1px solid rgba(82,208,189,0.5)",
                  borderRadius: 99,
                  padding: "7px 20px",
                }}
              >
                match score: 94
              </div>
            }
          />
          <div
            style={{
              fontFamily: T.mono,
              fontSize: 16,
              color: T.dim,
              paddingBottom: 18,
              borderBottom: `1px solid ${T.border}`,
              marginBottom: 22,
              lineHeight: 1.7,
            }}
          >
            <div>
              To: <span style={{ color: T.text }}>lea.fabre@…</span>
            </div>
            <div>
              Subject:{" "}
              <span style={{ color: T.text }}>
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
              minHeight: 400,
            }}
          >
            <TypeText text={EMAIL_TEXT} startFrame={45} charsPerFrame={2.4} />
          </div>
          <div
            style={{
              display: "flex",
              gap: 14,
              marginTop: 14,
              opacity: frame >= 200 ? 1 : 0,
            }}
          >
            {["real repo cited", "her code read", "zero templates"].map((t) => (
              <div
                key={t}
                style={{
                  fontFamily: T.mono,
                  fontSize: 15,
                  color: T.green,
                  background: T.greenSoft,
                  border: `1px solid rgba(82,208,189,0.5)`,
                  borderRadius: 99,
                  padding: "6px 18px",
                }}
              >
              ✓ {t}
              </div>
            ))}
          </div>
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
    grad: [T.purple, T.blue],
  },
  {
    initials: "SB",
    name: "Sami Benali",
    text: "Not looking, but this one's different. What's the team like?",
    when: "1h ago",
    grad: [T.blue, T.green],
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
          <div style={{ display: "flex", gap: 20, marginBottom: 28 }}>
            {stats.map((s, i) => {
              const delay = 20 + i * 12;
              const p = spring({ frame: frame - delay, fps, config: { damping: 15 } });
              return (
                <div
                  key={s.label}
                  style={{
                    flex: 1,
                    background: T.bgSoft,
                    border: `1px solid ${T.border}`,
                    borderRadius: 16,
                    padding: "26px 24px",
                    textAlign: "center",
                    opacity: p,
                    transform: `translateY(${interpolate(p, [0, 1], [20, 0])}px)`,
                  }}
                >
                  <div style={{ fontFamily: T.mono, fontSize: 43, fontWeight: 800, color: T.green }}>
                    {Math.round(p * s.n)}
                  </div>
                  <div style={{ fontSize: 16, color: T.dim, marginTop: 4 }}>{s.label}</div>
                </div>
              );
            })}
          </div>
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
                  padding: "18px 24px",
                  borderRadius: 16,
                  marginTop: 12,
                  background: T.greenSoft,
                  border: "1px solid rgba(82,208,189,0.4)",
                  opacity: p,
                  transform: `translateY(${interpolate(p, [0, 1], [20, 0])}px)`,
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 99,
                    flexShrink: 0,
                    background: `linear-gradient(135deg, ${r.grad[0]}, ${r.grad[1]})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 17,
                    fontWeight: 800,
                  }}
                >
                  {r.initials}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 19, fontWeight: 700 }}>{r.name}</div>
                  <div style={{ fontSize: 16, color: T.dim, marginTop: 2 }}>“{r.text}”</div>
                </div>
                <div style={{ fontFamily: T.mono, fontSize: 15, color: T.dim }}>{r.when}</div>
              </div>
            );
          })}
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
            fontFamily: T.mono,
            fontSize: 46,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          <LogoMark size={64} /> azerit
        </div>
      </Pop>
      <Pop delay={25}>
        <div
          style={{
            fontSize: 36,
            fontWeight: 700,
            marginTop: 36,
            textAlign: "center",
            maxWidth: 1300,
            lineHeight: 1.35,
          }}
        >
          Find them. Rank them. Hire them.
          <br />
          <span style={{ color: T.green }}>The proof is already on GitHub.</span>
        </div>
      </Pop>
      <Pop delay={55}>
        <div
          style={{
            marginTop: 48,
            fontFamily: T.mono,
            fontSize: 21,
            /* même recette que le .btn-try de la landing */
            color: "#ffffff",
            background: "linear-gradient(180deg, #128379, #115e59)",
            border: "1px solid #000000",
            padding: "16px 44px",
            borderRadius: 12,
            fontWeight: 700,
          }}
        >
          Try it →
        </div>
      </Pop>
    </AbsoluteFill>
  );
};
