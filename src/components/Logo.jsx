import logoSrc from "../images/Logo_Lines.svg";

export default function Logo({ height = 55 }) {
  return <img src={logoSrc} alt="Logo" height={height} />;
}
