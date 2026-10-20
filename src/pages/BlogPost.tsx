import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { TopBar, Footer } from "../components/Nav";
import { Seam } from "../components/Seam";
import { DemoLink } from "../components/DemoLink";
import { POSTS, formatDate } from "../blog/posts";
import { NotFound } from "./NotFound";

export function BlogPost() {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug);

  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} · Azerit`;
    return () => {
      document.title = "Azerit · Recruit Engineers from GitHub with AI";
    };
  }, [post]);

  if (!post) return <NotFound />;
  const { Body } = post;

  return (
    <>
      <TopBar />
      <main>
        <Seam />

        <article>
          <header className="band band-head">
            <div className="container post-head">
              <Link to="/blog/" className="post-back">
                ← all posts
              </Link>
              <span className="tag eyebrow">
                <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.minutes} min read
              </span>
              <h1>{post.title}</h1>
              <p className="post-author">by {post.author}</p>
            </div>
          </header>
          <section className="band">
            <div className="container post-body">
              <Body />
            </div>
          </section>
        </article>

        <Seam hatch />

        <section className="band">
          <div className="container demo-band">
            <span className="tag eyebrow">azerit</span>
            <h2>Find engineers who have already built it</h2>
            <p>A ranked shortlist from GitHub, with a first email written for each candidate.</p>
            <div className="page-ctas">
              <Link to="/try" className="btn-try">
                Find my candidates
              </Link>
              <DemoLink className="demo-link">book a demo</DemoLink>
            </div>
          </div>
        </section>

        <Seam />
      </main>
      <Footer />
    </>
  );
}
