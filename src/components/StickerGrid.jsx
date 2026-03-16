import { useRef, useEffect, useState } from "react";
import sheetImg from "../images/stickers_sheet.png";

const STICKERS = [
  { col: 0, row: 0, alt: "smile", rot: -6 },
  { col: 1, row: 0, alt: "lol",   rot: 2  },
  { col: 2, row: 0, alt: "cool",  rot: -3 },
  { col: 0, row: 1, alt: "wink",  rot: 7  },
  { col: 1, row: 1, alt: "party", rot: -5 },
  { col: 2, row: 1, alt: "shocked", rot: 3 },
];

function Sticker({ data, image }) {
  const canvasRef = useRef(null);

  const sw = image ? image.width / 3 : 1;
  const sh = image ? image.height / 2 : 1;

  useEffect(() => {
    if (!image || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, sw, sh);
    ctx.drawImage(image, data.col * sw, data.row * sh, sw, sh, 0, 0, sw, sh);
  }, [image, data, sw, sh]);

  return (
    <canvas
      ref={canvasRef}
      width={sw}
      height={sh}
      style={{ transform: `rotate(${data.rot}deg)`, width: "110px", height: "auto" }}
      aria-label={data.alt}
    />
  );
}

export default function StickerGrid() {
  const [loadedImage, setLoadedImage] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = sheetImg;
    img.onload = () => setLoadedImage(img);
  }, []);

  return (
    <div className="sticker-grid">
      {STICKERS.map((s) => (
        <Sticker key={s.alt} data={s} image={loadedImage} />
      ))}
    </div>
  );
}
