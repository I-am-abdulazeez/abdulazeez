export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
  ],

  googleFonts: {
    families: {
      'DM Serif Display': [400],
      'DM Mono': [400, 500],
      'Inter': [300, 400, 500],
    },
    display: 'swap',
  },

  css: ['~/assets/css/main.css'],
})
