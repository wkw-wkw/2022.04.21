import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TodoList from '../TodoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'TodoList'
    },
    {
      path: '/TodoList',
      name: 'TodoList',
      component: TodoList
    }
  ]
})
