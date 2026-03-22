import { useTranslation } from "react-i18next";

const LANGS = ["fr", "en", "ru"];

export default function LangSwitcher() {
  const { i18n } = useTranslation();

  const changeLang = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <select className="lang-select" value={i18n.language} onChange={changeLang}>
      {LANGS.map((lang) => (
        <option key={lang} value={lang}>
          {lang.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
