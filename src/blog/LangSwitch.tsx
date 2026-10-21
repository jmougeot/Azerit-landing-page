import { Link, useLocation } from "react-router-dom";
import type { Lang } from "./lang";
import { UI, switchPath } from "./lang";

// EN | FR toggle shown at the top of the blog pages. Real links to the other
// version, so crawlers can follow them; a click also remembers the choice.
export function LangSwitch({ lang, onChange }: { lang: Lang; onChange: (l: Lang) => void }) {
  const { pathname, search } = useLocation();
  return (
    <div className="lang-switch" role="group" aria-label={UI[lang].switchLabel}>
      {(["en", "fr"] as const).map((l) => (
        <Link
          key={l}
          to={switchPath(pathname, l) + search}
          lang={l}
          hrefLang={l}
          aria-current={lang === l ? "true" : undefined}
          onClick={(e) => {
            e.preventDefault();
            onChange(l);
          }}
        >
          {l}
        </Link>
      ))}
    </div>
  );
}
