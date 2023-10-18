// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  router: {
    base: '/plumber-website/'
  },
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore',]
      }
    ]
  ],
  imports: {
    dirs: ['store'],
  },
  runtimeConfig: {

  }
})
