import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import Catalog from "./Catalog.vue";

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/catalog', component: Catalog}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
