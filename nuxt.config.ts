// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  ssr: false,
  css: [
    '@/assets/css/default.css',
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css'
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  modules: [
    '@pinia/nuxt',
    '@vee-validate/nuxt'
  ],
  imports: {
    dirs: ['composables/**']
  },
  app: {
    head: {
      title: "Matheus Esturiao",
      titleTemplate: "%s | Matheus Esturiao"
    }
  }
})
