import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState(null); // null | "success" | "error"
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();

  const sendEmail = async (event) => {
    event.preventDefault();
    if (sent) return;

    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await Promise.all([
        emailjs.sendForm(
          serviceId,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          event.target,
          publicKey,
        ),
        emailjs.sendForm(
          serviceId,
          import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
          event.target,
          publicKey,
        ),
      ]);
      setMessage("success");
      setSent(true);
      event.target.reset();
    } catch (error) {
      console.log(error.text);
      setMessage("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="Contact">
      <div className="Contact-text">
        <h1 className="hero-title">
          {t("contact.title")}
          <em>{t("contact.title_accent")}</em>
          {t("contact.title_end")}
        </h1>
        <span className="Contact-info-About2">
          <p>dsemenchuk@dsdeveloper.fr</p>
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
        </span>
      </div>
      <form className="Contact-input" onSubmit={sendEmail}>
        <div className="Contact-row">
          <input
            type="text"
            name="from_name"
            placeholder={t("contact.name")}
            required
          />
          <input
            type="text"
            name="from_firstname"
            placeholder={t("contact.firstname")}
            required
          />
        </div>
        <input
          type="email"
          name="from_email"
          placeholder={t("contact.email")}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder={t("contact.subject")}
          required
        />
        <textarea
          name="message"
          rows="4"
          placeholder={t("contact.message")}
          required
        ></textarea>

        <button type="submit" disabled={loading || sent}>
          {loading ? "Envoi en cours..." : t("contact.send")}
        </button>
      </form>

      {message && (
        <div className="modal-overlay" onClick={() => setMessage(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            {message === "success" ? (
              <>
                <p className="modal-icon">✅</p>
                <p>Merci, votre message a bien été envoyé !</p>
              </>
            ) : (
              <>
                <p className="modal-icon">❌</p>
                <p>Une erreur est survenue, merci de réessayer.</p>
              </>
            )}

            <button className="modal-close" onClick={() => setMessage(null)}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
