// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  nitro: {
    preset: 'vercel',
  },

  modules: [
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/image',
  ],

  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark',
        },
      },
    },
  },

  fonts: {
    families: [
      { name: 'Space Grotesk', provider: 'google', weights: [300, 400, 500, 600, 700] },
      { name: 'JetBrains Mono', provider: 'google', weights: [400, 500, 600] },
    ],
  },

  app: {
    head: {
      htmlAttrs: {
        class: 'dark',
      },
      title: 'Spurlock.dev | Developer Portfolio',
      meta: [
        { name: 'description', content: 'Aaron J. Spurlock - Vue Certified Developer, Head of Technology, and System Architect' },
      ],
      script: [
        {
          innerHTML: `
            (function() {
              var stored = localStorage.getItem('theme');
              var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              var shouldBeDark = stored === 'dark' || (stored === null && prefersDark);
              if (!shouldBeDark) {
                document.documentElement.classList.remove('dark');
              }
            })();
          `,
          type: 'text/javascript',
        },
      ],
    },
  },
})