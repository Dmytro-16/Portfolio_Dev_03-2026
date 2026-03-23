import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="NotFound">
      <p className="NotFound-code">// {t("notfound.code")}</p>
      <h1 className="NotFound-title">404</h1>
      <p className="NotFound-sub">{t("notfound.sub")}</p>
      <p className="NotFound-text">{t("notfound.text")}</p>
      <a href="/" className="NotFound-btn">
        ← {t("notfound.btn")}
      </a>
    </div>
  );
}
