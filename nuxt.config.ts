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

  app: {
    head: {
      title: "Olanrewaju Abdul'Azeez — Senior Frontend Engineer",
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            "Senior Frontend Engineer with 7+ years building production-grade web and mobile apps across fintech, insurance, edtech, and enterprise. Creator of Stunk — open-source state management with 160+ GitHub stars.",
        },
        { name: 'author', content: "Olanrewaju Abdul'Azeez" },
        { name: 'robots', content: 'index, follow' },

        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://abdulazeez.xyz' },
        {
          property: 'og:title',
          content: "Olanrewaju Abdul'Azeez — Senior Frontend Engineer",
        },
        {
          property: 'og:description',
          content:
            "Senior Frontend Engineer with 7+ years building production-grade web and mobile apps across fintech, insurance, edtech, and enterprise. Creator of Stunk — open-source state management with 160+ GitHub stars.",
        },
        { property: 'og:image', content: '/og-image.png' },
        { property: 'og:locale', content: 'en_US' },

        // Twitter / X
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://abdulazeez.xyz' },
        {
          name: 'twitter:title',
          content: "Olanrewaju Abdul'Azeez — Senior Frontend Engineer",
        },
        {
          name: 'twitter:description',
          content:
            "Senior Frontend Engineer with 7+ years building production-grade web and mobile apps. Creator of Stunk — open-source state management with 160+ GitHub stars.",
        },
        { name: 'twitter:image', content: '/og-image.png' },

        // Theme
        { name: 'theme-color', content: '#0a0a0a' },
      ],
      link: [
        { rel: 'canonical', href: 'https://abdulazeez.xyz' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
})
