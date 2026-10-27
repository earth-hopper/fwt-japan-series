// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://freerideworldtour.jp', // ← ここに追加
  vite: {
    plugins: [tailwindcss()]
  }
});