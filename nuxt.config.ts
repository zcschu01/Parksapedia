import path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  alias: {
    "~": path.resolve(__dirname),
  },

  css: ["~/assets/styles/google-fonts.css", "~/assets/main.css"],

  runtimeConfig: {
    // SSR keys
    NPS_API_KEY: "",
    public: {
      // CSR keys
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/supabase",
    "@nuxt/image",
    "@nuxt/eslint",
    "@nuxt/test-utils/module",
    "@pinia/nuxt",
  ],

  tailwindcss: {
    config: {
      theme: {
        fontFamily: {
          lato: "Lato",
        },
      },
    },
  },

  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/login",
      exclude: ['/', '/been-there-done-that'],
      cookieRedirect: false,
    },
  },

  googleFonts: {
    families: {
      Lato: [300, 400, 700],
    },
    download: true,
    display: "swap",
    prefetch: false,
    preconnect: false,
    preload: false,
    base64: false,
    outputDir: "assets",
    fontsDir: "fonts",
    stylePath: "styles/google-fonts.css",
    fontsPath: "assets/fonts",
    overwriting: true,
  },

  compatibilityDate: "2024-11-21",
});