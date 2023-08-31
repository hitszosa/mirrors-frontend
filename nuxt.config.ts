// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: 'https://mirror.osa.moe/',
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '',
  },
  devtools: { enabled: true },
})
