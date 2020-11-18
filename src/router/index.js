import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/index/intro'
  },
  {
    path: '/index/skill',
    redirect: '/index/skill/document0_1'
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
        component: () => import('../views/products/products'),
      },
      {
        path: 'products/C9pro',
        name: 'C9pro',
        component: () => import('../views/products/C9pro')
      },
      {
        path: 'products/C9',
        name: 'C9',
        component: () => import('../views/products/C9')
      },
      {
        path: 'products/A9',
        name: 'A9',
        component: () => import('../views/products/A9')
      },
      {
        path: 'products/mapping',
        name: 'Mapping',
        component: () => import('../views/products/mapping')
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
        path: 'problem',
        name: 'Problem',
        component: () => import('../views/skill/problem')
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
    path: '/index/skill',
    name: 'Skill',
    component: () => import('../views/skill/skill'),
    children: [
      {
        path: 'document_nav',
        name: 'document_nav',
        component: () => import('../views/skill/document_v1/document_nav')
      },
      {
        path: 'document0_1',
        name: 'document0_1',
        component: () => import('../views/skill/document_v1/document0_1')
      },
      {
        path: 'document0_2',
        name: 'document0_2',
        component: () => import('../views/skill/document_v1/document0_2')
      },
      {
        path: 'document0_3',
        name: 'document0_3',
        component: () => import('../views/skill/document_v1/document0_3')
      },
      {
        path: 'document1_1',
        name: 'document1_1',
        component: () => import('../views/skill/document_v1/document1_1')
      },
      {
        path: 'document1_2',
        name: 'document1_2',
        component: () => import('../views/skill/document_v1/document1_2')
      },
      {
        path: 'document1_3',
        name: 'document1_3',
        component: () => import('../views/skill/document_v1/document1_3')
      },
      {
        path: 'document2',
        name: 'document2',
        component: () => import('../views/skill/document_v1/document2')
      },
      {
        path: 'document3_1',
        name: 'document3_1',
        component: () => import('../views/skill/document_v1/document3_1')
      },
      {
        path: 'document3_2',
        name: 'document3_2',
        component: () => import('../views/skill/document_v1/document3_2')
      },
      {
        path: 'document3_3',
        name: 'document3_3',
        component: () => import('../views/skill/document_v1/document3_3')
      },
      {
        path: 'document4_1',
        name: 'document4_1',
        component: () => import('../views/skill/document_v1/document4_1')
      },
      {
        path: 'document4_2',
        name: 'document4_2',
        component: () => import('../views/skill/document_v1/document4_2')
      },
      {
        path: 'document4_3',
        name: 'document4_3',
        component: () => import('../views/skill/document_v1/document4_3')
      },
      {
        path: 'document5_1',
        name: 'document5_1',
        component: () => import('../views/skill/document_v1/document5_1')
      },
      {
        path: 'document5_2',
        name: 'document5_2',
        component: () => import('../views/skill/document_v1/document5_2')
      },
      {
        path: 'document5_3',
        name: 'document5_3',
        component: () => import('../views/skill/document_v1/document5_3')
      },
      {
        path: 'document5_4',
        name: 'document5_4',
        component: () => import('../views/skill/document_v1/document5_4')
      },
      {
        path: 'document5_5',
        name: 'document5_5',
        component: () => import('../views/skill/document_v1/document5_5')
      },
      {
        path: 'document5_6',
        name: 'document5_6',
        component: () => import('../views/skill/document_v1/document5_6')
      },
      {
        path: 'document5_7',
        name: 'document5_7',
        component: () => import('../views/skill/document_v1/document5_7')
      },
      {
        path: 'document6',
        name: 'document6',
        component: () => import('../views/skill/document_v1/document6')
      },
      {
        path: 'document7_1',
        name: 'document7_1',
        component: () => import('../views/skill/document_v1/document7_1')
      },
      {
        path: 'document7_2',
        name: 'document7_2',
        component: () => import('../views/skill/document_v1/document7_2')
      },
      {
        path: 'document7_3',
        name: 'document7_3',
        component: () => import('../views/skill/document_v1/document7_3')
      },
      {
        path: 'document7_4',
        name: 'document7_4',
        component: () => import('../views/skill/document_v1/document7_4')
      },
      {
        path: 'document7_5',
        name: 'document7_5',
        component: () => import('../views/skill/document_v1/document7_5')
      },
      {
        path: 'document7_6',
        name: 'document7_6',
        component: () => import('../views/skill/document_v1/document7_6')
      },
      {
        path: 'document7_7',
        name: 'document7_7',
        component: () => import('../views/skill/document_v1/document7_7')
      },
      {
        path: 'document7_8',
        name: 'document7_8',
        component: () => import('../views/skill/document_v1/document7_8')
      },
      {
        path: 'document7_9',
        name: 'document7_9',
        component: () => import('../views/skill/document_v1/document7_9')
      },
      {
        path: 'document7_10',
        name: 'document7_10',
        component: () => import('../views/skill/document_v1/document7_10')
      },
      {
        path: 'document8_1',
        name: 'document8_1',
        component: () => import('../views/skill/document_v1/document8_1')
      },
      {
        path: 'document8_2',
        name: 'document8_2',
        component: () => import('../views/skill/document_v1/document8_2')
      },
      {
        path: 'document8_3',
        name: 'document8_3',
        component: () => import('../views/skill/document_v1/document8_3')
      },
      {
        path: 'document8_4',
        name: 'document8_4',
        component: () => import('../views/skill/document_v1/document8_4')
      },
      {
        path: 'document8_5',
        name: 'document8_5',
        component: () => import('../views/skill/document_v1/document8_5')
      },
      {
        path: 'document9_1',
        name: 'document9_1',
        component: () => import('../views/skill/document_v1/document9_1')
      },
      {
        path: 'document10',
        name: 'document10',
        component: () => import('../views/skill/document_v1/document10')
      },
      {
        path: 'document10_1',
        name: 'document10_1',
        component: () => import('../views/skill/document_v1/document10_1')
      },
      {
        path: 'document10_2',
        name: 'document10_2',
        component: () => import('../views/skill/document_v1/document10_2')
      },
      {
        path: 'document11',
        name: 'document11',
        component: () => import('../views/skill/document_v1/document11')
      },
      {
        path: 'document12',
        name: 'document12',
        component: () => import('../views/skill/document_v1/document12')
      },
      {
        path: 'document13',
        name: 'document13',
        component: () => import('../views/skill/document_v1/document13')
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',  //history mode
  /* eslint-disable */
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
