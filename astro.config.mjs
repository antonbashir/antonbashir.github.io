import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  output: 'hybrid',
  site: 'https://antonbashir.github.io',
  integrations: [tailwind(), react(), robotsTxt()],
});