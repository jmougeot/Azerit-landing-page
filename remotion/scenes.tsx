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

/* ============ Scene 1 — Le hook ============ */
export const SceneHook: React.FC = () => {
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", padding: 100 }}>
      <Pop delay={5}>
        <div
          style={{
            fontFamily: T.mono,
            fontSize: 30,
            color: T.green,
            marginBottom: 36,
            textAlign: "center",
          }}
        >
          $ vous vendez aux développeurs ?
        </div>
      </Pop>
      <Pop delay={25}>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: 1400,
            letterSpacing: "-0.02em",
          }}
        >
          Les emails à froid, ils les <span style={{ color: T.red }}>ignorent</span>.
        </div>
      </Pop>
      <Pop delay={60}>
        <div
          style={{
            fontSize: 40,
            color: T.dim,
            marginTop: 40,
            textAlign: "center",
            maxWidth: 1200,
          }}
        >
          Mais leur code dit déjà <span style={{ color: T.green, fontWeight: 700 }}>ce dont ils ont besoin</span>.
        </div>
      </Pop>
    </AbsoluteFill>
  );
};

/* ============ Fenêtre style app ============ */
const Window: React.FC<{ title: string; children: React.ReactNode; width?: number }> = ({
  title,
  children,
  width = 1300,
}) => (
  <div
    style={{
      width,
      background: "#010409",
      border: `1px solid ${T.border}`,
      borderRadius: 18,
      overflow: "hidden",
      boxShadow: "0 40px 120px rgba(0,0,0,0.6)",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "16px 24px",
        background: T.bgSoft,
        borderBottom: `1px solid ${T.border}`,
      }}
    >
      <div style={{ width: 16, height: 16, borderRadius: 99, background: "#ff5f57" }} />
      <div style={{ width: 16, height: 16, borderRadius: 99, background: "#febc2e" }} />
      <div style={{ width: 16, height: 16, borderRadius: 99, background: "#28c840" }} />
      <div style={{ marginLeft: 16, fontFamily: T.mono, fontSize: 20, color: T.dim }}>{title}</div>
    </div>
    {children}
  </div>
);

/* ============ Scene 2 — Scan GitHub ============ */
const REPOS = [
  { name: "lea-dubois/pg-vector-search", desc: "Semantic search over Postgres + pgvector", lang: "TypeScript", match: true, commits: "hier" },
  { name: "mk-labs/embeddings-pipeline", desc: "Batch embeddings pipeline for RAG apps", lang: "Python", match: true, commits: "il y a 3 h" },
  { name: "jdoe/dotfiles", desc: "My personal dotfiles", lang: "Shell", match: false, commits: "2023" },
  { name: "sami-dev/rag-chatbot-prod", desc: "Production RAG chatbot with reranking", lang: "Python", match: true, commits: "aujourd'hui" },
  { name: "acme/legacy-crm", desc: "Old CRM, archived", lang: "PHP", match: false, commits: "2021" },
  { name: "nina-t/vector-db-bench", desc: "Benchmarks: Pinecone vs Qdrant vs pgvector", lang: "Go", match: true, commits: "il y a 2 j" },
];

export const SceneScan: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <StepTag num="1" label="On scanne GitHub dans votre niche" />
      <Pop delay={8}>
        <Window title="azerit — recherche d'intention · niche : « bases vectorielles / RAG »">
          <div style={{ padding: "28px 36px 12px", fontFamily: T.mono, fontSize: 24, color: T.blue }}>
            <TypeText text='> azerit scan --niche "vector databases, RAG"' startFrame={15} charsPerFrame={1.6} />
          </div>
          <div style={{ padding: "8px 36px 32px" }}>
            {REPOS.map((r, i) => {
              const delay = 55 + i * 16;
              const visible = frame >= delay;
              const matchDelay = delay + 10;
              return (
                <div
                  key={r.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    padding: "14px 20px",
                    borderRadius: 12,
                    marginTop: 8,
                    opacity: visible ? 1 : 0,
                    background: r.match && frame >= matchDelay ? T.greenSoft : "transparent",
                    border: `1px solid ${r.match && frame >= matchDelay ? "rgba(63,185,80,0.5)" : T.border}`,
                    transition: "none",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: T.mono, fontSize: 23, color: T.blue }}>{r.name}</div>
                    <div style={{ fontSize: 19, color: T.dim, marginTop: 2 }}>
                      {r.desc} · <span style={{ fontFamily: T.mono }}>{r.lang}</span> · dernier commit : {r.commits}
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: T.mono,
                      fontSize: 18,
                      fontWeight: 700,
                      padding: "5px 16px",
                      borderRadius: 99,
                      opacity: frame >= matchDelay ? 1 : 0,
                      color: r.match ? "#06110a" : T.dim,
                      background: r.match ? T.green : "transparent",
                      border: r.match ? "none" : `1px solid ${T.border}`,
                    }}
                  >
                    {r.match ? "✓ INTENT" : "ignoré"}
                  </div>
                </div>
              );
            })}
          </div>
        </Window>
      </Pop>
    </AbsoluteFill>
  );
};

/* ============ Scene 3 — Qualification ============ */
const SCORES = [
  { label: "Repo actif dans la niche", value: 0.95, color: T.green },
  { label: "Commits récents (< 7 jours)", value: 0.9, color: T.green },
  { label: "Stack compatible avec votre produit", value: 0.85, color: T.blue },
  { label: "Contact public (email / profil)", value: 0.8, color: T.purple },
];

export const SceneQualify: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <StepTag num="2" label="On qualifie : le besoin est déjà dans le code" />
      <Pop delay={8}>
        <Window title="azerit — qualification · lea-dubois/pg-vector-search" width={1200}>
          <div style={{ padding: "40px 48px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 36 }}>
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 99,
                  background: `linear-gradient(135deg, ${T.purple}, ${T.blue})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 30,
                  fontWeight: 800,
                }}
              >
                LD
              </div>
              <div>
                <div style={{ fontSize: 30, fontWeight: 700 }}>Léa Dubois</div>
                <div style={{ fontFamily: T.mono, fontSize: 21, color: T.dim }}>
                  lea-dubois · construit pg-vector-search · CTO @ startup data
                </div>
              </div>
              <div style={{ marginLeft: "auto", textAlign: "center" }}>
                <div style={{ fontFamily: T.mono, fontSize: 54, fontWeight: 800, color: T.green }}>
                  {Math.round(
                    interpolate(frame, [30, 90], [0, 92], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    }),
                  )}
                </div>
                <div style={{ fontFamily: T.mono, fontSize: 18, color: T.dim }}>score d'intention</div>
              </div>
            </div>
            {SCORES.map((s, i) => {
              const delay = 25 + i * 15;
              const p = spring({ frame: frame - delay, fps, config: { damping: 16 } });
              return (
                <div key={s.label} style={{ marginBottom: 24, opacity: frame >= delay ? 1 : 0 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 21,
                      marginBottom: 8,
                    }}
                  >
                    <span>{s.label}</span>
                    <span style={{ fontFamily: T.mono, color: s.color }}>
                      {Math.round(p * s.value * 100)}%
                    </span>
                  </div>
                  <div style={{ height: 14, borderRadius: 99, background: T.bgSoft, overflow: "hidden" }}>
                    <div
                      style={{
                        height: "100%",
                        width: `${p * s.value * 100}%`,
                        borderRadius: 99,
                        background: s.color,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Window>
      </Pop>
    </AbsoluteFill>
  );
};

/* ============ Scene 4 — Message personnalisé ============ */
const EMAIL_TEXT = `Bonjour Léa,

Je viens de voir pg-vector-search — votre façon de
combiner pgvector avec un reranking maison est très
propre. Le chunking dans ingest.ts, malin.

On a construit un outil qui règle exactement le point
que vous notez dans votre README : la latence des
requêtes hybrides à l'échelle.

Partante pour un essai sur votre repo ?`;

export const SceneMessage: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <StepTag num="3" label="On écrit un message qui prouve qu'on a lu leur code" />
      <Pop delay={8}>
        <Window title="azerit — rédaction · pour : lea.dubois@…" width={1150}>
          <div style={{ padding: "36px 48px" }}>
            <div
              style={{
                fontFamily: T.mono,
                fontSize: 19,
                color: T.dim,
                paddingBottom: 20,
                borderBottom: `1px solid ${T.border}`,
                marginBottom: 26,
                lineHeight: 1.7,
              }}
            >
              <div>
                À : <span style={{ color: T.text }}>lea.dubois@…</span>
              </div>
              <div>
                Objet :{" "}
                <span style={{ color: T.text }}>
                  <TypeText
                    text="votre reranking dans pg-vector-search"
                    startFrame={20}
                    charsPerFrame={1.4}
                    cursor={false}
                  />
                </span>
              </div>
            </div>
            <div
              style={{
                fontSize: 26,
                lineHeight: 1.65,
                whiteSpace: "pre-wrap",
                minHeight: 480,
              }}
            >
              <TypeText text={EMAIL_TEXT} startFrame={45} charsPerFrame={2.4} />
            </div>
            <div
              style={{
                display: "flex",
                gap: 14,
                marginTop: 10,
                opacity: frame >= 200 ? 1 : 0,
              }}
            >
              {["repo réel cité", "détail du code", "zéro template"].map((t) => (
                <div
                  key={t}
                  style={{
                    fontFamily: T.mono,
                    fontSize: 18,
                    color: T.green,
                    background: T.greenSoft,
                    border: `1px solid rgba(63,185,80,0.5)`,
                    borderRadius: 99,
                    padding: "6px 18px",
                  }}
                >
                  ✓ {t}
                </div>
              ))}
            </div>
          </div>
        </Window>
      </Pop>
    </AbsoluteFill>
  );
};

/* ============ Scene 5 — Envoi & résultats ============ */
export const SceneResults: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const fly = spring({ frame: frame - 10, fps, config: { damping: 20 } });
  const stats = [
    { n: 100, suffix: "%", label: "automatisé, de la recherche à l'envoi" },
    { n: 0, suffix: "", label: "message générique envoyé" },
    { n: 1, suffix: "", label: "seule chose à faire : décrire votre produit" },
  ];
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <StepTag num="4" label="On envoie — vous récoltez les réponses" />
      <div
        style={{
          fontSize: 120,
          transform: `translateX(${interpolate(fly, [0, 1], [-300, 300])}px) translateY(${interpolate(fly, [0, 1], [60, -60])}px) rotate(12deg)`,
          opacity: interpolate(fly, [0, 0.1, 0.9, 1], [0, 1, 1, 0]),
          marginBottom: 30,
        }}
      >
        ✉️
      </div>
      <div style={{ display: "flex", gap: 32 }}>
        {stats.map((s, i) => {
          const delay = 40 + i * 14;
          const p = spring({ frame: frame - delay, fps, config: { damping: 15 } });
          return (
            <div
              key={s.label}
              style={{
                width: 380,
                background: T.bgSoft,
                border: `1px solid ${T.border}`,
                borderRadius: 18,
                padding: "40px 32px",
                textAlign: "center",
                opacity: p,
                transform: `translateY(${interpolate(p, [0, 1], [30, 0])}px)`,
              }}
            >
              <div style={{ fontFamily: T.mono, fontSize: 64, fontWeight: 800, color: T.green }}>
                {Math.round(p * s.n)}
                {s.suffix}
              </div>
              <div style={{ fontSize: 22, color: T.dim, marginTop: 8 }}>{s.label}</div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

/* ============ Scene 6 — Outro ============ */
export const SceneOutro: React.FC = () => {
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <Pop delay={5}>
        <div style={{ fontFamily: T.mono, fontSize: 56, fontWeight: 700, textAlign: "center" }}>
          <span style={{ color: T.green }}>&gt;_</span> azerit
        </div>
      </Pop>
      <Pop delay={25}>
        <div
          style={{
            fontSize: 44,
            fontWeight: 700,
            marginTop: 36,
            textAlign: "center",
            maxWidth: 1300,
            lineHeight: 1.35,
          }}
        >
          L'intention est déjà sur GitHub.
          <br />
          <span style={{ color: T.green }}>On la transforme en clients.</span>
        </div>
      </Pop>
      <Pop delay={55}>
        <div
          style={{
            marginTop: 48,
            fontFamily: T.mono,
            fontSize: 26,
            color: "#06110a",
            background: T.green,
            padding: "16px 44px",
            borderRadius: 12,
            fontWeight: 700,
          }}
        >
          Rejoindre l'accès anticipé →
        </div>
      </Pop>
    </AbsoluteFill>
  );
};
