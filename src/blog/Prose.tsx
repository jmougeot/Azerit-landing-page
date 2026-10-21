import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { blogPath, type Lang } from "./lang";

// Posts are written as plain text with a few markdown marks, so a post file is
// just its words. Blocks are separated by a blank line:
//   ## Heading · - bullet lines · 1. numbered lines · > quote · anything else is a paragraph
// Inside a block: [label](url) links (internal when the url starts with "/";
// write /blog/<slug> in both versions, the French one is sent to /fr/blog/<slug>)
// and **bold**. Single line breaks inside a paragraph are joined with a space.

// French typography: keep "1 000", "68 %", "mot :" and « guillemets » from
// breaking across lines. A no-op on English text, which has none of these.
export function typo(text: string) {
  return text
    .replace(/(\d) (?=\d{3}\b)/g, "$1\u00a0")
    .replace(/ ([%:;?!»])/g, "\u00a0$1")
    .replace(/« /g, "«\u00a0");
}

function inline(raw: string, lang: Lang): ReactNode[] {
  const text = typo(raw);
  const out: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      const href = m[2].startsWith("/blog/") ? blogPath(lang, m[2].slice("/blog/".length)) : m[2];
      out.push(
        href.startsWith("/") ? (
          <Link key={m.index} to={href}>
            {m[1]}
          </Link>
        ) : (
          <a key={m.index} href={href} target="_blank" rel="noreferrer">
            {m[1]}
          </a>
        )
      );
    } else {
      out.push(<b key={m.index}>{m[3]}</b>);
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function Prose({ source, lang }: { source: string; lang: Lang }) {
  const blocks = source.trim().split(/\n\s*\n/);
  return (
    <>
      {blocks.map((block, i) => {
        const lines = block.split("\n").map((l) => l.trim());
        if (lines[0].startsWith("## ")) {
          return <h2 key={i}>{inline(lines.join(" ").slice(3), lang)}</h2>;
        }
        if (lines.every((l) => l.startsWith("- "))) {
          return (
            <ul key={i}>
              {lines.map((l, j) => (
                <li key={j}>{inline(l.slice(2), lang)}</li>
              ))}
            </ul>
          );
        }
        if (lines.every((l) => /^\d+\. /.test(l))) {
          return (
            <ol key={i}>
              {lines.map((l, j) => (
                <li key={j}>{inline(l.replace(/^\d+\. /, ""), lang)}</li>
              ))}
            </ol>
          );
        }
        if (lines.every((l) => l.startsWith(">"))) {
          return (
            <blockquote key={i}>{inline(lines.map((l) => l.replace(/^>\s?/, "")).join(" "), lang)}</blockquote>
          );
        }
        return <p key={i}>{inline(lines.join(" "), lang)}</p>;
      })}
    </>
  );
}

export function readingMinutes(source: string) {
  return Math.max(1, Math.round(source.trim().split(/\s+/).length / 200));
}
