// @ts-check
import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  integrations: [
    tailwind(),
    icon()
  ],
  site: 'https://danieldampe.github.io',
  base: '/rest-countries-api-with-color-theme-switcher-master'
})
