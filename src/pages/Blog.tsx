import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { TopBar, Footer } from "../components/Nav";
import { Seam } from "../components/Seam";
import { CATEGORIES, POSTS, categoryLabel, formatDate, type CategoryId } from "../blog/posts";
import { UI, useLang } from "../blog/lang";
import { LangSwitch } from "../blog/LangSwitch";
import { readingMinutes, typo } from "../blog/Prose";
import { PostVisual } from "../blog/PostCover";

export function Blog() {
  const [lang, setLang] = useLang();
  const t = UI[lang];
  // ?category=<id> keeps a filtered view shareable
  const [params, setParams] = useSearchParams();
  const active = CATEGORIES.find((c) => c.id === params.get("category"))?.id as CategoryId | undefined;
  const posts = active ? POSTS.filter((p) => p.category === active) : POSTS;

  useEffect(() => {
    document.title = "Blog · Azerit";
    return () => {
      document.title = "Azerit · Recruit Engineers from GitHub with AI";
    };
  }, []);

  const pick = (id?: CategoryId) => setParams(id ? { category: id } : {}, { replace: true });

  return (
    <>
      <TopBar />
      <main>
        <Seam />

        <section className="band">
          <div className="container page-head">
            <LangSwitch lang={lang} onChange={setLang} />
            <span className="tag eyebrow">{t.eyebrow}</span>
            <h1>{t.headTitle}</h1>
            <p>{t.headSub}</p>
          </div>
        </section>

        <Seam />

        <section className="band band-head">
          <div className="container blog-filters" role="group" aria-label="Categories">
            <button type="button" aria-pressed={!active} onClick={() => pick()}>
              {t.all} <span>{POSTS.length}</span>
            </button>
            {CATEGORIES.map((c) => (
              <button
                type="button"
                key={c.id}
                aria-pressed={active === c.id}
                onClick={() => pick(c.id)}
              >
                {c[lang]} <span>{POSTS.filter((p) => p.category === c.id).length}</span>
              </button>
            ))}
          </div>
        </section>
        <section className="band">
          <div className="container post-list">
            {posts.length === 0 && <p className="post-empty">{t.empty}</p>}
            {posts.map((post) => {
              const v = post[lang];
              return (
                <Link to={`/blog/${post.slug}`} className="post-row" key={post.slug}>
                  <span className="post-row-meta">
                    <span className="post-row-cat">{categoryLabel(post.category, lang)}</span>
                    <time dateTime={post.date}>{formatDate(post.date, lang)}</time>
                    <span>
                      {readingMinutes(v.body)} {t.minRead}
                    </span>
                  </span>
                  <span className="post-row-main">
                    <span className="post-row-title">{typo(v.title)}</span>
                    <span className="post-row-desc">{typo(v.description)}</span>
                  </span>
                  <span className="post-row-thumb">
                    <PostVisual post={post} lang={lang} size="thumb" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <Seam />
      </main>
      <Footer />
    </>
  );
}
