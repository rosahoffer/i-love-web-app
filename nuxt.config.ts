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
        // Verwijder de externe verwijzing naar het CSS-bestand
        external: [],
      },
    },
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
};
