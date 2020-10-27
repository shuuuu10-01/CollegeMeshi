import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../views/Start.vue'
import Result from '../views/Result.vue'
import RTA from '../views/RTA.vue'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'
import Mypage from '../views/Mypage.vue'

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
  },
  {
    path: '/signin',
    name: Signin,
    component: Signin
  },
  {
    path: '/signup',
    name: Signup,
    component: Signup
  },
  {
    path: '/mypage',
    name: Mypage,
    component: Mypage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
