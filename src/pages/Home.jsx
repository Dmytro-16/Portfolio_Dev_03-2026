import { useTranslation } from "react-i18next";
import imageD from "../images/IMG_1.png";
import CV from "../download/CV.pdf";
import North from "../images/North.png";
import Stripe from "../images/Stripe.svg";
import Clou from "../images/Clou.png";
import Claude from "../images/Claude.png";

// IMPORT PAGE
import Contact from "./Contact";
import Projects from "./Projects";
import StickerGrid from "../components/StickerGrid";

export default function Home() {
  const { t } = useTranslation();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <section className="About" id="about">
        <div className="About-right">
          <div className="About-text">
            <p>{t("hero.tag")}</p>
            <h1 className="hero-title">
              {t("hero.title1")}
              <br />
              <em>{t("hero.title2")}</em>
              <br />
              {t("hero.title3")}
            </h1>
            <p>{t("hero.description")}</p>

            <div className="About-buttons">
              <button
                className="btn-primary"
                onClick={() => scrollTo("projects")}
              >
                {t("hero.btn_projects")}
              </button>
              <a className="btn-ghost" href={CV} download="CV">
                {t("hero.btn_cv")}
              </a>
            </div>
          </div>
        </div>

        <div className="About-image">
          <img src={imageD} alt="Image de test" />
        </div>
      </section>

      <div className="Skills-title" id="skills">
        <h2>{t("skills.title")}</h2>
      </div>
      <section className="Skills">
        <div className="Skills-list">
          {[
            {
              name: "HTML",
              desc: "Structure des pages web",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            },
            {
              name: "CSS",
              desc: "Mise en forme & animations",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            },
            {
              name: "JavaScript",
              desc: "Langage du web, ES6+",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            },
            // {
            //   name: "Tailwind",
            //   desc: "CSS utilitaire rapide",
            //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
            // },
            {
              name: "React",
              desc: "UI déclarative par composants",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
              name: "React Native",
              desc: "Apps mobiles cross-platform",
              filter: "hue-rotate(60deg) brightness(0.7) saturate(1.5)",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
              name: "Expo",
              desc: "Workflow React Native simplifié",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg",
            },
            {
              name: "Next.js",
              desc: "React SSR & routing avancé",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            },
            {
              name: "Node.js",
              desc: "JS côté serveur",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            },
            {
              name: "Express",
              desc: "Framework API REST léger",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            },
            {
              name: "MongoDB",
              desc: "Base de données NoSQL",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            },
            {
              name: "Netlify",
              desc: "Déploiement frontend continu",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
            },
            {
              name: "Northflank",
              desc: "Déploiement backend & BDD",
              src: North,
            },
            {
              name: "GitHub",
              desc: "Versioning & collaboration",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            },
            {
              name: "Stripe",
              desc: "Paiements en ligne sécurisés",
              src: Stripe,
            },
            {
              name: "Cloudinary",
              desc: "Gestion & optimisation d'images",
              src: Clou,
            },
            // {
            //   name: "Cursor",
            //   desc: "IDE IA pour coder plus vite",
            //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cursor/cursor-original.svg",
            // },
            {
              name: "Claude",
              desc: "Assistant IA Anthropic",
              src: Claude,
            },
          ].map(({ name, src, desc, filter }) => (
            <div className="Skill-item" key={name}>
              <img
                src={src}
                alt={name}
                style={filter ? { filter } : undefined}
              />
              <p>{name}</p>
              <span className="Skill-tooltip">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="Projects-title" id="projects">
        <h2>{t("projects.title")}</h2>
      </div>
      <section>
        <Projects />
      </section>

      <section className="About-2" id="about">
        <div className="About-left">
          <StickerGrid />
        </div>
        <div className="About-right">
          <div className="About-text">
            <h2 className="hero-title">
              {t("about2.who")}
              <em>{t("about2.who_accent")}</em>?
            </h2>
            <p>{t("about2.p1")}</p>
            <p>{t("about2.p2")}</p>
            <p>{t("about2.p3")}</p>
          </div>
        </div>
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
