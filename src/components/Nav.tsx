import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link to="/" className="nav-logo">
          <span className="prompt">&gt;_</span> azerit
        </Link>
        <div className="nav-links">
          <a href="/#demo">Démo</a>
          <a href="/#comment">Comment ça marche</a>
          <a href="/#pricing">Tarifs</a>
          <Link to="/checkout?plan=growth" className="btn btn-primary" style={{ padding: "8px 18px", fontSize: 14 }}>
            Commencer
          </Link>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="mono">
          <span style={{ color: "var(--green)" }}>&gt;_</span> azerit — © {new Date().getFullYear()}
        </div>
        <div>L'intention est déjà sur GitHub. On la transforme en clients.</div>
      </div>
    </footer>
  );
}
