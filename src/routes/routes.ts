import { createWebHistory, createRouter } from 'vue-router'
import RegisterPage from '@/pages/RegisterPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import DashboardPage from '@/pages/DashboardPage.vue'

const routes = [
    {path: '/', component: LoginPage},
    {path: '/register', component: RegisterPage},
    {path: '/dashboard', component: DashboardPage}
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
