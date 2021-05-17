import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'discover'
  },
  {
    path: '/discover',
    name: 'Discover',
    component: () => import('@/views/discover/index.vue'),
    redirect: '/discover/recommend',
    children: [
      {
        path: 'recommend',
        name: 'Recommend',
        component: () => import('@/views/discover/recommend/index.vue'),
        meta: {
          title: '推荐'
        }
      },
      {
        path: 'top-list',
        name: 'TopList',
        component: () => import('@/views/discover/top-list/index.vue'),
        meta: {
          title: '排行榜'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
