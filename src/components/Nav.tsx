import { Link } from "react-router-dom";
import { LogoMark } from "./Logo";

export function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <Link to="/" className="logo">
          <LogoMark size={18} /> azerit
        </Link>
        <Link to="/try" className="try-link">
          try it →
        </Link>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <LogoMark size={13} /> azerit © {new Date().getFullYear()} · the intent is already on
        GitHub.
      </div>
    </footer>
  );
}
