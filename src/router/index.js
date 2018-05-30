import Vue from 'vue'
import Router from 'vue-router'

import login from '@/pages/login'
import card from '@/pages/card'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      meta: { title: '登录界面' },
      component: login,
    },
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
