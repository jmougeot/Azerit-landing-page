import { useEffect } from "react";
import { Link } from "react-router-dom";
import { TopBar, Footer } from "../components/Nav";
import { Seam } from "../components/Seam";
import { POSTS, formatDate } from "../blog/posts";

export function Blog() {
  useEffect(() => {
    document.title = "Blog · Azerit";
    return () => {
      document.title = "Azerit · Recruit Engineers from GitHub with AI";
    };
  }, []);

  return (
    <>
      <TopBar />
      <main>
        <Seam />

        <section className="band">
          <div className="container page-head">
            <span className="tag eyebrow">blog</span>
            <h1>Notes on hiring engineers</h1>
            <p>
              What we learn reading code and writing to the people behind it: sourcing, outreach,
              and what GitHub says about an engineer.
            </p>
          </div>
        </section>

        <Seam />

        <section className="band">
          <div className="container post-list">
            {POSTS.map((post) => (
              <Link to={`/blog/${post.slug}`} className="post-row" key={post.slug}>
                <span className="post-row-meta">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>{post.minutes} min read</span>
                </span>
                <span className="post-row-main">
                  <span className="post-row-title">{post.title}</span>
                  <span className="post-row-desc">{post.description}</span>
                </span>
                <span className="post-row-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <Seam />
      </main>
      <Footer />
    </>
  );
}
