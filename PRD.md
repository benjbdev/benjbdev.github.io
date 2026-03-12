# PRD — benjamin-bellantonio.com

**Personal Consulting Website — Principal Architect & Technology Advisor**

---

## 1. Overview

A single-page personal consulting website for **Benjamin Bellantonio**, hosted on GitHub Pages at `benjamin-bellantonio.com`, built with **Astro**. The site presents Benjamin's positioning as a Principal Architect & CTO Advisor, supports bilingual content (EN/FR), and includes a working contact form.

---

## 2. Goals

- Establish a credible, minimal, high-quality online presence for consulting/advisory work
- Clearly communicate value proposition to co-founders, CTOs, CXOs, and SME leaders at product companies
- Support French and English visitors without friction
- Enable prospects to reach out directly via a contact form
- Fully static, deployable on GitHub Pages with zero server dependency

---

## 3. Tech Stack

| Concern      | Choice                                       | Notes                                                        |
| ------------ | -------------------------------------------- | ------------------------------------------------------------ |
| Framework    | **Astro** (static output)                    | `output: 'static'`, deploy-ready for GH Pages                |
| Styling      | **Tailwind CSS**                             | Minimal utility-first, light mode only                       |
| Language     | TypeScript                                   | Strict mode                                                  |
| i18n         | Astro i18n routing                           | `/en/` and `/fr/` routes, default to browser language        |
| Contact Form | **Formspree** (free tier)                    | See section 7                                                |
| Hosting      | **GitHub Pages**                             | Custom domain `benjamin-bellantonio.com`                     |
| CI/CD        | GitHub Actions                               | `astro build` → deploy to `gh-pages` branch                  |
| Analytics    | **Umami** (free cloud tier)                  | Privacy-first, GDPR-compliant, no cookies, single script tag |
| Fonts        | Inter (sans) + JetBrains Mono (mono accents) | Via Fontsource                                               |

---

## 4. Design Principles

- **Minimalist** — generous whitespace, no decorative clutter
- **Tech-flavored** — subtle grid/dot background, monospace accents for labels/tags, code-style syntax for section markers
- **Light mode only** — no dark mode toggle
- **Typography-first** — content hierarchy through type scale, not heavy visuals
- **Responsive** — mobile-first, single breakpoint expansion (sm → full)
- **No animations except subtle fade-in on scroll** — nothing distracting

### Color Palette (tokens)

```
background #f5f5f0, surface #F8F8F8, text #1a1a1a, accent #2563EB (blue, used sparingly)
border: #e0e0e0
```

### Typography Scale

- Section label: `font-mono text-xs uppercase tracking-widest text-accent`
- Heading: `font-sans font-semibold text-3xl`
- Body: `font-sans text-base leading-relaxed text-muted`

---

## 5. Site Architecture

Single-page layout with anchor navigation. Astro pages under `/src/pages/[lang]/index.astro`.

```
/
├── public/
│   ├── favicon.svg
│   └── og-image.png
├── src/
│   ├── i18n/
│   │   ├── en.ts          # All English strings
│   │   └── fr.ts          # All French strings
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Services.astro
│   │   ├── Experience.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Base.astro
│   └── pages/
│       ├── index.astro    # Redirects to /en or /fr based on Accept-Language (meta redirect)
│       ├── en/
│       │   └── index.astro
│       └── fr/
│           └── index.astro
```

---

## 6. Page Sections

All sections use the same layout wrapper: full-width, max-w-3xl centered, vertical rhythm `py-24`.

### 6.1 Navigation

- Fixed top bar, minimal: Logo/name left, lang toggle right
- Smooth scroll anchors: About · Services · Experience · Contact
- On mobile: collapsed to icon menu

### 6.2 Hero

- Mono-style label: `// principal architect & technology advisor`
- H1: "Benjamin Bellantonio"
- Subtitle: 1–2 line positioning statement (see copy below)
- Two CTAs: **"See my services"** (scrolls to Services) + **"Get in touch"** (scrolls to Contact)
- Subtle animated terminal-blink cursor after the label

**EN copy:**

> I help product companies navigate critical architecture and platform decisions as their systems and teams evolve — not as a consultant who delivers reports and disappears, but as a senior technical partner.

**FR copy:**

> J'aide les sociétés produit à naviguer les décisions critiques d'architecture et de plateforme à mesure que leurs systèmes et équipes évoluent — pas comme un consultant qui remet un rapport et disparaît, mais comme un vrai partenaire technique senior.

### 6.3 About

- Mono label: `// about`
- Bio paragraph (from profile)
- "When companies reach out" — a compact list of trigger situations (see below)
- Key stats horizontal grid: `15+ years` / `Distributed Systems` / `AI Platforms` / `Remote-native`

**EN bio:**

> 15+ years designing and operating distributed systems in production. Most recently Director of Technology at CoachHub, acting as technical right-hand to the CPTO — owning architectural direction across core backend systems, leading cross-team system design, and shipping AIMY, an event-driven AI coaching platform, from zero to production in 6 months. Experience across early-stage startups through scale-ups in France, Malaysia, and internationally. Remote-native.

**EN "When companies reach out" list (render as compact bullet list or icon list):**

- Building fast and need architectural foundations that won't become a bottleneck at Series A
- Scaling fast and the architecture is starting to break under pressure
- Re-orging engineering and nobody agrees on service ownership or team boundaries
- Losing product velocity to accumulated technical debt
- A core architect just left and the team needs senior technical continuity
- Over-reliant on third-party vendors with no clear ownership or exit path
- Evaluating a major platform evolution — cloud migration, AI integration, microservices consolidation

**FR bio:**

> Plus de 15 ans à concevoir et opérer des systèmes distribués en production. Dernièrement Directeur Technique chez CoachHub, bras droit technique du CPTO — pilotant la direction architecturale des systèmes backend, animant la conception de systèmes transverses, et livrant AIMY, une plateforme de coaching IA event-driven, de zéro à la production en 6 mois. Expérience en startups early-stage et scale-ups en France, en Malaisie et à l'international. Remote-native.

_(FR "when companies reach out" list to be added in `fr.ts`)_

### 6.4 Services

- Mono label: `// services`
- 3 service cards in a grid (2-col on desktop, 1-col mobile for first two, last one full width or centered)
- Card style: bordered, surface bg, icon top, title, description

| Icon             | EN Title                           | EN Description                                                                                                                                                                                                                                               |
| ---------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `search`         | Architecture & Platform Assessment | A focused engagement (2–6 weeks) to diagnose architecture and platform health, identify highest-leverage problems, and produce a clear, prioritized action plan. Deliverable: a report and workshop your team can act on immediately.                        |
| `layers`         | Fractional Principal Architect     | Ongoing part-time engagement (up to 3 days/week) providing senior architectural guidance across system design, technical decision-making, engineering mentorship, and platform evolution. I embed with your leadership and senior engineers, not above them. |
| `arrow-up-right` | Platform Transformation Support    | Advisory and hands-on support during high-stakes platform initiatives: migrations, re-architectures, scaling initiatives, or post-acquisition integration. Scoped to the initiative.                                                                         |

_(FR translations to be added in `fr.ts`)_

### 6.5 Background

- Mono label: `// background`
- Short paragraph from profile (see bio in 6.3 — can reuse or trim)
- Single CTA link: **"View full profile on LinkedIn →"** pointing to `https://linkedin.com/in/benjamin-bellantonio`
- No timeline, no detailed history — keep it clean and redirect to LinkedIn

### 6.6 Contact

- Mono label: `// get in touch`
- Short intro text
- Two contact options side by side (or stacked on mobile):
  1. **Book a call** — button/link to Google Calendar booking URL (placeholder: `BOOK_CALL_URL`)
  2. **Send a message** — contact form below
- Form: Name, Email, Company (optional), Message, Submit button
- Success state: inline confirmation message (no page reload)
- Error state: field-level validation message
- Powered by Formspree (see section 7)

**EN intro:**

> Part-time, remote-first. On-site visits available for workshops and kickoffs. Typical engagement: 1 to 6 months, scoped to a clear outcome. Whether you're a co-founder, CTO, or executive navigating a technical inflection point — I'd be glad to hear from you.

**EN book a call label:** `Book a 30-min call`
**EN book a call subtext:** `Pick a time that works for you — no commitment.`

**FR intro:**

> Temps partiel, remote-first. Déplacements possibles pour workshops et kickoffs. Engagement typique : 1 à 6 mois, cadré sur un résultat précis. Co-fondateur, CTO, ou dirigeant face à un point d'inflexion technique — je serai ravi d'échanger avec vous.

**FR book a call label:** `Réserver un appel de 30 min`
**FR book a call subtext:** `Choisissez un créneau — sans engagement.`

> ⚠️ **Note for Claude Code:** The booking URL is stored as `PUBLIC_BOOK_CALL_URL` in `.env`. Use `import.meta.env.PUBLIC_BOOK_CALL_URL` in the component. Render the button as a plain `<a href>` target `_blank` — no JS needed.

### 6.7 Footer

- Minimal single line: `© 2025 Benjamin Bellantonio · LinkedIn · GitHub`
- LinkedIn and GitHub as icon links (no text labels)

---

## 7. Contact Form — Provider Decision

### ✅ Recommended: **Formspree** (Free tier)

**Why Formspree:**

- Works natively with static sites / Astro + GitHub Pages — no server needed
- Free tier: 50 submissions/month (more than sufficient for a consulting site)
- Submissions delivered directly to email
- AJAX submission supported → no redirect, inline success/error handling
- GDPR-friendly, no ads, simple setup (one `<form action="https://formspree.io/f/YOUR_ID">`)
- Well-documented Astro integration

**Setup steps (for Claude Code to implement):**

1. Create account at [formspree.io](https://formspree.io)
2. Create a new form → copy the endpoint ID (e.g. `xpwzabcd`)
3. Store endpoint in `.env`: `PUBLIC_FORMSPREE_ID=xpwzabcd`
4. Reference in Astro: `import.meta.env.PUBLIC_FORMSPREE_ID`
5. Submit via `fetch` POST with `Content-Type: application/json` and `Accept: application/json`

**Alternatives considered:**

| Provider         | Free Tier | Notes                                                 |
| ---------------- | --------- | ----------------------------------------------------- |
| **Formspree** ✅ | 50/mo     | Best balance of simplicity + control                  |
| Web3Forms        | 250/mo    | No account needed, very simple, slightly less control |
| Getform          | 10/mo     | Too restrictive on free tier                          |
| Netlify Forms    | N/A       | Requires Netlify hosting — not applicable here        |

> **Secondary recommendation:** If 50/month ever becomes a constraint, **Web3Forms** is the simplest upgrade with a generous free tier and zero account setup.

---

## 8. i18n Strategy

- Two route prefixes: `/en/` and `/fr/`
- Root `/` does a `<meta http-equiv="refresh">` redirect based on `navigator.language` via a tiny inline script (no JS framework required)
- All UI strings in `src/i18n/en.ts` and `src/i18n/fr.ts`
- Language toggle in Nav persists choice in `localStorage` and navigates between `/en/` and `/fr/`
- `hreflang` meta tags in `<head>` for SEO

> **Note:** All website copy (headings, body text, labels, CTAs, etc.) is managed exclusively in `src/i18n/en.ts` and `src/i18n/fr.ts`. The copy in this PRD serves as the source of truth for the initial content, but the translation files are the authoritative source once the site is built.

---

## 9. SEO & Meta

- Title: `Benjamin Bellantonio — Principal Architect & Technology Advisor`
- Description: bilingual (per lang)
- OG image: `og-image.png` — simple dark background, name + title in white type
- Canonical URL per language
- `robots.txt` and `sitemap.xml` generated by `@astrojs/sitemap`

---

## 10. GitHub Pages Deployment

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run build
        env:
          PUBLIC_FORMSPREE_ID: ${{ secrets.FORMSPREE_ID }}
          PUBLIC_BOOK_CALL_URL: ${{ secrets.BOOK_CALL_URL }}
          PUBLIC_UMAMI_WEBSITE_ID: ${{ secrets.UMAMI_WEBSITE_ID }}
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

**Custom domain setup:**

- Add `CNAME` file to `public/` containing `benjamin-bellantonio.com`
- Configure DNS: A records pointing to GitHub Pages IPs, or CNAME for `www`
- Enable HTTPS in repository Settings → Pages

**Astro config for GitHub Pages:**

```js
// astro.config.mjs
export default defineConfig({
  site: "https://benjamin-bellantonio.com",
  output: "static",
  integrations: [tailwind(), sitemap()],
});
```

---

## 11. Analytics

**Provider: [Umami](https://umami.is)** — free cloud tier, open source, GDPR-compliant, no cookie banner required.

Add to `Base.astro` layout inside `<head>`:

```astro
<script
  defer
  src="https://cloud.umami.is/script.js"
  data-website-id={import.meta.env.PUBLIC_UMAMI_WEBSITE_ID}
></script>
```

Store the website ID in `.env`:

```
PUBLIC_UMAMI_WEBSITE_ID=your-umami-website-id
```

And add to GitHub Actions:

```yaml
PUBLIC_UMAMI_WEBSITE_ID: ${{ secrets.UMAMI_WEBSITE_ID }}
```

**Setup steps (after deploying the site):**

1. Create a free account at [cloud.umami.is](https://cloud.umami.is)
2. Add website → copy the Website ID
3. Add as GitHub repo secret `UMAMI_WEBSITE_ID`
4. Redeploy — analytics will start tracking immediately

> ⚠️ **Note for Claude Code:** If `PUBLIC_UMAMI_WEBSITE_ID` is empty or undefined, omit the script tag entirely to avoid errors in local dev.

---

## 12. Out of Scope (v1)

- Blog or articles section
- Case studies / portfolio pages
- CMS integration
- Analytics (can add Plausible/Fathom in v2 via script tag)
- Booking/calendar integration

---

## 13. Acceptance Criteria

- [ ] Site builds cleanly with `astro build` and zero warnings
- [ ] Both `/en/` and `/fr/` routes render correctly with translated content
- [ ] Language toggle works and persists across reload
- [ ] Contact form submits successfully via Formspree and shows inline confirmation
- [ ] Contact form validates required fields client-side before submission
- [ ] Lighthouse score ≥ 95 on Performance, Accessibility, SEO
- [ ] Site is accessible at `benjamin-bellantonio.com` with HTTPS
- [ ] `og:image`, `description`, and `hreflang` meta tags present and correct
- [ ] Mobile layout renders correctly on 375px viewport

---

_Last updated: March 2026_
