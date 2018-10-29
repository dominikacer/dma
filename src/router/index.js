import Vue from 'vue'
import Router from 'vue-router'
import Jumbotron from '@/components/Jumbotron'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Jumbotron',
      component: Jumbotron
    }
  ]
})
