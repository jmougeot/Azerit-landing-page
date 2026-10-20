import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { TopBar, Footer } from "../components/Nav";
import { Seam } from "../components/Seam";
import { DemoLink } from "../components/DemoLink";
import { POSTS, categoryLabel, formatDate } from "../blog/posts";
import { UI, useLang } from "../blog/lang";
import { LangSwitch } from "../blog/LangSwitch";
import { Prose, readingMinutes } from "../blog/Prose";
import { PostCover } from "../blog/PostCover";
import { NotFound } from "./NotFound";

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

  return (
    <>
      <TopBar />
      <main>
        <Seam />

        <article>
          <header className="band band-head">
            <div className="container post-head">
              <div className="post-head-bar">
                <Link to="/blog/" className="post-back">
                  ← {t.allPosts}
                </Link>
                <LangSwitch lang={lang} onChange={setLang} />
              </div>
              <span className="tag eyebrow">
                <Link to={`/blog/?category=${post.category}`}>{categoryLabel(post.category, lang)}</Link>
              </span>
              <h1>{v.title}</h1>
              <p className="post-author">
                <time dateTime={post.date}>{formatDate(post.date, lang)}</time> · {readingMinutes(v.body)}{" "}
                {t.minRead} · {t.by} {post.author}
              </p>
            </div>
          </header>
          <section className="band">
            <div className="container post-body">
              <div className="post-figure">
                <PostCover post={post} lang={lang} size="full" />
              </div>
              <Prose source={v.body} />
              {post.sources.length > 0 && (
                <aside className="post-sources">
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
          </section>
        </article>

        <Seam hatch />

        <section className="band">
          <div className="container demo-band">
            <span className="tag eyebrow">azerit</span>
            <h2>{t.ctaTitle}</h2>
            <p>{t.ctaSub}</p>
            <div className="page-ctas">
              <Link to="/try" className="btn-try">
                {t.ctaTry}
              </Link>
              <DemoLink className="demo-link">{t.ctaDemo}</DemoLink>
            </div>
          </div>
        </section>

        <Seam />
      </main>
      <Footer />
    </>
  );
}
