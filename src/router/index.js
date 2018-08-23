import Vue from 'vue'
import Router from 'vue-router'

import card from '@/pages/card'

import { loginRoutes } from './login'

Vue.use(Router)

export default new Router({
  routes: [
    loginRoutes,
    {
      path: '/card',
      meta: { title: '名片列表' },
      component: card,
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
