export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,

  modules: [
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@vercel/analytics'
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
      title: "Abdul'Azeez Olanrewaju | Senior Frontend Engineer",
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            "Senior Frontend Engineer with 7+ years building web and mobile apps for fintech, insurance and edtech. Creator of Stunk, an open-source state library.",
        },
        { name: 'author', content: "Abdul'Azeez Olanrewaju" },
        { name: 'robots', content: 'index, follow' },

        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://abdulazeez.xyz' },
        {
          property: 'og:title',
          content: "Abdul'Azeez Olanrewaju | Senior Frontend Engineer",
        },
        {
          property: 'og:description',
          content:
            "Senior Frontend Engineer with 7+ years building web and mobile apps for fintech, insurance and edtech. Creator of Stunk, an open-source state library.",
        },
        { property: 'og:image', content: 'https://abdulazeez.xyz/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:type', content: 'image/png' },
        {
          property: 'og:image:alt',
          content: "Abdul'Azeez Olanrewaju, Senior Frontend Engineer",
        },
        { property: 'og:site_name', content: "Abdul'Azeez Olanrewaju" },
        { property: 'og:locale', content: 'en_US' },

        // Twitter / X
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://abdulazeez.xyz' },
        {
          name: 'twitter:title',
          content: "Abdul'Azeez Olanrewaju | Senior Frontend Engineer",
        },
        {
          name: 'twitter:description',
          content:
            "Senior Frontend Engineer with 7+ years building web and mobile apps for fintech, insurance and edtech. Creator of Stunk, an open-source state library.",
        },
        { name: 'twitter:image', content: 'https://abdulazeez.xyz/og-image.png' },
        {
          name: 'twitter:image:alt',
          content: "Abdul'Azeez Olanrewaju, Senior Frontend Engineer",
        },

        // Theme
        { name: 'theme-color', content: '#0a0a0a' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: "Abdul'Azeez Olanrewaju",
            jobTitle: 'Senior Frontend Engineer',
            url: 'https://abdulazeez.xyz',
            image: 'https://abdulazeez.xyz/og-image.png',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Lagos',
              addressCountry: 'NG',
            },
            knowsAbout: [
              'React',
              'TypeScript',
              'Vue',
              'Nuxt',
              'React Native',
              'State management',
            ],
            sameAs: ['https://github.com/I-am-abdulazeez', 'https://stunk.dev'],
          }),
        },
      ],
      link: [
        { rel: 'canonical', href: 'https://abdulazeez.xyz' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/favicon.svg' },
      ],
    },
  },
})
