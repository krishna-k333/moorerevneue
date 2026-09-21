// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.moorerevenue.com',
  trailingSlash: 'never',
  redirects: {
    '/areas-we-serve/greater-faridabad-neharpar': '/areas-we-serve/greater-faridabad',
  },
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});