import { useTranslation } from "react-i18next";
import { useState } from "react";
export default function Contact() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const { t } = useTranslation();

  return (
    <section className="Contact">
      <div className="Contact-text">
        <h1>{t("contact.title")}</h1>
        <span>
          <p>dmytro.semenchuk@outlook.com</p>
          {["GitHub", "LinkedIn"].map((l) => (
            <span key={l} className="footer-link">
              {l}
            </span>
          ))}
        </span>
      </div>
      <div className="Contact-input">
        <input
          type="text"
          placeholder={t("contact.name")}
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <input type="email" placeholder={t("contact.email")} />
        <input type="text" placeholder={t("contact.subject")} />
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder={t("contact.message")}
        ></textarea>
        <button type="submit">{t("contact.send")}</button>
      </div>
    </section>
  );
}
