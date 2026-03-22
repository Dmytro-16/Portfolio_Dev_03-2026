import { useEffect, useState } from "react";
import Moon from "../images/moon.svg";
import Sun from "../images/sun.svg";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light",
    );
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle theme"
    >
      {dark ? <img src={Sun} alt="Sun" /> : <img src={Moon} alt="Moon" />}
    </button>
  );
}
