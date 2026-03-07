import imageD from "../images/Image Test.png";
import CV from "../download/CV.pdf";

// IMPORT PAGE
import Contact from "./Contact";
import Projects from "./Projects";

export default function Home() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main>
      <section className="About" id="about">
        {/* *********************************** */}
        <div className="About-text">
          <p>// DEVELOPPEUR WEB JUNIOR - PARIS, FRANCE</p>
          <h1 className="hero-title">
            Je code des
            <br />
            <em>expériences</em>
            <br />
            web.
          </h1>
          <p>
            Passionné par le développement frontend et fullstack, je transforme
            des idées en interfaces élégantes et performantes. React, Node.js &
            au-delà.
          </p>

          <div className="About-buttons">
            <button
              className="btn-primary"
              onClick={() => scrollTo("projects")}
            >
              Voir mes projets →
            </button>
            <a className="btn-ghost" href={CV} download="CV">
              Télécharger CV
            </a>
          </div>
        </div>

        <div className="About-image">
          <img src={imageD} alt="Image de test" />
        </div>
      </section>

      <div className="Skills-title">
        <h2>Stack technique</h2>
      </div>
      <section className="Skills" id="skills">
        <div className="Skills-list">
          {[
            {
              name: "HTML",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            },
            {
              name: "CSS",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            },

            {
              name: "JavaScript",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            },
            {
              name: "Tailwind",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
            },
            {
              name: "React",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
              name: "React Native",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
              name: "Expo",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg",
            },
            {
              name: "Next.js",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            },
            {
              name: "Node.js",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            },
            {
              name: "Express",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            },
            {
              name: "MongoDB",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            },
            {
              name: "Netlify",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
            },
            {
              name: "Northflank",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/northflank/northflank-original.svg",
            },
            {
              name: "GitHub",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            },
            {
              name: "Stripe",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg",
            },
            {
              name: "Cloudinary",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudinary/cloudinary-original.svg",
            },
            {
              name: "Cursor",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cursor/cursor-original.svg",
            },
            {
              name: "Claude",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cursor/cursor-original.svg",
            },
          ].map(({ name, src }) => (
            <div className="Skill-item" key={name}>
              <img src={src} alt={name} />
              <p>{name}</p>
            </div>
          ))}
        </div>
      </section>

      <h2 className="Projects-title">Mes projets</h2>
      <section id="projects">
        <Projects />
      </section>

      <section id="about">
        <h2>A propos</h2>
        <div className="about-left">
          <h2 className="about-title">
            Qui suis-
            <em style={{ fontStyle: "normal", color: "var(--accent)" }}>
              je
            </em>{" "}
            ?
          </h2>
          <p className="about-text">
            Diplômé d'un Bachelor Développement Web en 2023, je suis passionné
            par la création d'interfaces qui allient performance technique et
            expérience utilisateur soignée.
          </p>
          <p className="about-text">
            Je m'épanouis dans les environnements collaboratifs, en mode agile,
            où la qualité du code et l'amélioration continue sont des priorités
            partagées.
          </p>
          <p className="about-text">
            En dehors du code : contributeur open source, design & typographie,
            escalade.
          </p>
        </div>
      </section>
      <section id="contact">
        {/* <h2>Contact</h2> */}

        <Contact />
      </section>
    </main>
  );
}
