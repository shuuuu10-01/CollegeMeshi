import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../views/Start.vue'
import Result from '../views/Result.vue'
import RTA from '../views/RTA.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/result',
    name: Result,
    component: Result,
    props: true
  },
  {
    path: '/rta',
    name: RTA,
    component: RTA
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
