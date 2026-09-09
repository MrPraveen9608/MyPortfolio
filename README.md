# K. Praveen Portfolio (Next.js)

Redesigned personal portfolio built with Next.js and deployed on Vercel.

## Tech Stack

- Next.js 14
- React 18
- Vanilla CSS
- GitHub Actions (auto deployment)
- Vercel

## Local Development

Requirements:

- Node.js 20+
- npm 9+

Commands:

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run start
```

## Automatic Vercel Deployment via GitHub Actions

This repository includes `.github/workflows/vercel-deploy.yml` that:

- deploys **preview** environments for pull requests
- deploys **production** on push to `main`

### 1) Create and link Vercel project

1. Login to Vercel and import this GitHub repository.
2. Run this once locally in the repo root:

```bash
npx vercel link
```

This links the project and gives you the values needed for workflow secrets.

### 2) Add required GitHub repository secrets

Go to: `GitHub Repo -> Settings -> Secrets and variables -> Actions`

Add these secrets:

- `VERCEL_TOKEN` (from Vercel account settings)
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

> `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` can be copied from `.vercel/project.json` after `vercel link`.

### 3) Push to trigger deployment

- Open a PR to get a preview deployment.
- Merge/push to `main` for production deployment.

The workflow automatically posts preview URLs in pull request comments.

## Static Assets

Resume and certificate PDFs are served from `/public`.
