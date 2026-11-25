# Build Plan — IT Candidate CV Site

Companion to `AGENTS.md`. This is the implementation roadmap, not the final content.

## Current status

- [x] Phase 1 — Next.js, TypeScript, Tailwind, Motion, theme provider, scripts
- [x] Phase 2 — design tokens, layout shell, header, mobile nav, theme toggle
- [x] Phase 3 — hero, proof strip, about, experience, work, speaking, skills, education, contact
- [x] Phase 4 — restrained reveal/hover motion with reduced-motion support
- [x] Phase 5 — dedicated two-page print/PDF layout
- [x] Phase 6 — metadata, OG image, JSON-LD, sitemap, robots, Vitest, Playwright, axe
- [ ] Phase 7 — GitHub, Vercel deployment, custom domain, production checks
- [ ] Final content review with the candidate (target role, project links, availability wording)

## Phase 0 — Content intake (blocking for final copy)

**Goal:** collect the real material before polishing the page.

- [ ] Confirm target role(s) and seniority (e.g., Backend Engineer, DevOps, Full Stack).
- [ ] Collect name, headline, location/timezone, availability, email, LinkedIn, GitHub, personal site.
- [ ] Collect 3–4 roles with dates, titles, companies, locations, and measurable achievements.
- [ ] Collect 3–5 projects: problem, approach, stack, outcome, repo/live links, screenshots.
- [ ] Collect skills grouped by category; remove outdated or trivial items.
- [ ] Collect education, certifications, languages, and work authorization/clearance if relevant.
- [ ] Decide whether to include a photo. Default: no photo; use a terminal/code visual instead.
- [ ] Confirm whether a public PDF CV is required.
- [ ] Approve placeholder content strategy if real content is not ready.

**Deliverable:** completed `content/cv.ts` data and any project MDX files.

## Phase 1 — Scaffold and tooling

**Goal:** a clean, production-ready Next.js foundation.

- [ ] Initialize Next.js with TypeScript, App Router, Tailwind CSS, ESLint, and npm.
- [ ] Add Prettier, Vitest, React Testing Library, and Playwright.
- [ ] Configure strict TypeScript, path aliases, and scripts (`dev`, `build`, `lint`, `typecheck`, `test`, `test:e2e`).
- [ ] Add `next-themes`, `motion`, and `lucide-react` (MDX is optional and not used in v1).
- [ ] Create `.env.example` with `NEXT_PUBLIC_SITE_URL`.
- [ ] Add a minimal layout, global styles, and font setup.
- [ ] Verify `npm run build` on the empty shell.

**Deliverable:** deployable skeleton with CI-ready scripts.

## Phase 2 — Design system and page shell

**Goal:** establish the visual language before filling in content.

- [ ] Define CSS variables for dark and light themes.
- [ ] Configure Tailwind theme tokens: colors, fonts, spacing, radii, shadows.
- [ ] Build reusable primitives: `Section`, `SectionHeading`, `Pill`, `Button`, `Card`, `Container`.
- [ ] Build the sticky header with mobile menu, theme toggle, and print button.
- [ ] Add skip-to-content link and semantic landmarks.
- [ ] Add the subtle hero background treatment (dotted grid or radial glow).
- [ ] Verify responsive behavior at 360 px, 768 px, and 1440 px.

**Deliverable:** styled shell with navigation and theme switching.

## Phase 3 — Content sections

**Goal:** implement every section from `AGENTS.md` with real or placeholder data.

- [ ] Hero: name, role, value proposition, availability, CTAs, terminal card.
- [ ] Proof strip: 3–4 quick credibility facts.
- [ ] About: concise narrative and current focus.
- [ ] Experience: accessible timeline with measurable achievement bullets.
- [ ] Projects: card grid, featured project treatment, stack tags, external links.
- [ ] Project cards with optional future MDX case-study route.
- [ ] Skills: grouped tags with no percentage bars.
- [ ] Education and certifications.
- [ ] Contact/footer with email copy-to-clipboard.
- [ ] Empty-state handling for missing optional data.

**Deliverable:** complete single-page CV with working anchors and project links.

## Phase 4 — Motion and polish

**Goal:** make it feel techie without hurting usability.

- [ ] Add restrained entrance animations with stagger.
- [ ] Add card and button hover states.
- [ ] Add theme transition without flashing.
- [ ] Add reduced-motion fallbacks.
- [ ] Add copy-email feedback and print button behavior.
- [ ] Audit spacing, alignment, and type scale across breakpoints.
- [ ] Remove any visual element that does not earn its place.

**Deliverable:** polished, cohesive page with no layout jank.

## Phase 5 — Print/PDF CV

**Goal:** one-click, recruiter-friendly PDF.

- [ ] Add `@media print` styles and a dedicated print-only CV layout: white background, black text, no nav or animations.
- [ ] Ensure experience and projects fit a sensible page count.
- [ ] Hide interactive-only controls and external-link icons in print.
- [ ] Add page-break rules for roles and project cards.
- [ ] Optionally generate and commit a static `public/cv.pdf` if browser print output is inconsistent.
- [ ] Test print preview in Chromium and Firefox.

**Deliverable:** clean printed CV with working “Download CV” button.

## Phase 6 — SEO, accessibility, and performance

**Goal:** production quality, not just visual quality.

- [ ] Add metadata, canonical URL, Open Graph, and Twitter cards.
- [ ] Generate a dynamic OG image with `next/og`.
- [ ] Add `Person` JSON-LD.
- [ ] Add `sitemap.ts` and `robots.ts`.
- [ ] Run axe and keyboard-only checks; fix all issues.
- [ ] Verify contrast in both themes.
- [ ] Check bundle size and remove unnecessary client components.
- [ ] Run Lighthouse mobile and fix regressions.
- [ ] Add basic Playwright smoke tests for navigation, theme toggle, and print button.

**Deliverable:** accessible, indexable, fast site meeting the budgets in `AGENTS.md`.

## Phase 7 — Deployment and launch

**Goal:** ship it and make updates boring.

- [ ] Push the repository to GitHub.
- [ ] Import the repo into Vercel; set `NEXT_PUBLIC_SITE_URL`.
- [ ] Confirm preview deployments on pull requests.
- [x] Add GitHub Actions CI workflow: install, lint, typecheck, test, build, browser tests.
- [ ] Connect a custom domain and verify HTTPS/canonical redirects.
- [ ] Add Vercel Analytics if desired.
- [ ] Test the production URL on mobile and desktop.
- [ ] Validate OG preview with a link-preview tool.
- [ ] Run a final content proofread; remove all placeholders.
- [ ] Tag `v1.0.0` and keep a short “how to update content” note in `README.md`.

**Deliverable:** live production CV with a documented update path.

## Suggested delivery order

| Milestone | Scope | Typical effort |
| --- | --- | --- |
| M1 | Phase 0 + Phase 1 | 0.5–1 day |
| M2 | Phase 2 + Phase 3 | 1.5–2 days |
| M3 | Phase 4 + Phase 5 | 0.5–1 day |
| M4 | Phase 6 + Phase 7 | 0.5–1 day |

Total estimate: **3–5 focused days**, depending on how quickly final content and project screenshots are available.

## Decisions to confirm before implementation

1. **Target role:** what job title should the hero lead with?
2. **Content source:** do you have an existing CV/LinkedIn to adapt, or should we use placeholders?
3. **Photo:** include one, or keep it text/code-only?
4. **Projects:** which 3–5 projects should be featured, and do they have public links?
5. **Contact:** email-only, or a real contact form?
6. **Domain:** use a custom domain or the free Vercel URL?
7. **Language:** English only, or bilingual?
