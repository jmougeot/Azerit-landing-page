import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { TopBar, Footer } from "../components/Nav";
import { DemoLink } from "../components/DemoLink";
import { POSTS, categoryLabel, formatDate } from "../blog/posts";
import { UI, useLang } from "../blog/lang";
import { Masthead } from "../blog/Masthead";
import { Story } from "../blog/Story";
import { Prose, readingMinutes, typo } from "../blog/Prose";
import { PostVisual } from "../blog/PostCover";
import { NotFound } from "./NotFound";

// An article page: the compact masthead with the article's rubrique
// underlined, the story in a reading column, three more stories, the box.
export function BlogPost() {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug);
  const [lang, setLang] = useLang();
  const t = UI[lang];
  const v = post?.[lang];

  useEffect(() => {
    if (!v) return;
    document.title = `${v.title} · Azerit`;
    return () => {
      document.title = "Azerit · Recruit Engineers from GitHub with AI";
    };
  }, [v]);

  if (!post || !v) return <NotFound />;

  // the same rubrique first, then the newest of the others, three in all
  const next = [
    ...POSTS.filter((p) => p.category === post.category && p.slug !== post.slug),
    ...POSTS.filter((p) => p.category !== post.category),
  ].slice(0, 3);

  return (
    <>
      <TopBar />
      <main className="paper">
        <div className="paper-wrap">
          <Masthead lang={lang} onLang={setLang} active={post.category} compact />

          <article className="story">
            <span className="kicker">
              <Link to={`/blog/?category=${post.category}`}>{categoryLabel(post.category, lang)}</Link>
            </span>
            <h1 className="story-title">{typo(v.title)}</h1>
            <p className="story-standfirst">{typo(v.description)}</p>
            <p className="story-byline">
              <span>
                {t.by} <b>{post.author}</b>
              </span>
              <time dateTime={post.date}>{formatDate(post.date, lang)}</time>
              <span>
                {readingMinutes(v.body)} {t.minRead}
              </span>
            </p>
            <PostVisual post={post} lang={lang} />
            <div className="story-body">
              <Prose source={v.body} />
              {post.sources.length > 0 && (
                <aside className="story-sources">
                  <h2>{t.sources}</h2>
                  <ul>
                    {post.sources.map((s) => (
                      <li key={s.url}>
                        <a href={s.url} target="_blank" rel="noreferrer">
                          {s[lang]}
                        </a>
                      </li>
                    ))}
                  </ul>
                </aside>
              )}
            </div>
          </article>

          <section className="read-next">
            <h2 className="block-title">{t.readNext}</h2>
            <div className="cards">
              {next.map((p) => (
                <Story key={p.slug} post={p} lang={lang} kind="card" />
              ))}
            </div>
          </section>

          <div className="story-end">
            <section className="paper-box">
              <h2>{t.boxTitle}</h2>
              <p>{t.boxText}</p>
              <Link to="/try" className="btn-try">
                {t.ctaTry}
              </Link>
              <DemoLink className="demo-link">{t.ctaDemo}</DemoLink>
            </section>
          </div>
        </div>
      </main>
      <Footer plain />
    </>
  );
}
