import index from '@/pages'
import login from '@/pages/login/login'
import register from '@/pages/login/register'
import findPassword from '@/pages/login/findPassword'
import findAccount from '@/pages/login/findAccount'

import otherTuling from '@/pages/login/other/tuling'

export const loginRoutes = {
  path: '/login',
  component: index,
  children: [
    {
      path: '',
      meta: { title: '登录界面' },
      component: login
    },
    {
      path: 'login',
      name: 'login',
      meta: { title: '登录界面' },
      component: login
    },
    {
      path: 'register',
      name: 'register',
      meta: { title: '注册' },
      component: register
    },
    {
      path: 'find_password',
      name: 'findPassword',
      meta: { title: '找回密码' },
      component: findPassword
    },
    {
      path: 'find_account',
      name: 'findAccount',
      meta: { title: '找回账号' },
      component: findAccount
    },
    {
      path: 'other_tuling',
      name: 'otherTuling',
      meta: { title: '图灵机器人数据处理' },
      component: otherTuling
    }
  ]
}
