import { resolve } from 'path';

export default {
  devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname, "/"),
  },
  
  css: [
    '@/assets/css/global.css'
  ]
};
