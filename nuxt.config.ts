// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@pinia/nuxt', '@nuxtjs/color-mode', 'nuxt-icon', 'dayjs-nuxt'],
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
    experimental: {
        renderJsonPayloads: false,
    },
})
