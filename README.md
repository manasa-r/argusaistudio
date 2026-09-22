# ARGUS AI Studio — AI Delivery Operating Model

A responsive Vue 3 + Vite website that presents ARGUS as an AI delivery operating model and demonstrates the thinking behind it from a Forward Deployed Engineering perspective.

## Project structure

```
argusaistudio/
├── index.html              # Vite entry HTML (loads fonts, mounts #app)
├── package.json
├── vite.config.js
├── src/
│   ├── main.js              # App bootstrap
│   ├── App.vue               # Content, interactions and page sections
│   └── style.css             # Design system and responsive styling
```

## Setup

Requires [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
```

## Development

Runs a local dev server with hot-reload at http://localhost:5173

```bash
npm run dev
```

## Build for production

Outputs a static site to the `dist/` folder.

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Before launch

- Replace `EMAIL_PLACEHOLDER`, `LINKEDIN_PLACEHOLDER` and `RESUME_PLACEHOLDER` in `src/App.vue`.
- Review sanitized capability stories before making them public.
- Add a downloadable CV only after removing private contact and employer-confidential information.

## Hosting

Since this builds to a static `dist/` folder, any static host works:

- **Vercel**: `npm install -g vercel` then run `vercel` in this folder (auto-detects Vite)
- **Netlify**: connect the repo, set build command `npm run build`, publish directory `dist`
- **GitHub Pages**: run `npm run build`, then push the contents of `dist/` to a `gh-pages` branch
- **Cloudflare Pages**: connect the repo, build command `npm run build`, output directory `dist`
