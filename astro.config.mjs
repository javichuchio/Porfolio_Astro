// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
   output: 'server' // esto lo convierte en ssr
  //site: 'https://github.com/javichuchio/Porfolio_Astro.git',
  //outDir: 'docs', // esto es para github pages
  //base: '/Porfolio_Astro/' // esto es para github pages
});