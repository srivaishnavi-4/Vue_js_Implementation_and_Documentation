
import {
  createRouter,
  createWebHistory
} from 'vue-router'

import {
  currentUser,
  isAuthenticated
} from './auth'

import LoginView from './views/LoginView.vue'
import DashboardView from './views/DashboardView.vue'
import AdminView from './views/AdminView.vue'
import ProfileView from './views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      meta: {
        requiresAuth: true,
        requiresAdmin: true
      },

      // PER-ROUTE GUARD
      beforeEnter: (to, from) => {
        if (currentUser.value?.role !== 'admin') {
          return { name: 'dashboard' }
        }
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

// GLOBAL GUARD
router.beforeEach((to) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    return {
      name: 'login',
      query: { redirect: to.fullPath }
    }
  }

  if (to.meta.requiresAdmin && currentUser.value?.role !== 'admin') {
    return { name: 'dashboard' }
  }

  if (to.name === 'login' && isAuthenticated.value) {
    return { name: 'dashboard' }
  }
})

export default router
