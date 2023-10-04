// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/plumber-website/',
    buildAssetsDir: 'assets',
  },
  devtools: { enabled: true },
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
