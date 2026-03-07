export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-links">
        {["GitHub", "LinkedIn", "Twitter", "CV PDF"].map((l) => (
          <span key={l} className="footer-link">
            {l}
          </span>
        ))}
      </div>
      <div className="Footer-copy">© 2026 Developer — Tous droits réservés</div>
    </footer>
  );
}
