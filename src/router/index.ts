import {
  createRouter, createWebHistory, type RouteRecordRaw
} from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login/index.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/pages/NotFound/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router