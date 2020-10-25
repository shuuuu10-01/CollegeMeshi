import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../views/Start.vue'
import Result from '../views/Result.vue'
import RTA from '../views/RTA.vue'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Top from '../views/Top.vue'
import MyPage from '../views/MyPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'top',
    component: Top
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
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
  },
  {
    path: '/start',
    name: Start,
    component: Start
  },
  {
    path: '/mypage',
    name: MyPage,
    component: MyPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
