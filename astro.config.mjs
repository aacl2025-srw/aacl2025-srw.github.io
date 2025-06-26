// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://aacl2025-srw.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
