import Logo from "./Logo";

export default function Header() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <nav className="nav">
        <Logo height={55} />
        <div className="nav-links">
          <button className="nav-link" onClick={() => scrollTo("about")}>
            À propos
          </button>
          <button className="nav-link" onClick={() => scrollTo("projects")}>
            Projets
          </button>
          <button className="nav-link" onClick={() => scrollTo("skills")}>
            Stack
          </button>
          <button className="nav-link" onClick={() => scrollTo("contact")}>
            Contact
          </button>
          <div className="status">
            <span className="dot" />
            Disponible
          </div>
        </div>
        <button className="btn-cta" onClick={() => scrollTo("contact")}>
          Me contacter
        </button>
      </nav>
    </header>
  );
}
