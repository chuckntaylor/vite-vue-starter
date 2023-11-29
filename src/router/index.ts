import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { RouteName } from './RouteName'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouteName.home,
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/page2',
    name: RouteName.page2,
    component: () => import('@/views/Page2.vue'),
  },
  {
    // 404 Catch all
    path: '/:catchAll(.*)',
    redirect: { name: RouteName.home },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_1, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, left: 0 }
    }
  },
})

export { router }
