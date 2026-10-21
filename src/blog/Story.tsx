import { Link } from "react-router-dom";
import type { Lang } from "./lang";
import { UI } from "./lang";
import { Thumb } from "./PostCover";
import { categoryLabel, formatDate, type Post } from "./posts";
import { readingMinutes, typo } from "./Prose";

// One story on the front page, in one of three cuts: the `lead` (picture
// above, biggest headline), a `row` (words left, picture right, with the
// standfirst) or a `card` (picture above, headline only, three to a band).
export function Story({
  post,
  lang,
  kind,
  eager = false,
}: {
  post: Post;
  lang: Lang;
  kind: "lead" | "row" | "card";
  eager?: boolean;
}) {
  const v = post[lang];
  const t = UI[lang];
  return (
    <Link to={`/blog/${post.slug}`} className={kind}>
      <div className="slot">
        <Thumb post={post} lang={lang} eager={eager} />
      </div>
      <div className="story-text">
        <span className="kicker">{categoryLabel(post.category, lang)}</span>
        <span className="headline">{typo(v.title)}</span>
        {kind !== "card" && <span className="standfirst">{typo(v.description)}</span>}
        {kind !== "card" && (
          <span className="byline">
            <time dateTime={post.date}>{formatDate(post.date, lang)}</time> · {readingMinutes(v.body)}{" "}
            {t.minRead}
          </span>
        )}
      </div>
    </Link>
  );
}

// A headline alone, for the wire and the lists under the rubrique bands
export function Headline({ post, lang, date = false }: { post: Post; lang: Lang; date?: boolean }) {
  const v = post[lang];
  return (
    <Link to={`/blog/${post.slug}`}>
      {date && <time dateTime={post.date}>{formatDate(post.date, lang)}</time>}
      <span className="kicker">{categoryLabel(post.category, lang)}</span>
      <span className="headline">{typo(v.title)}</span>
    </Link>
  );
}
