import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

const Login = () => import('@/pages/login/login')
const Home = () => import('@/pages/main')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
      // hidden: true
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
      // hidden: true
    }
  ]
})
