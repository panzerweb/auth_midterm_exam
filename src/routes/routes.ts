import { createWebHistory, createRouter } from 'vue-router'
import RegisterPage from '@/pages/RegisterPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import DashboardPage from '@/pages/DashboardPage.vue'
import { globalMixin } from '@/components/SweetAlert_Mixin'
import DashboardLayout from '@/layout/DashboardLayout.vue'
import AuthLayout from '@/layout/AuthLayout.vue'

const routes = [
  {
    path: '/',
    component: AuthLayout,
    children: [
      { path: '', component: LoginPage },
      { path: 'register', component: RegisterPage },
    ]
  },
  {
    path: '/dashboard',
    component: DashboardLayout,
    meta: { requiresAuth: true },
    children: [
      { path: '', component: DashboardPage }
    ]
  }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

// Global auth guard
router.beforeEach((to, from, next) => {
    // double !! forces a value to a boolean since localStorage returns a string | null
    const isLoggedIn = !!localStorage.getItem('username')

    if (to.meta.requiresAuth && !isLoggedIn) {
        globalMixin("error", 'You are not logged in!')
        next('/') // redirect to login
    }

    if ((to.path === '/' || to.path === '/register') && isLoggedIn) {
        next('/dashboard')
        return
    }

    next()
})