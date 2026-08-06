const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Go: "#00ADD8",
  Rust: "#dea584",
  Shell: "#89e051",
};

function RepoIcon() {
  return (
    <svg className="repo-ic" aria-hidden height="16" viewBox="0 0 16 16" width="16" fill="currentColor">
      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg aria-hidden height="14" viewBox="0 0 16 16" width="14" fill="currentColor">
      <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
    </svg>
  );
}

export type Repo = {
  name: string;
  desc: string;
  lang: string;
  stars: string;
  updated: string;
  hit: boolean;
};

function RepoRow({ repo, hitLabel }: { repo: Repo; hitLabel: string }) {
  return (
    <div className={`repo-row${repo.hit ? " hit" : ""}`}>
      <div className="gh-repo-line">
        <RepoIcon />
        <span className="rname">{repo.name}</span>
        <span className={`gh-intent${repo.hit ? "" : " off"}`}>{repo.hit ? hitLabel : "skipped"}</span>
      </div>
      <div className="gh-desc">{repo.desc}</div>
      <div className="gh-meta">
        <span className="lang">
          <span className="langdot" style={{ background: LANG_COLORS[repo.lang] }} />
          {repo.lang}
        </span>
        <span className="lang">
          <StarIcon /> {repo.stars}
        </span>
        <span>{repo.updated}</span>
      </div>
    </div>
  );
}

export function RepoFeed({
  repos,
  count,
  hitLabel = "✓ intent",
}: {
  repos: Repo[];
  count: string;
  hitLabel?: string;
}) {
  // two identical copies back to back: the keyframe slides the track up by
  // exactly half its height, so the loop point is invisible
  const loop = [...repos, ...repos];
  return (
    <div className="repo-feed" aria-hidden="true">
      <div className="repo-feed-head">
        <span className="feed-dot" />
        scanning github…
        <span className="count">{count}</span>
      </div>
      <div className="repo-feed-window">
        <div className="repo-feed-track">
          {loop.map((r, i) => (
            <RepoRow key={`${r.name}-${i}`} repo={r} hitLabel={hitLabel} />
          ))}
        </div>
      </div>
    </div>
  );
}
