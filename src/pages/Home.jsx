import { useTranslation } from "react-i18next";
import CV from "../download/CV_SEMENCHUK_Dmytro.pdf";
import North from "../images/North.png";
import Stripe from "../images/Stripe.svg";
import Clou from "../images/Clou.png";
import Claude from "../images/Claude.png";
import LineS from "../images/Logo_Lines_S.svg";

// IMPORT PAGE
import Contact from "./Contact";
import Projects from "./Projects";
import StickerGrid from "../components/StickerGrid";
import CodeCard from "../components/CodeCard";

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
              <a className="btn-ghost" href={CV} download="CV_SEMENCHUK_Dmytro">
                {t("hero.btn_cv")}
              </a>
            </div>
          </div>
        </div>

        <div className="About-image">
          <CodeCard />
        </div>
      </section>

      <div className="Skills-title" id="skills">
        <h2>{t("skills.title")}</h2>
        {/* <img src={LineS} alt="Image de test" /> */}
      </div>
      <section className="Skills">
        <div className="Skills-list">
          {[
            {
              name: "HTML",
              desc: t("skills.desc.html"),
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            },
            {
              name: "CSS",
              desc: t("skills.desc.css"),
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            },
            {
              name: "JavaScript",
              desc: t("skills.desc.js"),
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            },
            {
              name: "React",
              desc: t("skills.desc.react"),
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
              name: "React Native",
              desc: t("skills.desc.reactnative"),
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              filter: "hue-rotate(60deg) brightness(0.7) saturate(1.5)",
            },
            {
              name: "Expo",
              desc: t("skills.desc.expo"),
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg",
              darkInvert: true,
            },
            {
              name: "Next.js",
              desc: t("skills.desc.nextjs"),
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
              darkInvert: true,
            },
            {
              name: "Node.js",
              desc: t("skills.desc.nodejs"),
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            },
            {
              name: "Express",
              desc: t("skills.desc.express"),
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
              darkInvert: true,
            },
            {
              name: "MongoDB",
              desc: t("skills.desc.mongodb"),
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            },
            {
              name: "Netlify",
              desc: t("skills.desc.netlify"),
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
            },
            {
              name: "Northflank",
              desc: t("skills.desc.northflank"),
              src: North,
            },
            {
              name: "GitHub",
              desc: t("skills.desc.github"),
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
              darkInvert: true,
            },
            { name: "Git", desc: t("skills.desc.git"), src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "Stripe", desc: t("skills.desc.stripe"), src: Stripe },
            {
              name: "Cloudinary",
              desc: t("skills.desc.cloudinary"),
              src: Clou,
            },
            { name: "Claude", desc: t("skills.desc.claude"), src: Claude },
          ].map(({ name, src, desc, filter, darkInvert }) => (
            <div className="Skill-item" key={name}>
              <img
                src={src}
                alt={name}
                className={darkInvert ? "dark-invert" : undefined}
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
      <section className="Projects">
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
