import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { L } from "./theme";
import { Pop, TypeText, StepTag, typedCount } from "./common";
import { LogoMark } from "../src/components/Logo";
import {
  AppWindow,
  BackLink,
  PanelTitle,
  JobHead,
  JobProgress,
  OutreachStats,
  CandTable,
  Candidate,
  Drawer,
  DrawerHead,
  FeedbackBar,
  Tabs,
  DetailLabel,
  FitRow,
  MsgBtn,
  Icon,
  RepliedBadge,
  Cursor,
  glide,
  fadeIn,
} from "./app";

/* The demo walks through the real app (app.azerit.tech): open a position
   from a job offer, watch the candidates land, open the top one, read why
   she fits, copy the email written from her code, see the replies. */

const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
const hair = `1px solid ${L.border}`;

const JOB = { title: "Senior Backend Engineer", company: "Kestrel Markets" };

const ROWS: Candidate[] = [
  { initials: "LF", color: L.purple, name: "Léa Fabre", role: "Staff Software Engineer", company: "Orbital Pay", location: "Paris, France", inArea: true, exp: "9 yrs" },
  { initials: "SB", color: L.blue, name: "Sami Benali", role: "Backend Engineer, Payments", company: "Lumen Cloud", location: "Paris, France", inArea: true, exp: "7 yrs" },
  { initials: "NT", color: L.orange, name: "Nina Torres", role: "Infrastructure Engineer", company: "Quantis", location: "Lyon, France", exp: "6 yrs" },
  { initials: "MO", color: L.green, name: "Marc Olivier", role: "Systems Engineer", company: "Halden", location: "Paris, France", inArea: true, exp: "11 yrs" },
  { initials: "AS", color: L.red, name: "Ana Sousa", role: "Senior Backend Engineer", company: "Brisa Labs", location: "Lisbon", exp: "8 yrs" },
  { initials: "TR", color: L.lime, name: "Tomás Reyes", role: "Software Engineer, Trading Systems", company: "Marelle", location: "Amsterdam", exp: "5 yrs" },
  { initials: "YT", color: L.blue, name: "Yuki Tanaka", role: "Platform Engineer", company: "Ponto", location: "Paris, France", inArea: true, exp: "6 yrs" },
];

const LEA = { initials: "LF", color: L.purple };
const LEA_META = ["Orbital Pay · 9 years of experience · Paris, France", "Tech 94/100 · Track record 9/10"];
const LEA_EMAIL = "lea.fabre@orbitalpay.io";

/* The job page everything else sits on */
const JobPage: React.FC<{ state: "open" | "running"; selected?: number; children?: React.ReactNode }> = ({
  state,
  selected,
  children,
}) => (
  <>
    <JobHead title={JOB.title} company={JOB.company} state={state}>
      {children}
    </JobHead>
    <CandTable rows={ROWS} selected={selected} />
  </>
);

/* ============ Scene 1 — New position : paste the job offer, run ============ */
const OFFER = `Senior Backend Engineer — real-time systems
Kestrel Markets · Paris or remote

We're building the matching engine behind a new exchange. You'll own the hot path: Rust or Go, lock-free data structures, backpressure under load. 5+ years shipping production systems.`;

export const SceneNewPosition: React.FC = () => {
  const frame = useCurrentFrame();
  const typed = typedCount(frame, OFFER, 10, 3);
  const focused = frame >= 6 && typed < OFFER.length + 12;
  const cur = glide(frame, [112, 980, 600], [146, 646, 492]);
  const pressed = frame >= 152 && frame <= 160;
  const launched = frame >= 156;
  return (
    <AbsoluteFill>
      <AppWindow
        nav="search"
        searching={launched}
        overlay={<Cursor x={cur.x} y={cur.y} down={pressed} opacity={fadeIn(frame, 108)} />}
      >
        <BackLink />
        <div style={{ fontSize: 42, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.08, margin: "0 0 32px" }}>
          New position
        </div>
        <div style={{ margin: "0 0 32px", padding: "0 0 28px", borderBottom: `1px dashed ${L.border}` }}>
          <div style={{ marginBottom: 18 }}>
            <PanelTitle>Job offer</PanelTitle>
          </div>
          <div
            style={{
              minHeight: 190,
              padding: "14px 16px",
              borderRadius: 10,
              border: `1px solid ${focused ? L.green : L.border}`,
              boxShadow: focused ? `0 0 0 3px ${L.greenSoft}` : "none",
              background: L.bg,
              fontSize: 14.5,
              lineHeight: 1.55,
              whiteSpace: "pre-wrap",
            }}
          >
            {frame < 10 ? (
              <span style={{ color: L.dim }}>Paste the full job offer here…</span>
            ) : (
              <TypeText text={OFFER} startFrame={10} charsPerFrame={3} />
            )}
          </div>
        </div>
        {/* .launch-row : taille de recherche + Run + Manually review */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: 16 }}>
          <div>
            <span
              style={{
                display: "block",
                fontFamily: L.mono,
                fontSize: 11,
                letterSpacing: "0.03em",
                textTransform: "uppercase",
                color: L.dim,
                marginBottom: 4,
                lineHeight: 1.6,
              }}
            >
              Search size
            </span>
            <div style={{ display: "inline-flex", height: 48, border: hair, borderRadius: 8, overflow: "hidden", background: L.bgSoft }}>
              {["Small", "Medium", "Large"].map((s, i) => {
                const on = s === "Medium";
                return (
                  <div
                    key={s}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "0 18px",
                      fontSize: 13,
                      fontWeight: 600,
                      color: on ? "#ffffff" : L.dim,
                      background: on ? L.green : "transparent",
                      borderRight: i < 2 ? hair : "none",
                    }}
                  >
                    {s}
                  </div>
                );
              })}
            </div>
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: 48,
              padding: "0 28px",
              fontFamily: L.mono,
              fontSize: 15,
              fontWeight: 700,
              color: "#ffffff",
              background: pressed ? L.greenDim : L.green,
              border: "1px solid #000000",
              borderRadius: 8,
              boxShadow: "0 1px 3px rgba(31, 35, 40, 0.12)",
              transform: pressed ? "scale(0.96)" : "none",
            }}
          >
            Run
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: 48,
              padding: "0 20px",
              fontFamily: L.mono,
              fontSize: 14,
              fontWeight: 700,
              color: L.text,
              border: hair,
              borderRadius: 8,
            }}
          >
            Manually review
          </div>
        </div>
      </AppWindow>
      <StepTag num="1" label="Send us the job offer. That's the whole brief." />
    </AbsoluteFill>
  );
};

/* ============ Scene 2 — Candidates land on the position, ranked ============ */
export const SceneCandidates: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const done = Math.round(interpolate(frame, [10, 150], [3, 40], clamp));
  const cur = glide(frame, [150, 1000, 600], [186, 640, 257]);
  const pressed = frame >= 194 && frame <= 202;
  return (
    <AbsoluteFill>
      <AppWindow
        nav="jobs"
        searching
        jobCount={5}
        overlay={<Cursor x={cur.x} y={cur.y} down={pressed} opacity={fadeIn(frame, 146)} />}
      >
        <JobHead title={JOB.title} company={JOB.company} state="running">
          <JobProgress text={`reading code ${done}/40`} />
        </JobHead>
        <CandTable
          rows={ROWS}
          selected={frame >= 198 ? 0 : -1}
          rowStyle={(i) => {
            const p = spring({ frame: frame - (18 + i * 13), fps, config: { damping: 16 } });
            return { opacity: p, transform: `translateY(${interpolate(p, [0, 1], [10, 0])}px)` };
          }}
        />
      </AppWindow>
      <StepTag num="2" label="Candidates found and ranked on the code they shipped" />
    </AbsoluteFill>
  );
};

/* ============ Scene 3 — Why she fits : proof from her repos ============ */
const BRIEF =
  "Built rt-order-matching, a real-time matching engine in Rust with a lock-free hot path (2024–2026), and journal.rs, the replay log it ships with. 3,669 contributions this year, 212 pull requests reviewed. Staff engineer at Orbital Pay since 2023.";

const SKILLS: { mark: "ok" | "partiel"; label: string; link?: string; proof?: string }[] = [
  {
    mark: "ok",
    label: "Real-time systems in Rust or Go",
    link: "lea-fabre/rt-order-matching",
    proof:
      "Lock-free MPSC queue on the hot path (hot_path.rs, 2025); partial fills under contention handled in matcher.rs; benchmarks against crossbeam in the README (Jan 2026).",
  },
  { mark: "ok", label: "Lock-free data structures", link: "lea-fabre/lockfree-ring" },
  {
    mark: "partiel",
    label: "Backpressure under load",
    link: "PR #612 · ws-gateway",
    proof: "Bounded channels in the gateway (2025); not applied in the matcher itself yet.",
  },
];

const DrawerTop: React.FC<{ tab: string }> = ({ tab }) => (
  <>
    <DrawerHead face={LEA} name="Léa Fabre" meta={LEA_META} email={LEA_EMAIL} />
    <FeedbackBar />
    <Tabs active={tab} />
  </>
);

export const SceneWhy: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const slide = spring({ frame, fps, config: { damping: 18, mass: 0.8 } });
  const open = spring({ frame: frame - 120, fps, config: { damping: 16 } });
  const toRow = glide(frame, [88, 1000, 560], [112, 900, 410]);
  const toTab = glide(frame, [168, 900, 410], [198, 930, 206]);
  const cur = frame < 168 ? toRow : toTab;
  const pressed = (frame >= 116 && frame <= 124) || (frame >= 204 && frame <= 212);
  return (
    <AbsoluteFill>
      <AppWindow
        nav="jobs"
        jobCount={5}
        overlay={
          <>
            <Drawer offset={interpolate(slide, [0, 1], [680, 0])} backdrop={slide}>
              <DrawerTop tab="Why" />
              <Pop delay={26} distance={10}>
                <div style={{ padding: "18px 0 6px" }}>
                  <DetailLabel>In brief</DetailLabel>
                  <div style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6 }}>{BRIEF}</div>
                </div>
              </Pop>
              <div style={{ padding: "18px 0 6px" }}>
                <Pop delay={44} distance={10}>
                  <DetailLabel>Skills from the job offer</DetailLabel>
                </Pop>
                <div style={{ borderTop: hair }}>
                  {SKILLS.map((s, i) => {
                    const p = spring({ frame: frame - (52 + i * 12), fps, config: { damping: 16 } });
                    return (
                      <FitRow
                        key={s.label}
                        {...s}
                        open={i === 0 ? open : 0}
                        style={{ opacity: p, transform: `translateY(${interpolate(p, [0, 1], [8, 0])}px)` }}
                      />
                    );
                  })}
                </div>
              </div>
            </Drawer>
            <Cursor x={cur.x} y={cur.y} down={pressed} opacity={fadeIn(frame, 84)} />
          </>
        }
      >
        <JobPage state="open" selected={0} />
      </AppWindow>
      <StepTag num="3" label="Why she's a fit — proof from her repos, not her résumé" />
    </AbsoluteFill>
  );
};

/* ============ Scene 4 — The email, written from her code ============ */
const SUBJECT = "your matching engine in rt-order-matching";
const EMAIL = `Hi Léa,

Just went through rt-order-matching. The way you handle partial fills under contention is really clean, and the replay log in journal.rs? Smart.

We're building the matching engine behind a new exchange, and we hit the exact backpressure issue your README calls out. Worth a chat? I'm free Thursday.`;

export const SceneMessage: React.FC = () => {
  const frame = useCurrentFrame();
  const count = typedCount(frame, EMAIL, 40, 2.6);
  const cur = glide(frame, [205, 1000, 640], [240, 1206, 565]);
  const pressed = frame >= 246 && frame <= 254;
  const copied = frame >= 250;
  return (
    <AbsoluteFill>
      <AppWindow
        nav="jobs"
        jobCount={5}
        overlay={
          <>
            <Drawer>
              <DrawerTop tab="Message" />
              <div style={{ padding: "18px 0 8px" }}>
                <div
                  style={{
                    border: hair,
                    borderRadius: 12,
                    background: L.bg,
                    boxShadow: "0 1px 3px rgba(31, 35, 40, 0.06)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                      padding: "10px 16px",
                      borderBottom: hair,
                      fontSize: 12.5,
                      color: L.dim,
                      lineHeight: 1.6,
                    }}
                  >
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontWeight: 600, color: L.text }}>
                      <Icon name="mail" size={14} color={L.linkedin} />
                      Email
                    </span>
                    <span>to Léa Fabre</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 10,
                      padding: "10px 16px",
                      borderBottom: hair,
                      fontSize: 14,
                      fontWeight: 600,
                      lineHeight: 1.6,
                      minHeight: 43,
                    }}
                  >
                    <span style={{ flexShrink: 0, fontSize: 12, fontWeight: 400, color: L.dim }}>Subject</span>
                    <TypeText text={SUBJECT} startFrame={14} charsPerFrame={1.6} cursor={false} />
                  </div>
                  <div
                    style={{
                      margin: 0,
                      padding: "16px 16px 18px",
                      fontSize: 15,
                      lineHeight: 1.65,
                      whiteSpace: "pre-wrap",
                      minHeight: 209,
                    }}
                  >
                    <TypeText text={EMAIL} startFrame={40} charsPerFrame={2.6} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 10,
                      padding: "10px 12px 10px 16px",
                      borderTop: hair,
                      background: L.bgSoft,
                    }}
                  >
                    <span style={{ fontFamily: L.mono, fontSize: 11.5, color: L.dim }}>{count} characters</span>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <MsgBtn>Open in email</MsgBtn>
                      <MsgBtn>Send on LinkedIn</MsgBtn>
                      <MsgBtn primary done={copied}>
                        {copied ? "✓ Copied" : "Copy"}
                      </MsgBtn>
                    </div>
                  </div>
                </div>
              </div>
            </Drawer>
            <Cursor x={cur.x} y={cur.y} down={pressed} opacity={fadeIn(frame, 200)} />
          </>
        }
      >
        <JobPage state="open" selected={0} />
      </AppWindow>
      <StepTag num="4" label="We write to her about her code, not from a template" />
    </AbsoluteFill>
  );
};

/* ============ Scene 5 — Replies come back ============ */
const REPLIED = [0, 1, 4];

export const SceneReplies: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const n = (to: number) => Math.round(interpolate(frame, [12, 70], [0, to], clamp));
  return (
    <AbsoluteFill>
      <AppWindow nav="jobs" jobCount={5}>
        <JobHead title={JOB.title} company={JOB.company} state="open">
          <OutreachStats contacted={n(27)} invited={27} accepted={n(21)} replied={n(9)} />
        </JobHead>
        <CandTable
          rows={ROWS}
          decorate={(i) => {
            const k = REPLIED.indexOf(i);
            if (k < 0) return null;
            const p = spring({ frame: frame - (66 + k * 22), fps, config: { damping: 12 } });
            return <RepliedBadge style={{ opacity: p, transform: `scale(${interpolate(p, [0, 1], [0.6, 1])})` }} />;
          }}
        />
      </AppWindow>
      <StepTag num="5" label="9 replies in 3 days. You meet the one who fits." />
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
        {/* même bouton que « + New position » dans l'app, à l'échelle du canvas */}
        <div
          style={{
            marginTop: 48,
            display: "inline-block",
            fontFamily: L.mono,
            fontSize: 20,
            fontWeight: 700,
            color: "#ffffff",
            background: L.green,
            border: `1px solid ${L.green}`,
            borderRadius: 12,
            padding: "15px 30px",
          }}
        >
          Try it
        </div>
      </Pop>
    </AbsoluteFill>
  );
};
