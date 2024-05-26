// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    // SSR keys
    NPS_API_KEY: '',
    public: {
      // CSR keys
    }
  },

  modules: ["@nuxtjs/tailwindcss"]
})