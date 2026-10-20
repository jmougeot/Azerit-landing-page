import { Link, NavLink } from "react-router-dom";
import { LogoMark } from "./Logo";

export function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <Link to="/" className="logo">
          <LogoMark size={18} /> azerit
        </Link>
        <div className="topbar-nav">
          <NavLink
            to="/blog/"
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
          <NavLink
            to="/pricing"
            className={({ isActive }) => `nav-link nav-secondary${isActive ? " active" : ""}`}
          >
            pricing
          </NavLink>
          <Link to="/try" className="try-link">
            try it
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="footer band">
      <div className="container" style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <LogoMark size={13} /> azerit © {new Date().getFullYear()} · the proof is already on
        GitHub.
        <Link to="/about" style={{ marginLeft: "auto", color: "inherit" }}>
          about
        </Link>
        <Link to="/blog/" style={{ color: "inherit" }}>
          blog
        </Link>
        <Link to="/pricing" style={{ color: "inherit" }}>
          pricing
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
