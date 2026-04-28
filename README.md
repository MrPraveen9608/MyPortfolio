# K. Praveen Portfolio

Modern personal portfolio built with React + Vite.

Live site: https://mrpraveen9608.github.io/MyPortfolio/

## Tech Stack

- React 18
- Vite 5
- Vanilla CSS

## Project Structure

- src/components: UI sections and reusable components
- src/hooks: custom hooks for reveal and countdown logic
- src/utils: shared utility helpers
- public: static files (resume and certificates)

## Local Development

Requirements:

- Node.js 18+
- npm 9+

Commands:

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Deployment

This repo is configured for GitHub Pages.

```bash
npm run deploy
```

Notes:

- Vite base path is set to /MyPortfolio/ in vite.config.js
- Asset links use import.meta.env.BASE_URL to work in local dev and production
