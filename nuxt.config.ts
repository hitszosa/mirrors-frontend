// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/color-mode',
        '@nuxt/content',
        'nuxt-icon',
        'dayjs-nuxt',
        '@nuxthq/ui',
        '@nuxtjs/eslint-module'
    ],
    ssr: true,
    colorMode: {
        classSuffix: '',
    },
    devtools: { enabled: true },
    css: ['@/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
