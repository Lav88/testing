export default defineNuxtConfig({
  modules: ['my-module'],
  devtools: { enabled: true },
  compatibilityDate: 'latest',
  css: [    
    '../playground/assets/css/frontend3.css',
  ],
  //myModule: [''],
  myModule: {},
})
