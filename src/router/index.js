import { createRouter, createWebHistory } from 'vue-router'


import HomeView from '../views/HomeView.vue'
import PlayView from '../views/PlayView.vue'
import SettingView from '../views/SettingView.vue'


const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/play',
        component: PlayView
    },
    {
        path: '/setting',
        component: SettingView
    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
  
export default router