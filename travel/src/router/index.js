import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import List from '@/pages/List/List'
import fastclick from 'fastclick'
import 'normalize.css'
import '../assets/border.css'


Vue.use(Router)

fastclick.attach(document.body)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
