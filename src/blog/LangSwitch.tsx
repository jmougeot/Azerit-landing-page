import type { Lang } from "./lang";
import { UI } from "./lang";

// EN | FR toggle shown at the top of the blog pages
export function LangSwitch({ lang, onChange }: { lang: Lang; onChange: (l: Lang) => void }) {
  return (
    <div className="lang-switch" role="group" aria-label={UI[lang].switchLabel}>
      {(["en", "fr"] as const).map((l) => (
        <button
          key={l}
          type="button"
          lang={l}
          aria-pressed={lang === l}
          onClick={() => onChange(l)}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
