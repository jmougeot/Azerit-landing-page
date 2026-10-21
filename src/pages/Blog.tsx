import { usePageTitle, BLOG_META } from "../meta";
import { Link, useSearchParams } from "react-router-dom";
import { TopBar, Footer } from "../components/Nav";
import { DemoLink } from "../components/DemoLink";
import { CATEGORIES, POSTS, categoryLabel, type CategoryId } from "../blog/posts";
import { UI, blogPath, useLang } from "../blog/lang";
import { Masthead } from "../blog/Masthead";
import { Story, Headline } from "../blog/Story";
import { readingMinutes, typo } from "../blog/Prose";

// The front page. Newest story as the lead, the next three as rows, then one
// band per rubrique with what hasn't been placed yet; the side column runs
// the wire (newest first), the three longest reads, and the paper's own box.
// ?category=<id> turns it into a rubrique page: lead + rows only, same side.
export function Blog() {
  const [lang, setLang] = useLang();
  const t = UI[lang];
  const [params] = useSearchParams();
  const active = CATEGORIES.find((c) => c.id === params.get("category"))?.id as CategoryId | undefined;
  const posts = active ? POSTS.filter((p) => p.category === active) : POSTS;

  usePageTitle(BLOG_META[lang].title);

  const [lead, ...rest] = posts;
  const rows = active ? rest : rest.slice(0, 3);
  const placed = new Set([lead, ...rows].filter(Boolean).map((p) => p.slug));
  const bands = active
    ? []
    : CATEGORIES.map((c) => ({
        cat: c,
        posts: POSTS.filter((p) => p.category === c.id && !placed.has(p.slug)),
      })).filter((b) => b.posts.length > 0);
  const picks = [...posts]
    .sort((a, b) => readingMinutes(b[lang].body) - readingMinutes(a[lang].body) || b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <>
      <TopBar />
      <main className="paper">
        <div className="paper-wrap">
          <Masthead lang={lang} onLang={setLang} active={active} />
          {!lead ? (
            <p className="paper-empty">{t.empty}</p>
          ) : (
            <div className="front">
              <div className="front-main">
                <Story post={lead} lang={lang} kind="lead" eager />
                {rows.map((post) => (
                  <Story key={post.slug} post={post} lang={lang} kind="row" />
                ))}
                {bands.map((b) => (
                  <section className="front-block" key={b.cat.id}>
                    <h2 className="block-title">
                      <Link to={blogPath(lang, `?category=${b.cat.id}`)}>{b.cat[lang]}</Link>
                    </h2>
                    <div className="cards">
                      {b.posts.slice(0, 3).map((post) => (
                        <Story key={post.slug} post={post} lang={lang} kind="card" />
                      ))}
                    </div>
                    {b.posts.length > 3 && (
                      <ul className="block-more">
                        {b.posts.slice(3).map((post) => (
                          <li key={post.slug}>
                            <Headline post={post} lang={lang} />
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>
              <aside className="front-side">
                <section>
                  <h2 className="side-title">{t.latest}</h2>
                  <ol className="wire">
                    {posts.slice(0, 8).map((post) => (
                      <li key={post.slug}>
                        <Headline post={post} lang={lang} date />
                      </li>
                    ))}
                  </ol>
                </section>
                <section>
                  <h2 className="side-title">{t.mostRead}</h2>
                  <ol className="picks">
                    {picks.map((post, i) => (
                      <li key={post.slug}>
                        <Link to={blogPath(lang, post.slug)}>
                          <span className="pick-n">{String(i + 1).padStart(2, "0")}</span>
                          <span>
                            <span className="kicker">{categoryLabel(post.category, lang)}</span>
                            <span className="headline">{typo(post[lang].title)}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ol>
                </section>
                <section className="paper-box">
                  <h2>{t.boxTitle}</h2>
                  <p>{t.boxText}</p>
                  <Link to="/try" className="btn-try">
                    {t.ctaTry}
                  </Link>
                  <DemoLink className="demo-link">{t.ctaDemo}</DemoLink>
                </section>
              </aside>
            </div>
          )}
        </div>
      </main>
      <Footer plain />
    </>
  );
}
