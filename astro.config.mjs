import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// `SITE_URL` and `BASE_PATH` are injected by the GitHub Pages workflow
// (see .github/workflows/deploy.yml). Locally they fall back to sensible
// defaults so `npm run dev` works without any environment setup.
const site = process.env.SITE_URL || 'https://example.com';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
