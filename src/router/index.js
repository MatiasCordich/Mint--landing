import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('../views/PricingView.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue')
    },
    {
      path: '/solutions',
      name: 'solutions',
      component: () => import('../views/SolutionsView.vue')
    },
    {
      path: '/questions',
      name: 'questions',
      component: () => import('../views/FaqView.vue')
    },
  ]
})

export default router
