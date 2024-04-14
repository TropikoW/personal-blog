const firebaseConfig = require('./backend/environments/loadEnvironments.js');
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'personal-blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',    
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/firebase',
  ],

  firebase: {
    config: firebaseConfig,
    services: {
      auth: false,
      firestore: true,
      functions: true,
      storage: false,
      database: false,
      messaging: false,
      performance: false,
      appCheck: false,
      analytics: false,
      remoteConfig: false,
    }
  },

  // env: {
  //   FIRE_ENV: process.env.FIRE_ENV
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
