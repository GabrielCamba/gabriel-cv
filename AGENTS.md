# AGENTS.md — IT Candidate CV Site

This file is the source of truth for anyone (human or AI agent) working on this project.

## Project goal

Build a fast, accessible, single-page CV/portfolio site for an IT candidate. The design should feel **professional first, techie second**: clean typography, strong hierarchy, restrained motion, and subtle developer-themed details. It should work as a public CV link and as a printable PDF.

## Product principles

1. **Credibility over gimmicks.** No fake terminals, skill bars, or buzzword walls. Every visual flourish must support readability.
2. **Content is the product.** Roles, impact, and projects should be easy to scan in under 60 seconds.
3. **Static-first.** Prefer server-rendered/static content. Avoid a database unless a feature truly requires one.
4. **Accessible by default.** WCAG 2.2 AA contrast, keyboard navigation, visible focus states, semantic HTML, and reduced-motion support.
5. **Fast on mobile.** Target Lighthouse performance/accessibility/SEO ≥ 95.
6. **Easy to update.** CV content lives in typed local files, not buried in JSX.

## Recommended stack

| Area | Choice | Why |
| --- | --- | --- |
| Framework | **Next.js (App Router) + React + TypeScript** | Static rendering, metadata/OG image support, great Vercel integration |
| Styling | **Tailwind CSS v4** | Fast, consistent design tokens and responsive layout |
| Animation | **`motion`** (formerly Framer Motion) | Small, polished entrance/hover animations with reduced-motion support |
| Content | **Typed TypeScript data** | Easy edits and type safety; MDX case studies can be added later if needed |
| Icons | **lucide-react** | Consistent, lightweight icon set |
| Theme | **next-themes** | Dark mode by default with a light-mode toggle |
| Fonts | **Geist Sans + Geist Mono** via `next/font` | Professional with a developer edge; no layout shift |
| Forms | **mailto + copy-email button** by default; optional Resend server action | Keeps the site static and spam-resistant |
| Analytics | **Vercel Analytics** (optional, privacy-friendly) | Minimal traffic insight without cookie banners |
| Testing | **Vitest + React Testing Library + Playwright** | Unit, component, and smoke tests |
| Quality | **ESLint + Prettier + `tsc --noEmit`** | Consistent code and type safety |
| CI/CD | **GitHub Actions + Vercel** | Preview deployments per PR and production on `main` |

### Runtime and package manager

- Node.js **22 LTS**
- npm (use the committed `package-lock.json`; do not mix package managers)

### Commands (target state)

```bash
npm install          # install dependencies
npm run dev          # local development at http://localhost:3000
npm run lint         # ESLint
npm run typecheck    # tsc --noEmit
npm run test         # Vitest content checks
npm run test:e2e     # Playwright smoke + axe tests
npm run build        # production build
npm run start        # run the production build locally
```

Before the first browser test run: `npx playwright install chromium`.

## Deployment options

| Platform | Best for | Notes |
| --- | --- | --- |
| **Vercel (recommended)** | Next.js sites | Zero-config, PR previews, edge CDN, analytics, custom domains |
| **Netlify** | Static/Next.js sites | Strong CI and forms; slightly more config for Next.js features |
| **Cloudflare Pages** | Global static performance | Excellent CDN; Next.js support is good but less turnkey |
| **GitHub Pages** | Free simple static hosting | Requires static export; no server actions or preview deploys |

**Decision:** deploy to **Vercel**, with the repository connected to GitHub. Production deploys from `main`; every pull request gets a preview URL.

## Site structure

Single page with anchored sections:

1. **Header / nav** — initials or name, section links, theme toggle, “Download CV” button. Sticky, translucent, collapses to a mobile menu.
2. **Hero** — name, target role, one-line value proposition, location/availability, primary CTAs (Email, LinkedIn, GitHub), and a compact “terminal card” or code snippet as the techie visual.
3. **Proof strip** — 3–4 quick facts: years of experience, core stack, notable companies/domains, certifications.
4. **About** — 2–3 short paragraphs: what the candidate does, strongest domains, and current focus.
5. **Experience** — reverse-chronological timeline. Each role: company, title, dates, location, 2–4 achievement bullets with measurable impact.
6. **Selected projects** — 3–5 cards with problem, approach, stack, outcome, and links (live demo or repo). Long-form MDX case studies are optional and not part of the current build.
7. **Skills** — grouped tags: languages, frameworks, cloud/DevOps, data, testing, tools. No percentage bars.
8. **Education & certifications** — concise list with dates and credential links.
9. **Contact / footer** — email, LinkedIn, GitHub, location/timezone, and a short availability note.
10. **Print view** — clean black-on-white layout triggered by “Download CV” (`window.print()`), hiding nav and interactive-only elements.

## Content model

Create `content/cv.ts` as the single source of truth:

```ts
export type Experience = {
  company: string;
  role: string;
  start: string;          // e.g. "2022-03"
  end: string | "Present";
  location: string;
  summary?: string;
  highlights: string[];   // measurable achievements
  stack?: string[];
  url?: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  year: string;
  stack: string[];
  highlights: string[];
  repoUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Education = {
  school: string;
  degree: string;
  year: string;
  note?: string;
  url?: string;
};

export type Talk = {
  title: string;
  context: string;
  description: string;
  href?: string;
};

export type CV = {
  name: string;
  headline: string;
  summary: string;
  location: string;
  availability: string;
  email: string;
  links: { label: string; url: string }[];
  experience: Experience[];
  projects: Project[];
  speaking: Talk[];
  skills: SkillGroup[];
  education: Education[];
  languages: string[];
};
```

Project data currently lives in `content/cv.ts`. If long-form case studies are added later, use `@next/mdx` and `remark-gfm` with `content/projects/<slug>.mdx`.

## Design system

### Theme

- **Default:** dark.
- **Dark palette:** background `#0B0F14`, surface `#111820`, elevated `#18222D`, text `#E6EDF3`, muted `#8B98A5`, border `#243140`, accent `#22D3EE` (cyan), accent-soft `rgba(34, 211, 238, 0.12)`.
- **Light palette:** background `#F8FAFC`, surface `#FFFFFF`, text `#0F172A`, muted `#475569`, border `#E2E8F0`, accent `#0E7490`.
- Use **one accent color**. Avoid rainbow gradients and neon overload.
- All colors must be defined as CSS variables / Tailwind theme tokens. No hard-coded hex values inside components.

### Typography

- **Sans:** Geist Sans for body and headings.
- **Mono:** Geist Mono for labels, dates, stack tags, and small technical details.
- Scale: hero name `clamp(2.5rem, 6vw, 4.5rem)`, section titles `clamp(1.75rem, 3vw, 2.5rem)`, body `1rem`/`1.7`.
- Headings use tight tracking; body text stays highly readable.

### Layout

- Max content width: `1120px`.
- 12-column grid on desktop; single column on mobile.
- Section spacing: `5rem` mobile, `7rem` desktop.
- Border radius: `12px` cards, `8px` buttons, `999px` pills.
- Use a subtle dotted-grid or radial glow background in the hero only.

### Motion

- Entrance: `opacity 0 → 1`, `translateY(12px → 0)`, `300–500ms`, stagger `60ms`.
- Hover: cards lift `2px` and border brightens; buttons shift `1px`.
- Respect `prefers-reduced-motion: reduce` and disable non-essential animation.
- No autoplaying video, parallax, or long scroll hijacking.

### Techie details (use sparingly)

- Monospace section labels like `01 // EXPERIENCE`.
- A compact terminal-style card in the hero showing a short JSON or shell snippet with the candidate’s profile.
- Availability badge with a pulsing dot.
- Subtle code-comment styling for metadata (location, timezone, clearance).
- Keyboard shortcut hint for theme toggle is optional; do not make it required.

## Accessibility requirements

- Semantic landmarks: `header`, `nav`, `main`, `section`, `footer`.
- One `h1`; logical heading order.
- All interactive elements reachable by keyboard with visible `:focus-visible` styles.
- Icon-only buttons need `aria-label`.
- Maintain WCAG AA contrast in both themes.
- Respect reduced motion and `prefers-color-scheme` on first load.
- Test with axe and keyboard-only navigation.

## SEO and metadata

- `metadata` export with title, description, canonical URL, Open Graph, and Twitter cards.
- Dynamic OG image via `app/opengraph-image.tsx` using `next/og`.
- `Person` JSON-LD structured data.
- `app/sitemap.ts` and `app/robots.ts`.
- Set `NEXT_PUBLIC_SITE_URL` in Vercel for canonical URLs.
- Use a custom domain if available; otherwise the Vercel domain is acceptable.

## Performance budgets

- Initial JS shipped to the client: keep under **150 KB gzipped** where practical.
- Prefer server components; mark only interactive pieces with `"use client"`.
- Use `next/image` for any photos or project screenshots with explicit dimensions.
- Avoid large animation libraries beyond `motion`; no Three.js unless there is a concrete requirement.
- Target Lighthouse ≥ 95 for Performance, Accessibility, Best Practices, and SEO on mobile.

## Suggested file structure

```text
.
├── AGENTS.md
├── PLAN.md
├── README.md
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── opengraph-image.tsx
│   ├── icon.svg
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── site-header.tsx
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   ├── hero.tsx
│   ├── proof-strip.tsx
│   ├── about-section.tsx
│   ├── experience-section.tsx
│   ├── work-section.tsx
│   ├── speaking-section.tsx
│   ├── skills-section.tsx
│   ├── education-section.tsx
│   ├── contact-section.tsx
│   ├── print-cv.tsx
│   ├── print-button.tsx
│   ├── copy-email.tsx
│   ├── reveal.tsx
│   ├── section-heading.tsx
│   └── site-footer.tsx
├── content/
│   └── cv.ts
├── public/
│   └── profile.webp
├── tests/
│   ├── unit/cv.test.ts
│   └── e2e/smoke.spec.ts
├── .env.example
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── playwright.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── vitest.config.mts
```

## Environment variables

```bash
# required in production
NEXT_PUBLIC_SITE_URL=https://example.com

# optional: only if a real contact form is added
RESEND_API_KEY=
CONTACT_TO_EMAIL=
```

Never commit `.env.local` or real secrets. Document any new variable in `.env.example`.

## Implementation guardrails

- Use **TypeScript strict mode**. No `any` unless justified.
- Prefer **Server Components**. Add `"use client"` only for theme, menu, copy-to-clipboard, and animation wrappers.
- Keep components small and composable. Extract repeated section headers and pills.
- Use semantic tokens such as `bg-background`, `text-foreground`, `border-border`, `text-accent`; do not scatter raw colors.
- All external links open safely with `rel="noopener noreferrer"` and clear labels.
- Do not invent experience, metrics, employers, or credentials. Use clearly marked placeholders until the candidate supplies real content.
- Do not add a CMS, database, authentication, or blog unless explicitly requested.
- Do not add a contact form backend without spam protection (honeypot + rate limit or a provider like Resend).
- Keep the print stylesheet functional whenever layout changes.
- Update this file when a technology or convention decision changes.

## Definition of done

- [ ] `npm run lint`, `npm run typecheck`, `npm run test`, and `npm run build` pass.
- [ ] Page is responsive at 360 px, 768 px, and 1440 px.
- [ ] Both themes pass contrast checks.
- [ ] Keyboard navigation and reduced-motion behavior verified.
- [ ] “Download CV” produces a clean, readable print layout.
- [ ] Lighthouse mobile scores are ≥ 95 across categories.
- [ ] OG image, sitemap, robots, and JSON-LD validate.
- [ ] Vercel preview and production deployments succeed.
- [ ] No placeholder text remains in the production content.
