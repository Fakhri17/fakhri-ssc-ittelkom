import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'
import VueLazyLoad from 'vue3-lazyload'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import './assets/main.css'

const app = createApp(App)

app
.use(router)
.use(store)
.use(VueLazyLoad, {
  // options...
})

app.mount('#app')
