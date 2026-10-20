import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../pages/DashboardPage.vue')
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: () => import('../pages/AnalyticsPage.vue')
    },
    {
      path: '/projects/:id',
      name: 'project-details',
      component: () => import('../pages/ProjectDetailsPage.vue')
    }
  ]
})

export default router