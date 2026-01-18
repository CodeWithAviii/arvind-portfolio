# Arvind Kumar — 3D Portfolio (React + Three.js)

A modern, animated 3D portfolio built with React, Vite, Tailwind CSS, Framer Motion, and @react-three/fiber (Three.js).

## Tech Stack
- React 18, Vite
- Tailwind CSS
- Framer Motion (animations)
- Three.js via @react-three/fiber + @react-three/drei
- Modern, responsive, accessible UI

## Quickstart

```bash
npm i
npm run dev
```

Build for production:

```bash
npm run build && npm run preview
```

## Customize

- Replace `/public/resume/Arvind_Kumar_CV.txt` with your PDF named **Arvind_Kumar_CV.pdf**.
- Update data in `src/data/*.js`.
- Change email in `src/components/Contact.jsx`.
- Tweak 3D scene in `src/components/canvas/Scene.jsx`.
- Add project links in `src/data/projects.js`.

## Folder Structure

```
arvind-3d-portfolio/
├─ public/
│  ├─ favicon.svg
│  └─ resume/
│     └─ Arvind_Kumar_CV.pdf  (add your real CV here)
├─ src/
│  ├─ components/
│  │  ├─ canvas/Scene.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ Hero.jsx
│  │  ├─ About.jsx
│  │  ├─ Projects.jsx
│  │  ├─ ProjectCard.jsx
│  │  ├─ Experience.jsx
│  │  ├─ Education.jsx
│  │  ├─ Contact.jsx
│  │  ├─ Timeline.jsx
│  │  └─ SectionHeader.jsx
│  ├─ data/
│  │  ├─ projects.js
│  │  ├─ experience.js
│  │  └─ education.js
│  ├─ hooks/useScrollTo.js
│  ├─ styles/index.css
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
├─ tailwind.config.js
├─ postcss.config.js
├─ vite.config.js
├─ package.json
└─ README.md
```

---

**Note:** If you want to load a GLTF/GLB model, add it into `/public/models` and import with `useGLTF` from `@react-three/drei` inside `Scene.jsx`.
