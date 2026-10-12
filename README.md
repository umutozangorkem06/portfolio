# umutozangorkem.dev

Source of my personal site, [umutozangorkem.dev](https://umutozangorkem.dev): experience, projects, skills and contact on a single page.

Built with [Astro](https://astro.build) and Tailwind CSS.

## Structure

| Path | What it holds |
|---|---|
| `src/pages/index.astro` | The page itself: experience, projects, skills, education, contact |
| `src/data/projects.ts` | The project list. Add or reorder projects here |
| `src/layouts/Base.astro` | HTML shell, meta and Open Graph tags |
| `src/components/ExternalLink.astro` | Link component for outbound links |
| `public/_headers` | Cache and security headers for the host |

## Running locally

Needs Node 22 (see `.nvmrc`).

```sh
npm install
npm run dev       # local server
npm run build     # static output in dist/
npm run check     # type and template checks
```
