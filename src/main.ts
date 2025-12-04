import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { router } from '@/router'
import App from './App.vue'

// CSS
import 'virtual:uno.css'
import '@/assets/css/index.css'

// create a head instance
const head = createHead()

// create a pinia instance
const pinia = createPinia()

// create app and install plugins
const app = createApp(App)

// attach pinia and head to the app
app.use(head)
app.use(pinia)
app.use(router)

app.mount('#app')
