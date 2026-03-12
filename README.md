# benjamin-bellantonio.com

Personal consulting website for Benjamin Bellantonio. Statically deployed to GitHub Pages.

**Stack:** Astro 6 · Tailwind CSS v4 · TypeScript · i18n (en/fr)

## Commands

```sh
npm run dev       # Dev server at localhost:4321
npm run build     # Production build to ./dist/
npm run preview   # Preview production build
npm run astro -- check  # TypeScript diagnostics
```

## Deployment

Push to `main` → GitHub Actions builds and deploys to `gh-pages` branch → live at `benjamin-bellantonio.com`.
