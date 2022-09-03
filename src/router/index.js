import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'dashboard'
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
    meta: { breadCrumb: 'Dashboard' }
  },
  {
    path: '/requests',
    name: 'requests',
    component: () => import('@/views/requests/Requests.vue'),
    meta: { breadCrumb: 'Requests' }
  },
  {
    path: '/typography',
    name: 'typography',
    component: () => import('@/views/typography/Typography.vue'),
    meta: { breadCrumb: 'Typography' }
  },
  {
    path: '/icons',
    name: 'icons',
    component: () => import('@/views/icons/Icons.vue'),
    meta: { breadCrumb: 'Icons' }
  },
  {
    path: '/cards',
    name: 'cards',
    component: () => import('@/views/cards/Card.vue'),
    meta: { breadCrumb: 'Cards' }
  },
  {
    path: '/simple-table',
    name: 'simple-table',
    component: () => import('@/views/simple-table/SimpleTable.vue'),
    meta: { breadCrumb: 'Simple Table' }
  },
  {
    path: '/form-layouts',
    name: 'form-layouts',
    component: () => import('@/views/form-layouts/FormLayouts.vue'),
    meta: { breadCrumb: 'Form Layouts' }
  },
  {
    path: '/pages/account-settings',
    name: 'pages-account-settings',
    component: () =>
      import('@/views/pages/account-settings/AccountSettings.vue'),
    meta: { breadCrumb: 'Configurações de conta' }
  },
  {
    path: '/pages/login',
    name: 'pages-login',
    component: () => import('@/views/pages/Login.vue'),
    meta: {
      layout: 'blank'
    }
  },
  {
    path: '/pages/register',
    name: 'pages-register',
    component: () => import('@/views/pages/Register.vue'),
    meta: {
      layout: 'blank'
    }
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/Error.vue'),
    meta: {
      layout: 'blank'
    }
  },
  {
    path: '*',
    redirect: 'error-404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
