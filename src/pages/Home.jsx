import imageD from "../images/Image Test.png";
import CV from "../download/CV.pdf";

export default function Home() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main>
      <section className="About" id="about">
        {/* *********************************** */}
        <div className="About-text">
          <p>// DEVELOPPEUR WEB JUNIOT - PARIS, FRANCE</p>
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

      <section className="Skills" id="skills">
        <h2>Stack technique</h2>
        <div className="Skills-list">
          <div className="Skill-item">
            <img src={imageD} alt="Image de test" />
            <p>React</p>
          </div>
          <div className="Skill-item">
            <img src={imageD} alt="Image de test" />
            <p>Node.js</p>
          </div>
          <div className="Skill-item">
            <img src={imageD} alt="Image de test" />
            <p>PHP</p>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2>Projets</h2>
      </section>

      <section id="contact">
        <h2>Contact</h2>
      </section>
    </main>
  );
}
