import { createApp } from 'vue'
import '@/styles/style.css'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import 'virtual:svg-icons-register'
import '@/router/utils'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App).use(router).use(pinia).mount('#app')
