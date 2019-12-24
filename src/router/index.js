import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/ebook'
  },
  {
    path: '/ebook',
    component: () => import('../view/ebook/index.vue'),
    children: [
      {
        path: ':fileName', // 动态路由，以书籍名称作为路径，来实现访问
        component: () => import('../components/ebook/EbookReader.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
  //mode: 'history'
})

export default router
