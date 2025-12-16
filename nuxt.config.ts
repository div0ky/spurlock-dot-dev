// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        class: 'dark',
      },
      meta: [
        { content: 'Aaron J. Spurlock - Vue Certified Developer, Head of Technology, and System Architect', name: 'description' },
      ],
      script: [
        {
          innerHTML: `
            (function() {
              if (localStorage.getItem('theme') === 'light') {
                document.documentElement.classList.remove('dark');
              }
            })();
          `,
          type: 'text/javascript',
        },
      ],
      title: 'Spurlock.dev | Developer Portfolio',
    },
  },
  compatibilityDate: '2025-07-15',

  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark',
        },
      },
    },
  },

  css: ['~/assets/css/main.css'],

  devtools: { enabled: true },

  fonts: {
    families: [
      { name: 'Space Grotesk', provider: 'google', weights: [300, 400, 500, 600, 700] },
      { name: 'JetBrains Mono', provider: 'google', weights: [400, 500, 600] },
    ],
  },

  modules: [
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/image',
  ],

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/blog', '/projects'],
    },
    preset: 'vercel-static',
  },

  runtimeConfig: {
    public: {
      email: 'aaron@spurlock.dev',
    },
  },
})
