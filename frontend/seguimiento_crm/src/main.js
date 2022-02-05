import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'



// Establecer la URL por default para el BACKEND
axios.defaults.baseURL = '10.13.123.53:8000'
// Añadir axios junto con el router
createApp(App).use(store).use(router, axios).mount('#app')
