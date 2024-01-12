import { resolve } from 'path';

export default {
  devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname, "/"),
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  
  css: [
    'assets/css/global.css'
  ]
};
