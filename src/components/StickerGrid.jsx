import img01 from "../images/01_coding.png";
import img02 from "../images/02_bug_404.png";
import img05 from "../images/05_coffee.png";
import img06 from "../images/06_gitflow.png";
import img07 from "../images/07_deployed.png";
import img08 from "../images/08_devops.png";
import imgC from "../images/IMG_C.png";

const LEFT = [
  { src: img01, alt: "coding", rot: -6 },
  { src: img02, alt: "bug 404", rot: 2 },
  { src: img05, alt: "coffee", rot: -5 },
];

const RIGHT = [
  { src: img06, alt: "gitflow", rot: 3 },
  { src: img07, alt: "deployed", rot: -4 },
  { src: img08, alt: "devops", rot: 5 },
];

export default function StickerGrid() {
  return (
    <div className="sticker-grid-center">
      <div className="sticker-col">
        {LEFT.map((s) => (
          <img
            key={s.alt}
            src={s.src}
            alt={s.alt}
            style={{
              width: "100px",
              height: "auto",
              transform: `rotate(${s.rot}deg)`,
            }}
          />
        ))}
      </div>

      <img
        src={imgC}
        alt="avatar"
        className="sticker-main"
        style={{ width: "300px", height: "500px" }}
      />

      <div className="sticker-col">
        {RIGHT.map((s) => (
          <img
            key={s.alt}
            src={s.src}
            alt={s.alt}
            style={{
              width: "100px",
              height: "auto",
              transform: `rotate(${s.rot}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
