import { Link } from "react-router-dom";
import { LogoMark } from "./Logo";

export function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <Link to="/" className="logo">
          <LogoMark size={18} /> azerit
        </Link>
        <div className="topbar-nav">
          <Link to="/pricing" className="nav-link">
            pricing
          </Link>
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
        <Link to="/pricing" style={{ marginLeft: "auto", color: "inherit" }}>
          pricing
        </Link>
        <Link to="/legal" style={{ color: "inherit" }}>
          legal &amp; privacy
        </Link>
      </div>
    </footer>
  );
}
