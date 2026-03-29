import MarvelImg from "../images/Marvel.png";

const projects = [
  {
    key: "marvel",
    img: MarvelImg,
    link: "https://sitemarv.netlify.app/",
    title: "Marvel Site , replique d'un site vitrine",
    desc: "Site vitrine dédié à l'univers Marvel — exploration des personnages, favoris et authentification.",
    stack: [
      "React 19",
      "React Router 7",
      "Axios",
      "Vite",
      "CSS",
      "Node.js / Express",
    ],
  },
  {
    key: "project2",
    img: null,
    link: null,
    title: "Projet 2",
    desc: "En cours de développement.",
    stack: ["À définir"],
  },
  {
    key: "project3",
    img: null,
    link: null,
    title: "Projet 3",
    desc: "En cours de développement.",
    stack: ["À définir"],
  },
];

export default function Projects() {
  return (
    <div className="Projects-list">
      {projects.map((p) => {
        const content = (
          <>
            <div className="Project-img-wrapper">
              {p.img ? (
                <img src={p.img} alt={p.title} className="Project-img" />
              ) : (
                <div className="Project-img Project-img--placeholder" />
              )}
            </div>
            <div className="Project-info">
              <h3 className="Project-title">{p.title}</h3>
              <p className="Project-desc">{p.desc}</p>
              <div className="Project-stack">
                {p.stack.map((s) => (
                  <span key={s} className="Project-tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </>
        );

        return p.link ? (
          <a
            key={p.key}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="Project-card"
          >
            {content}
          </a>
        ) : (
          <div key={p.key} className="Project-card Project-card--wip">
            {content}
          </div>
        );
      })}
    </div>
  );
}
