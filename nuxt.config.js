export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'OMMC',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'OMMC,online,monmouth,math,competition,nj' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'theme-color', content: '#c9424b' },
      {
        name: 'description',
        hid: 'description',
        content: 'Online Monmouth Math Competition',
      },

      { property: 'og:title', content: 'OMMC' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://ommc.okay.one' },
      { property: 'og:image', content: '/icon.png' },
      {
        property: 'og:description',
        content: 'Online Monmouth Math Competition',
      },
    ],
    link: [
      { rel: 'author', type: 'text/plain', href: '/humans.txt' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [{ src: '~assets/css/main.scss', lang: 'scss' }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // https://github.com/nuxt-community/style-resources-module
  styleResources: { scss: ['~assets/css/main.scss'] },

  // https://pwa.nuxtjs.org/manifest
  pwa: {
    // https://www.pwabuilder.com
    meta: {
      scope: '/',
      start_url: '/',
      orientation: 'any',
      display: 'minimal-ui',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      categories: ['education, kids', 'mathematics', 'contests'],
      shortcuts: [
        {
          url: '/home',
          name: 'Go home',
          short_name: 'Home',
          description: 'Visit the home page',
        },
      ],
    },

    manifest: {
      useWebmanifestExtension: true,
      icons: [
        {
          src: '/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },

    workbox: {
      enabled: true,
      workboxExtensions: '@/plugins/sw-background-sync.js',
      preCaching: [
        'icon.png',
        'favicon.ico',
        'favicon-16x16.png',
        'favicon-32x32.png',
        'apple-touch-icon.png',
        'android-chrome-192x192.png',
        'android-chrome-512x512.png',
        'humans.txt',
        'robots.txt',
      ].map((file) => '@/static/' + file),
    },
  },

  oneSignal: {
    init: {
      appId: 'c258f4e3-aad1-4468-a429-e487dfe45640',
      allowLocalhostAsSecureOrigin: true,
      autoResubscribe: true,
    },
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/onesignal', '@nuxtjs/pwa'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },

    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|ts)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
