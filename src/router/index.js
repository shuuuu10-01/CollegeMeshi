import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../views/Start.vue'
import Form from '../views/Form.vue'
import RTA from '../views/RTA.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/form',
    name: Form,
    component: Form,
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
