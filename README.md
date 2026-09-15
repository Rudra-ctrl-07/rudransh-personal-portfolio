# Rudransh Gujja — Personal Portfolio

[![CI](https://github.com/Rudra-ctrl-07/rudransh-personal-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Rudra-ctrl-07/rudransh-personal-portfolio/actions/workflows/ci.yml)

Personal portfolio website for Rudransh Gujja, deployed on Firebase Hosting. A single-page React app with sections for about, projects, hackathons, skills, certifications, and a contact form.

## Sections

- **Navbar / Hero / Footer** — layout chrome
- **About** — bio
- **Projects** — selected work
- **Hackathons** — participation and results
- **Skills** — technical skills
- **Certifications** — credentials
- **Contact** — contact form

## Tech stack

- React + TypeScript, Vite, Tailwind CSS
- Firebase Hosting for deployment (`.firebaserc` + `firebase.json` configured)

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

3. Deploy:

   ```bash
   npm run build
   firebase deploy
   ```

## Project structure

```
├── src/
│   ├── App.tsx           # Section composition
│   ├── components/       # Navbar, Hero, About, Projects, Hackathons,
│   │                     # Skills, Certifications, Contact, Footer
│   ├── types.ts          # Shared types
│   └── index.css         # Tailwind + custom styles
├── firebase.json         # Hosting config
└── .firebaserc           # Firebase project alias
```

## Status

- Deployed via Firebase Hosting (build cache in `.firebase/`)
- Template-based (Google AI Studio starter) with custom content; no tests, which is reasonable for a static portfolio
