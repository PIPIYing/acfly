import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/index/safe'
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
        path: 'develop',
        name: 'Develop',
        component: () => import('../views/skill/develop')
      },
      {
        path: 'company',
        name: 'Company',
        component: () => import('../views/company/company')
      },
      {
        path: 'safe',
        name: 'Safe',
        component: () => import('../views/safe/safe')
      },
    ]
  },
  {
    path: '/skill',
    name: 'Skill',
    component: () => import('../views/skill/skill')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'  //history mode
})

export default router
