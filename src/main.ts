import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes/routes'
import { isConnected } from './services/config'

isConnected()

createApp(App).use(router).mount('#app')
