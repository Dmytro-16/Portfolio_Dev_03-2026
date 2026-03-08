import { useTranslation } from "react-i18next";

const LANGS = ["fr", "en", "ru"];

export default function LangSwitcher() {
  const { i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div className="lang-switcher">
      {LANGS.map((lang) => (
        <button
          key={lang}
          className={`lang-btn${i18n.language === lang ? " active" : ""}`}
          onClick={() => changeLang(lang)}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
