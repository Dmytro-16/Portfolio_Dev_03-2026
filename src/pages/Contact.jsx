import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

import { useState } from "react";

export default function Contact() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  const [message, setMessage] = useState(null); // null | "success" | "error"

  const { t } = useTranslation();

  const sendEmail = (event) => {
    event.preventDefault();
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    Promise.all([
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
    ])
      .then(() => {
        setMessage("success");
        event.target.reset();
      })
      .catch((error) => {
        console.log(error.text);
        setMessage("error");
      });
  };

  return (
    <section className="Contact">
      <div className="Contact-text">
        <h1>{t("contact.title")}</h1>
        <span>
          <p>dsemenchuk@dsdeveloper.fr</p>
          {["GitHub", "LinkedIn"].map((l) => (
            <span key={l} className="footer-link">
              {l}
            </span>
          ))}
        </span>
      </div>
      <form className="Contact-input" onSubmit={sendEmail}>
        <input
          type="text"
          name="from_name"
          placeholder={t("contact.name")}
          required
        />
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
        <button type="submit">{t("contact.send")}</button>
      </form>

      {message === "success" && (
        <div className="Contact-message success">
          <p>Merci, votre message a bien été envoyé !</p>
        </div>
      )}
      {message === "error" && (
        <div className="Contact-message error">
          <p>Une erreur est survenue, merci de réessayer.</p>
        </div>
      )}
    </section>
  );
}
