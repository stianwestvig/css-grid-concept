import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/work'
  },
  {
    path: '/work',
    name: 'work',
    component: () => import(/* webpackChunkName: "about" */ '../views/c-work.vue')
  },
  {
    path: '/overview',
    name: 'overview',
    component: () => import(/* webpackChunkName: "about" */ '../views/c-overview.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
