import vue from '@astrojs/vue';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [
    vue({
      appEntrypoint: '/src/vue/setup',
    }),
    icon({
      include: {
        mdi: ['*'],
        'icon-park-outline': ['*'],
      },
    }),
  ],
});
