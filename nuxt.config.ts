// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  app: {
    seoMeta: {
      ogImage: 'https://res.cloudinary.com/dyqzurvuj/image/upload/f_auto,q_auto/v1/FJUPSY/og_img'
    },
    head: {
      title: '心理系職涯探索趣味測驗',
      htmlAttrs: {
        lang: 'zh-TW'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: "icon", type: "image/png", href: "" }
      ],
    }},

  devtools: { enabled: false },

  ssr: false,

  css: ['~/assets/sass/main.sass'],

  build: {
    transpile: ['vuetify'],
  },

  runtimeConfig: {
    apiSecret: '',
    public: {
      apiBase: '/',
    },
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    '@nuxt/image',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  
  image: {
    provider: 'cloudinary',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dyqzurvuj/image/upload/'
    },
  },

});
