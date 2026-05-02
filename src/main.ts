import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes/routes'
import { isConnected } from './services/config'
import 'primeicons/primeicons.css'

isConnected()

createApp(App).use(router).mount('#app')
