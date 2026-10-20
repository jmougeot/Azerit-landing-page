import type { CSSProperties } from "react";
import { LogoMark } from "../components/Logo";
import type { Lang } from "./lang";
import { categoryLabel, type Post } from "./posts";

// A post's cover, drawn rather than screenshotted: the article's key figure in
// big mono type on a dark terminal tile, with the page's dot grid and a band
// of hatching in the category's colour. Sizes are in container units, so the
// same cover reads as a 200px thumbnail in the index and full width on the post.
export function PostCover({ post, lang, size }: { post: Post; lang: Lang; size: "thumb" | "full" }) {
  const { figure, caption } = post.cover;
  return (
    <div className={`cover cover-${size} cover-${post.category}`} role="img" aria-label={`${figure[lang]} ${caption[lang]}`}>
      <div className="cover-top" aria-hidden="true">
        <span className="cover-tag">{categoryLabel(post.category, lang)}</span>
      </div>
      <div className="cover-main" aria-hidden="true">
        {/* --len shrinks long figures (#hiring-ideas) so they never overflow */}
        <span className="cover-figure" style={{ "--len": figure[lang].length } as CSSProperties}>
          {figure[lang]}
        </span>
        <span className="cover-caption">{caption[lang]}</span>
      </div>
      <div className="cover-foot" aria-hidden="true">
        <LogoMark size={size === "full" ? 16 : 10} />
        azerit
      </div>
    </div>
  );
}

// What a post shows as its picture: the source's own image when it has one
// (credited, linking back to where it comes from), otherwise the drawn cover.
export function PostVisual({ post, lang, size }: { post: Post; lang: Lang; size: "thumb" | "full" }) {
  const { image } = post;
  if (!image) return <PostCover post={post} lang={lang} size={size} />;
  if (size === "thumb") {
    return (
      <img
        className="post-photo post-photo-thumb"
        src={image.src}
        alt=""
        width={image.width}
        height={image.height}
        style={image.focus ? { objectPosition: image.focus } : undefined}
        loading="lazy"
      />
    );
  }
  return (
    <figure className="post-photo-figure">
      <img
        className="post-photo"
        src={image.src}
        alt={image.alt[lang]}
        width={image.width}
        height={image.height}
      />
      <figcaption>
        {lang === "fr" ? "Image : " : "Image: "}
        <a href={image.href} target="_blank" rel="noreferrer">
          {image.credit}
        </a>
      </figcaption>
    </figure>
  );
}
