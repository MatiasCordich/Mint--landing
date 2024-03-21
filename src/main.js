import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'


const app = createApp(App)


// Instalar Pinia en la aplicación
const pinia = createPinia();
app.use(pinia);
app.use(router)


app.mount('#app')
