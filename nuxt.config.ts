import { resolve } from 'path'

export default({
  devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname, "/"),
  },
  css: [
    "@/static/styles/global.css"
  ],

  app: {
    pageTransition: {name: 'fade', mode: 'out-in'}
  },
  
  })