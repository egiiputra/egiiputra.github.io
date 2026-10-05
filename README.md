# personal-web

A simple personal website built with [Astro](https://astro.build). All content
lives in plain JSON and Markdown files — no CMS, no database.

The default content is derived from [`cv.tex`](./cv.tex).

## Content

| File | Purpose |
| --- | --- |
| `src/data/profile.json` | Name, title, location, email, social links |
| `src/content/about.md` | Markdown "About" section |
| `src/data/experience.json` | Work history |
| `src/data/projects.json` | Projects |
| `src/data/education.json` | Education |
| `src/data/skills.json` | Skill groups |
| `src/data/certifications.json` | Certifications |

Edit these files to update the site — no component changes required.

> The email and social links in `profile.json` are placeholders copied from the
> template. Update them with your real details.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server at `localhost:4321` |
| `npm run build` | Build the production site to `./dist` |
| `npm run preview` | Preview the production build locally |

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages.

One-time setup:

1. Push this repository to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the Actions tab).

The workflow uses `actions/configure-pages` to inject the correct `site` and
`base` values, so the site works whether it is served from a user page
(`user.github.io`) or a project page (`user.github.io/repo`).

### Local build with a custom base

To reproduce the GitHub Pages build locally:

```sh
SITE_URL=https://user.github.io BASE_PATH=/personal-web npm run build
```
