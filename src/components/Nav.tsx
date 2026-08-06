import { Link, NavLink } from "react-router-dom";
import { LogoMark } from "./Logo";

// nav-link with an active state so the topbar shows which product page
// (prospection / hiring) the visitor is on
function TopLink({ to, children }: { to: string; children: string }) {
  return (
    <NavLink to={to} className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>
      {children}
    </NavLink>
  );
}

export function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <Link to="/" className="logo">
          <LogoMark size={18} /> azerit
        </Link>
        <div className="topbar-nav">
          <TopLink to="/prospection">prospection</TopLink>
          <TopLink to="/hiring">hiring</TopLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) => `nav-link nav-secondary${isActive ? " active" : ""}`}
          >
            pricing
          </NavLink>
          <Link to="/try" className="try-link">
            try it →
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
        <LogoMark size={13} /> azerit © {new Date().getFullYear()} · the intent is already on
        GitHub.
        <Link to="/prospection" style={{ marginLeft: "auto", color: "inherit" }}>
          prospection
        </Link>
        <Link to="/hiring" style={{ color: "inherit" }}>
          hiring
        </Link>
        <Link to="/pricing" style={{ color: "inherit" }}>
          pricing
        </Link>
        <Link to="/legal" style={{ color: "inherit" }}>
          legal &amp; privacy
        </Link>
      </div>
    </footer>
  );
}
