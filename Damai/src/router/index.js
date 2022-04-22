import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../view/HomePage/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'HomePage'
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
