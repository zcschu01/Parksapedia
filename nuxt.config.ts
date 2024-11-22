import path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  alias: {
    '~': path.resolve(__dirname)
  },

  css: ['~/assets/styles/google-fonts.css'],

  runtimeConfig: {
    // SSR keys
    NPS_API_KEY: '',
    public: {
      // CSR keys
    }
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    '@nuxt/eslint',
    '@nuxt/test-utils/module'
  ],

  tailwindcss: {
    config: {
      theme: {
        fontFamily: {
          lato: 'Lato'
        }
      }
    }
  },

  googleFonts: {
    families: {
      Lato: [300, 400, 700]
    },
    download: true,
    display: 'swap',
    prefetch: false,
    preconnect: false,
    preload: false,
    base64: false,
    outputDir: 'assets',
    fontsDir: 'fonts',
    stylePath: 'styles/google-fonts.css',
    fontsPath: 'assets/fonts',
    overwriting: true,
  },

  compatibilityDate: '2024-11-21',
})