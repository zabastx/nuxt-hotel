export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Toxin',
    title: 'Nuxt Hotel',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Бронирование номеров в лучшем отеле 2021 года по версии ассоциации «Отельные взгляды»' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.svg' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/global'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/v-mask.js', mode: 'client' },
    { src: '~/plugins/v-click-outside.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/content'
  ],

  googleFonts: {
    download: true,
    base64: false,
    families: {
      Montserrat: [400, 700]
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      font: {
        family: 'Montserrat'
      }
    },
    treeShake: true,
    icons: {
      iconfont: 'mdiSvg'
    },
    theme: {
      themes: {
        light: {
          accent: '#BC9CFF',
          primary: '#6FCF97',
          secondary: '#000'
        }
      }
    }
  },

  router: {
    base: '/nuxt-hotel/'
  },

  pageTransition: 'fade',
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
