import { useTranslation } from "react-i18next";
import MarvelImg from "../images/Marvel.png";
import P2Img1 from "../images/Screen1.jpg";
import P2Img2 from "../images/Screen2.jpg";
import P2Img3 from "../images/Screen3.jpg";
import P2Img4 from "../images/Screen4.jpg";

const projects = [
  {
    key: "marvel",
    img: MarvelImg,
    link: "https://sitemarv.netlify.app/",
    stack: [
      "HTML",
      "JavaScript",
      "React 19",
      "React Router 7",
      "CSS",
      "Node.js / Express",
      "Axios",
      "Vite",
      "MongoDB",
      
    ],
  },
  {
    key: "AiRB_REP_APP",
    link: "https://github.com/Dmytro-16/AiRB_REP_APP",
    images: [P2Img1, P2Img2, P2Img3, P2Img4],
    stack: ["React 19", "React Native", "Expo", "React Router 7", "Axios", "Vite", "CSS", "Node.js / Express"],
  },
  {
    key: "project3",
    img: null,
    link: null,
    stack: ["À définir"],
  },
];

export default function Projects() {
  const { t } = useTranslation();

  return (
    <div className="Projects-list">
      {projects.map((p) => {
        const title = t(`projects.items.${p.key}.title`);
        const desc = t(`projects.items.${p.key}.desc`);

        const content = (
          <>
            <div className="Project-img-wrapper">
              {Array.isArray(p.images) && p.images.length > 0 ? (
                <div className="Project-img-grid">
                  {p.images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${title} — aperçu ${i + 1}`}
                      className="Project-img Project-img--thumb"
                    />
                  ))}
                </div>
              ) : p.img ? (
                <img src={p.img} alt={title} className="Project-img" />
              ) : (
                <div className="Project-img Project-img--placeholder" />
              )}
            </div>
            <div className="Project-info">
              <div className="Project-text">
                <h3 className="Project-title">{title}</h3>
                <p className="Project-desc">{desc}</p>
              </div>
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
