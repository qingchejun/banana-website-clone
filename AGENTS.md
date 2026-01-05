# Repository Guidelines

本项目请始终用中文跟用户交流。

## Project Structure & Module Organization
- Next.js (App Router) + TypeScript + Tailwind CSS.
- `app/`: root layout (`app/layout.tsx`), entry page (`app/page.tsx`), and global styles (`app/globals.css`).
- `components/`: feature sections; `components/ui/`: shadcn‑style primitives; import via `@/components/...`.
- `hooks/`: custom hooks (e.g., `hooks/use-toast.ts`).
- `lib/`: utilities (e.g., `lib/utils.ts`).
- `public/`: static assets (icons, demo images).
- `styles/`: legacy globals; prefer `app/globals.css` going forward.
- Path aliases defined in `tsconfig.json` and `components.json` (`@/components`, `@/lib`, `@/hooks`, `@/components/ui`).

## Build, Test, and Development Commands
- Install deps: `pnpm install`
- Dev server: `pnpm dev` (http://localhost:3000)
- Lint: `pnpm lint` (ESLint). If missing, add config before use.
- Build: `pnpm build`
- Start prod: `pnpm start`

## Coding Style & Naming Conventions
- TypeScript strict; React functional components.
- Formatting: 2-space indent, double quotes, no semicolons (match existing files).
- Files: kebab-case (`components/hero-section.tsx`); exports in PascalCase (`export function HeroSection() {}`).
- Imports use `@/` aliases. Prefer co-located component logic/hooks; keep global CSS minimal and theme tokens in `app/globals.css`.

## Testing Guidelines
- No tests yet. Recommended setup: Vitest + React Testing Library.
- Place tests next to sources as `*.test.tsx/ts`.
- Add scripts: `"test": "vitest"`, `"test:run": "vitest run"` and run with `pnpm test`.
- Focus on component behavior and utility functions; mock Next APIs as needed.

## Commit & Pull Request Guidelines
- Conventional Commits: `feat`, `fix`, `chore`, `docs`, `refactor` (e.g., `feat(ui): add carousel autoplay`).
- Branch names: `feat/<short-desc>` or `fix/<short-desc>`.
- PRs include: purpose, screenshots/GIFs for UI, linked issues, and confirmation that `pnpm build` passes locally.
- Note: `next.config.mjs` ignores TS build errors; do not rely on this—fix types before merging.

## Security & Configuration Tips
- Never commit secrets. Use `.env.local` for local keys; reference via `process.env.*`.
- Keep large media in `public/`; prefer optimized formats. Enable Next Image optimization if needed.
