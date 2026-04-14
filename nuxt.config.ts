// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/icon',
    'dayjs-nuxt',
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxtjs/mdc',
  ],

  ssr: true,

  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],

  colorMode: {
    classSuffix: '',
  },

  mdc: {
    highlight: false,
  },

  ui: {},

  compatibilityDate: '2024-11-01',

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  icon: {
    serverBundle: {
      collections: ['icon-park'],
    },
  },
})
