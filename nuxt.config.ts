import { resolve } from 'path';

export default {
  devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname, "/"),
  },

  css: [
    '@/assets/styles/global.css',
  ],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
};
