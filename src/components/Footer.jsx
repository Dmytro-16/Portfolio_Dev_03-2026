import { useTranslation } from "react-i18next";
import CV from "../download/CV_SEMENCHUK_Dmytro.pdf";

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
        <a
          href="https://www.linkedin.com/in/dmytro-semenchuk"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Twitter
        </a>
        <a href={CV} download className="footer-link">
          {t("footer.cv")}
        </a>
      </div>
      <div className="Footer-copy">{t("footer.copy")}</div>
    </footer>
  );
}
