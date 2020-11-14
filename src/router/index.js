import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/index.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'  //history mode
})

export default router
