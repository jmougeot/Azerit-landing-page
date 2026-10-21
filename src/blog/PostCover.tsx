import type { CSSProperties } from "react";
import { LogoMark } from "../components/Logo";
import type { Lang } from "./lang";
import { categoryLabel, type Post } from "./posts";

// A post's cover, drawn rather than screenshotted: the article's key figure in
// big mono type on a dark terminal tile, with the page's dot grid and a band
// of hatching in the category's colour. Sizes are in container units, so the
// tile scales with whatever slot it fills.
export function PostCover({ post, lang }: { post: Post; lang: Lang }) {
  const { figure, caption } = post.cover;
  return (
    <div className={`cover cover-${post.category}`} role="img" aria-label={`${figure[lang]} ${caption[lang]}`}>
      <div className="cover-top" aria-hidden="true">
        <span className="cover-tag">{categoryLabel(post.category, lang)}</span>
      </div>
      <div className="cover-main" aria-hidden="true">
        {/* --len shrinks long figures so they never overflow */}
        <span className="cover-figure" style={{ "--len": figure[lang].length } as CSSProperties}>
          {figure[lang]}
        </span>
        <span className="cover-caption">{caption[lang]}</span>
      </div>
      <div className="cover-foot" aria-hidden="true">
        <LogoMark size={16} />
        azerit
      </div>
    </div>
  );
}

// The picture in a front-page slot: the source's own image, cropped by the
// slot, or the drawn cover when there is none. Decorative there (the
// headline next to it says what the story is), so no alt text.
export function Thumb({ post, lang, eager = false }: { post: Post; lang: Lang; eager?: boolean }) {
  const { image } = post;
  if (!image) return <PostCover post={post} lang={lang} />;
  return (
    <img
      src={image.src}
      alt=""
      width={image.width}
      height={image.height}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
    />
  );
}

// The article's picture, credited and linking back to where it comes from;
// the drawn cover stands in when the source has none.
export function PostVisual({ post, lang }: { post: Post; lang: Lang }) {
  const { image } = post;
  return (
    <figure className="story-figure">
      {image ? (
        <img src={image.src} alt={image.alt[lang]} width={image.width} height={image.height} />
      ) : (
        <PostCover post={post} lang={lang} />
      )}
      {image && (
        <figcaption>
          {lang === "fr" ? "Image : " : "Image: "}
          <a href={image.href} target="_blank" rel="noreferrer">
            {image.credit}
          </a>
        </figcaption>
      )}
    </figure>
  );
}
