import { Link } from "react-router-dom";
import { LogoMark } from "../components/Logo";
import type { Lang } from "./lang";
import { UI } from "./lang";
import { LangSwitch } from "./LangSwitch";
import { CATEGORIES, POSTS, formatLongDate, type CategoryId } from "./posts";

// The paper's head, on the front page and over every article: the edition
// (the day of the latest post) on the left, the site's wordmark in the
// middle, the EN | FR switch on the right, and under them the bar of
// rubriques with the current one underlined. `compact` is the article page's
// version: smaller wordmark.
export function Masthead({
  lang,
  onLang,
  active,
  compact = false,
}: {
  lang: Lang;
  onLang: (l: Lang) => void;
  active?: CategoryId;
  compact?: boolean;
}) {
  const t = UI[lang];
  return (
    <header className={compact ? "masthead masthead-compact" : "masthead"}>
      <div className="masthead-row">
        <span className="masthead-edition">
          {t.edition} {formatLongDate(POSTS[0].date, lang)}
        </span>
        <Link to="/blog/" className="masthead-title">
          <LogoMark size={compact ? 24 : 40} /> {t.masthead}
        </Link>
        <LangSwitch lang={lang} onChange={onLang} />
      </div>
      <nav className="rubriques" aria-label={t.categories}>
        <Link to="/blog/" className={active ? undefined : "active"}>
          {t.frontPage}
        </Link>
        {CATEGORIES.map((c) => (
          <Link
            key={c.id}
            to={`/blog/?category=${c.id}`}
            className={active === c.id ? "active" : undefined}
          >
            {c[lang]}
          </Link>
        ))}
      </nav>
    </header>
  );
}
