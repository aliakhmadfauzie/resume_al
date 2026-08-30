# Copilot Instructions — Al Resume Website

Repo-wide guidance for Copilot in this workspace. These are applied automatically.

## Stack & commands

- Build tool: **Vite 6**; runtime: **Bun** (use `bun` commands; `bun.lock` is the lockfile).
- **Install:** `bun install`
- **Dev server:** `bun run dev` (port 3000)
- **Type check / lint:** `bun run lint` (`tsc --noEmit`) — MUST pass before declaring work done.
- **Build:** `bun run build`
- **Environment:** copy `.env.example` → `.env`. Provide `GEMINI_API_KEY` and `APP_URL`.
  Never commit `.env`; secrets come from `dotenv` / AI Studio runtime injection.

## Coding standards

- **React 19** idioms: prefer `useTransition` / `useDeferredValue` / `Suspense` where
  relevant. No deprecated lifecycle or legacy context patterns.
- **TypeScript:** typed props/payloads (from `src/types.ts`). No new `any` or `@ts-ignore`.
  No `tsc` errors.
- **Styling:** Tailwind CSS v4 (CSS-first `@import "tailwindcss"`, `@tailwindcss/vite`
  plugin). Keep utility usage consistent; reuse tokens in `src/index.css`.
- **Icons:** `lucide-react`. **Animation:** `motion`. Don't add new UI libraries without
  approval.
- **Components:** follow the Container/Presentation pattern for non-trivial components.
  Keep data in `src/data/` and pass it via props.

## Quality gates (enforced by the orchestrator)

1. **Type safety** — `bun run lint` exits 0.
2. **Accessibility (WCAG 2.2 AA)** — dialogs/modals trap focus, expose correct ARIA,
   close on `Escape`; contrast ≥ 4.5:1; keyboard navigable.
3. **Performance (Core Web Vitals)** — LCP < 2.5s, INP < 200ms, CLS < 0.1; avoid hero/shader
   layout shifts; lazy-load below-the-fold content.
4. **Security (OWASP Top 10 2025)** — no secrets in client code; sanitize `react-markdown`
   output; no unsafe `dangerouslySetInnerHTML`; validate webhook input; no `eval`.
5. **Build & runtime** — `bun run build` exits 0; verify in browser via `webapp-testing` /
   `chrome-devtools`.

## Agents & skills

Custom agents live in `.github/agents/`, skills in `.github/skills/`. Use
`@agent-orchestrator` to route multi-part work. Never edit agent or skill files you did
not author unless explicitly asked.
