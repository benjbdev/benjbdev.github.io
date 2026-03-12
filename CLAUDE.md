# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Dev server at localhost:4321
npm run build      # Production build to ./dist/
npm run preview    # Preview production build
```

No test suite. Use `astro check` via `npm run astro -- check` for TypeScript diagnostics.

## Architecture

Personal consulting website for Benjamin Bellantonio. Single-page layout deployed as fully static output to GitHub Pages at `benjamin-bellantonio.com`.

**Stack:** Astro 6 · Tailwind CSS v4 via `@tailwindcss/vite` (NOT `@astrojs/tailwind`) · TypeScript

**Routing:** Two localized pages (`/en/`, `/fr/`). The root `/` contains an inline script that redirects based on `localStorage('lang')` then `navigator.language`, with a `<meta http-equiv="refresh">` fallback to `/en/`.

**i18n:** All UI strings live in `src/i18n/en.ts` and `src/i18n/fr.ts`. Components receive a `lang` prop and call `useTranslations(lang)` from `src/i18n/index.ts` to get the correct string map. When adding copy, update both locale files.

**Content policy:** Do NOT modify existing website copy (text, labels, CTAs, bio, etc.) in the translation files unless the user explicitly asks for a content change. Only touch content when directly instructed.

**Layout:** `src/layouts/Base.astro` is the HTML shell — handles fonts, meta tags (`hreflang`, OG, canonical), Umami analytics (omitted if `PUBLIC_UMAMI_WEBSITE_ID` is empty), and scroll-triggered fade-in via `IntersectionObserver`.

**Scroll animations:** Add `class="fade-in-hidden"` to any element; the observer in `Base.astro` swaps it to `fade-in-visible` when it enters the viewport.

## Design tokens

```
bg #f5f5f0  text #1a1a1a  surface #F8F8F8
border-[#e0e0e0]
Accent: #2563eb (blue — used sparingly in links/CTAs)
```

Fonts: `font-sans` → Inter, `font-mono` → JetBrains Mono, `font-script` → Dancing Script (defined in `global.css` `@theme`).

Section labels use `font-mono text-xs uppercase tracking-widest`.

## Env vars

```
PUBLIC_FORMSPREE_ID       # Formspree form endpoint ID
PUBLIC_BOOK_CALL_URL      # Google Calendar booking URL
PUBLIC_UMAMI_WEBSITE_ID   # Umami analytics (optional; script omitted if empty)
```

Reference in Astro components via `import.meta.env.PUBLIC_*`. These are set as GitHub Actions secrets and injected during CI build (see `.github/workflows/deploy.yml`).

## Deployment

Push to `main` → GitHub Actions runs `astro build` → deploys `./dist/` to `gh-pages` branch via `peaceiris/actions-gh-pages@v4`.
