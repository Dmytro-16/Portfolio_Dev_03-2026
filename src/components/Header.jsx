import { useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";
import LangSwitcher from "./LangSwitcher";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // ferme le menu après le clic
  };

  return (
    <header className="header">
      <nav className="nav">
        <button
          className="logo-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Logo height={55} />
        </button>
        <div className="nav-links">
          <button className="nav-link" onClick={() => scrollTo("about")}>
            {t("header.about")}
          </button>
          <button className="nav-link" onClick={() => scrollTo("projects")}>
            {t("header.projects")}
          </button>
          <button className="nav-link" onClick={() => scrollTo("skills")}>
            {t("header.skills")}
          </button>
          <button className="nav-link" onClick={() => scrollTo("contact")}>
            {t("header.contact")}
          </button>
          <div className="status">
            <span className="dot" />
            {t("header.available")}
          </div>
        </div>
        <div className="header-actions">
          <LangSwitcher />
          <ThemeToggle />
          <button className="btn-cta" onClick={() => scrollTo("contact")}>
            {t("header.cta")}
          </button>
          <button className="hamburger" onClick={() => setMenuOpen((o) => !o)}>
            <span style={{ background: "var(--jaune)" }} />
            <span style={{ background: "var(--bordeaux)" }} />
            <span style={{ background: "var(--vert)" }} />
            <span style={{ background: "var(--orange)" }} />
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="mobile-menu">
          <button className="nav-link" onClick={() => scrollTo("about")}>
            {t("header.about")}
          </button>
          <button className="nav-link" onClick={() => scrollTo("projects")}>
            {t("header.projects")}
          </button>
          <button className="nav-link" onClick={() => scrollTo("skills")}>
            {t("header.skills")}
          </button>
          <button className="nav-link" onClick={() => scrollTo("contact")}>
            {t("header.contact")}
          </button>
        </div>
      )}
    </header>
  );
}
