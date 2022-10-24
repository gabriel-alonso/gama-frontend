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
    path: '/scan',
    name: 'scan',
    component: () => import('@/views/scan/Scan.vue'),
    meta: { breadCrumb: 'Scan' }
  },
  {
    path: '/scan-data',
    name: 'scan-data',
    component: () => import('@/views/scanned-data/ScanData.vue'),
    meta: { breadCrumb: 'Scan' }
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
