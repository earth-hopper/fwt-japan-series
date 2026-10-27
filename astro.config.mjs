// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://earth-hopper.github.io',
  base: 'fwt-japan-series', // 例: '/fwt-site'
  vite: {
    plugins: [tailwindcss()]
  }
});