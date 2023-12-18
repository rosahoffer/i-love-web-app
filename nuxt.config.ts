import { resolve } from 'path';

export default {
  devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname, "/"),
  },
  css: [
    "@/static/styles/global.css"
  ],

  vite: {
    build: {
      ssr: true,
      rollupOptions: {
        external: ["../../static/styles/global.css?inline&used"],
      },
    },
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
};
