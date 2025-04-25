// src/router/index.js
/*import { createRouter, createWebHistory } from 'vue-router'
import JobList from '@/components/JobList.vue'
import JobDetail from '@/components/JobDetail.vue'
import JobOverview from '@/components/JobOverview.vue'

const routes = [
  {
    path: '/',
    component: JobList,
    children: [
      {
        path: '',
        name: 'overview',
        component: JobOverview,
      },
      {
        path: 'jobs/:id',
        name: 'jobDetail',
        component: JobDetail,
        props: true,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router*/
import { createRouter, createWebHistory } from 'vue-router'
import JobDetail from '../components/JobDetail.vue'
import JobOverview from '@/components/JobOverview.vue'

const routes = [
  {
    path: '/jobs/:id',
    name: 'JobDetail',
    component: JobDetail,
    props: true, // Make sure props are passed to the component
  },
  {
    path: "/",
    name: "JobOverview",
    component: JobOverview,
  },
  // Add other routes here...
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

