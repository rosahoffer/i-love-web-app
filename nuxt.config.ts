import { resolve } from 'path';
import { NuxtConfig } from 'nuxt';

const config: NuxtConfig = {
  devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname, "/"),
  },
  css: [
    "@/static/styles/global.css"
  ],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  build: {
    transpile: ['vue-awesome']
  },

  typescript: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('nuxt-')
    }
  }
};

export default config;
