import { useTranslation } from "react-i18next";
import Logo from "./Logo";
import LangSwitcher from "./LangSwitcher";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const { t } = useTranslation();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <nav className="nav">
        <Logo height={55} />
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
        </div>
      </nav>
    </header>
  );
}
