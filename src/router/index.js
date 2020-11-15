import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/index/cases'
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/index'),
    children: [
      {
        path: 'intro',
        name: 'Intro',
        component: () => import('../views/intro/intro')
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/products/products')
      },
      {
        path: 'cases',
        name: 'Cases',
        component: () => import('../views/cases/cases')
      },
      {
        path: 'skill',
        name: 'Skill',
        component: () => import('../views/skill/skill')
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'  //history mode
})

export default router
