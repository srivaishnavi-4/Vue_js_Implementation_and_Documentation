export default defineNuxtConfig({
  compatibilityDate: '2026-10-18',

  devtools: {
    enabled: true
  },

  modules: ['@pinia/nuxt'],

  app: {
    head: {
      title: 'Vaishu Store',
      meta: [
        {
          name: 'description',
          content: 'Explore products and manage your shopping cart.'
        }
      ]
    }
  }
})