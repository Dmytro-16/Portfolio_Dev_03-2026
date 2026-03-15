# Portfolio — Dmytro Semenchuk

Portfolio personnel de **Dmytro Semenchuk**, développeur web junior basé à Paris, France.

## Aperçu

Site vitrine mono-page (SPA) présentant mes compétences, projets et mes informations de contact. Disponible en 3 langues avec support des thèmes clair/sombre.

**Live :** [dsdeveloper.fr](https://dsdeveloper.fr) · **Email :** dsemenchuk@dsdeveloper.fr

---

## Stack technique

| Catégorie | Technologies |
|-----------|-------------|
| Framework | React 19, Vite 7 |
| Routing | React Router v7 |
| i18n | i18next, react-i18next |
| Email | EmailJS |
| Styling | CSS3 custom (thème dark/light) |
| Linting | ESLint 9 |
| Déploiement | Netlify |

---

## Fonctionnalités

- **Multi-langue** — Français (défaut), Anglais, Russe avec persistance localStorage
- **Thème dark/light** — bascule avec persistance localStorage
- **Formulaire de contact** — envoi d'email via EmailJS + auto-réponse à l'utilisateur
- **Navigation responsive** — menu hamburger sur mobile
- **CV téléchargeable** — PDF disponible directement depuis le header

---

## Pages & sections

- **Hero** — titre, tag, boutons vers les projets et le CV
- **Stack** — 18 technologies (HTML, CSS, JS, React, Node.js, MongoDB, Next.js, Tailwind, Stripe, Cloudinary...)
- **Projets** — showcase des réalisations
- **À propos** — parcours, formation (Bachelor Développement Web 2023), centres d'intérêt
- **Contact** — formulaire avec validation et notification de succès/erreur

---

## Installation

```bash
git clone https://github.com/Dmytro-16/Portfolio_Dev_03-2026.git
cd Portfolio_Dev_03-2026/dev
npm install
```

Créer un fichier `.env` à la racine de `dev/` :

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID=your_autoreply_template_id
```

```bash
npm run dev
```

---

## Scripts

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run preview  # Prévisualiser le build
npm run lint     # Linter ESLint
```

---

© 2026 dsdeveloper — Tous droits réservés
