# Gabriel Nicolás González — CV

A fast, accessible, single-page CV for a technical customer support and developer education professional. Dark mode by default, light mode included, and a clean two-page print/PDF layout.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Motion for restrained entrance animations
- next-themes for the theme toggle
- lucide-react for icons
- Vitest for content checks
- Playwright + axe for browser and accessibility smoke tests

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Scripts

```bash
npm run dev         # development server
npm run lint        # ESLint
npm run typecheck   # TypeScript
npm run test        # Vitest content checks
npm run test:e2e    # Playwright smoke + axe tests
npm run build       # production build
npm run start       # serve the production build
```

Before running the browser tests for the first time:

```bash
npx playwright install chromium
```

The Playwright config starts the production server automatically. Build first if you want to test the latest production output:

```bash
npm run build
npm run test:e2e
```

## Updating the CV

All CV content lives in [`content/cv.ts`](content/cv.ts):

- `experience` — roles, dates, locations, highlights, and stack tags
- `projects` — selected work cards
- `speaking` — talks and community work
- `skills` — grouped skill tags
- `education` — degrees and programs

Update that file, then run `npm run typecheck` and `npm run test`.

The portrait lives at `public/profile.webp`.

## Print / PDF

The **Download CV** button calls the browser print dialog. Print styles use a dedicated [`components/print-cv.tsx`](components/print-cv.tsx) layout so the output is a compact, text-first two-page CV instead of a printed website.

To create a PDF, choose **Save as PDF** in the print dialog.

## Deploying to Vercel

1. Push the repository to GitHub.
2. Import it into Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` to the production URL (for example `https://your-domain.com`).
4. Deploy. Pull requests receive preview URLs automatically.

The default fallback URL is `https://gabriel-gonzalez-cv.vercel.app`; change it in `content/cv.ts` or set the environment variable before deploying.

## Notes

- Do not commit `.env.local`.
- Keep `content/cv.ts` factual. The site intentionally avoids invented metrics, employers, or credentials.
- If the print layout changes, check the PDF output in Chromium before publishing.
