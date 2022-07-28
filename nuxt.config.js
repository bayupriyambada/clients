import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'clients',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    [
      '@nuxtjs/eslint-module',
      {
        fix: true,
      },
    ],
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  auth: {
    strategies: {
      admin: {
        scheme: 'local',
        token: {
          property: 'token',
          required: true,
          type: 'Bearer',
        },
        user: {
          property: 'user',
        },
        endpoints: {
          login: {
            url: '/api/admin/login',
            method: 'post',
            propertyName: 'token',
          },
          logout: {
            url: '/api/admin/logout',
            method: 'post',
          },
          user: {
            url: 'api/admin/personal',
            method: 'get',
            propertyName: 'token',
          },
        },
      },
      sdm: {
        scheme: 'local',
        token: {
          property: 'token',
          required: true,
          type: 'Bearer',
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: {
            url: '/api/sdm/login',
            method: 'post',
            propertyName: 'token',
          },

          logout: {
            url: '/api/sdm/logout',
            method: 'post',
          },
          user: {
            url: '/api/sdm/personal',
            method: 'get',
            propertyName: 'token',
          },
        },
      },
      pegawai: {
        scheme: 'local',
        token: {
          property: 'token',
          required: true,
          type: 'Bearer',
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: {
            url: '/api/pegawai/login',
            method: 'post',
            propertyName: 'token',
          },
          logout: {
            url: '/api/pegawai/logout',
            method: 'post',
          },
          user: {
            url: '/api/pegawai/personal',
            method: 'get',
            propertyName: 'token',
          },
        },
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:8000',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
