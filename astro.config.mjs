// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// import react from '@astrojs/react';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://egiiputra.github.io',
  integrations: [tailwind(), svelte()],
  vite: {
    resolve: {
      alias: {
        '@': '/src',
        '@components': '/src/components'
      }
    }
  },
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  },
  server: {
    host: true,
    port: 4321,
  }
});