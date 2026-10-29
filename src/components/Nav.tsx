import { Link, NavLink, useLocation } from "react-router-dom";
import { LogoMark } from "./Logo";
import { Email } from "./Email";

export function TopBar() {
  // on the French blog, "blog" stays on the French front page
  const blog = useLocation().pathname.startsWith("/fr/blog") ? "/fr/blog/" : "/blog/";
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <Link to="/" className="logo">
          <LogoMark size={18} /> azerit
        </Link>
        <div className="topbar-nav">
          <NavLink
            to={blog}
            className={({ isActive }) => `nav-link nav-secondary${isActive ? " active" : ""}`}
          >
            blog
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link nav-secondary${isActive ? " active" : ""}`}
          >
            about
          </NavLink>
          <Link to="/try" className="try-link">
            find my engineer
          </Link>
        </div>
      </div>
    </div>
  );
}

// `plain` is for the reading pages (/about, /blog): no rails or crossings,
// just a hairline above the line of links.
// The footer carries the address: a recruiting firm you can't write to is
// one you don't trust with a hire. "for engineers" is for the developers we
// contact, who look us up before they answer.
export function Footer({ plain = false }: { plain?: boolean }) {
  return (
    <footer className={plain ? "footer footer-plain" : "footer band"}>
      <div className="container" style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <LogoMark size={13} /> azerit © {new Date().getFullYear()} · the proof is already on
        GitHub.
        <Email user="jacques" domain="azerit.tech" className="footer-mail" />
        <Link to="/about" style={{ marginLeft: "auto", color: "inherit" }}>
          about
        </Link>
        <Link to="/blog/" style={{ color: "inherit" }}>
          blog
        </Link>
        <Link to="/engineers" style={{ color: "inherit" }}>
          for engineers
        </Link>
        <Link to="/terms" style={{ color: "inherit" }}>
          terms
        </Link>
        <Link to="/legal" style={{ color: "inherit" }}>
          legal &amp; privacy
        </Link>
      </div>
    </footer>
  );
}
