# Argus AI Studio

A Vue 3 + Vite rebuild of the Argus AI Studio landing page.

## Project structure

```
argus-ai-studio-vue/
├── index.html              # Vite entry HTML (loads fonts, mounts #app)
├── package.json
├── vite.config.js
├── src/
│   ├── main.js              # App bootstrap
│   ├── App.vue               # Root component, assembles sections
│   ├── style.css             # Design tokens + global styles
│   └── components/
│       ├── TheHeader.vue
│       ├── HeroSection.vue
│       ├── ToolsSection.vue      # tools list is data-driven — edit the array
│       ├── AboutSection.vue      # founders list is data-driven — edit the array
│       ├── ContactSection.vue    # contact links are data-driven — edit the array
│       └── TheFooter.vue
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

## Editing content

- **Tools**: edit the `tools` array in `src/components/ToolsSection.vue`
- **Founders**: edit the `founders` array in `src/components/AboutSection.vue`
- **Contact links**: edit the `contacts` array in `src/components/ContactSection.vue`
- **Colors/fonts**: edit the CSS variables at the top of `src/style.css`

Placeholder emails, LinkedIn, and GitHub links use `argusaistudio.com` /
`argusaistudio` — swap these for your real ones before launch.

## Hosting

Since this builds to a static `dist/` folder, any static host works:

- **Vercel**: `npm install -g vercel` then run `vercel` in this folder (auto-detects Vite)
- **Netlify**: connect the repo, set build command `npm run build`, publish directory `dist`
- **GitHub Pages**: run `npm run build`, then push the contents of `dist/` to a `gh-pages` branch
- **Cloudflare Pages**: connect the repo, build command `npm run build`, output directory `dist`
