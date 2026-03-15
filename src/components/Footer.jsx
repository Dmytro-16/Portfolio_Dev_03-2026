import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="Footer">
      <div className="Footer-links">
        <a
          href="https://github.com/Dmytro-16"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          GitHub
        </a>
        {["LinkedIn", "Twitter", "CV à telecharger"].map((l) => (
          <span key={l} className="footer-link">
            {l}
          </span>
        ))}
      </div>
      <div className="Footer-copy">{t("footer.copy")}</div>
    </footer>
  );
}
