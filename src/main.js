import 'es6-promise/auto'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'

import {
  Button,
  Input,
  Table,
  TableColumn,
} from 'element-ui';

Vue.use(Button)
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)

// 路由跳转之前操作
// router.beforeEach((to, from, next) => {
//   console.log('to----');
//   console.log(to);
//   console.log('from----');
//   console.log(from);
//   next();
// })

// 路由跳转之后操作
router.afterEach(route => {
  document.title = route.meta.title
})

//同步vuex和router
sync(store, router)

//关闭生产模式下给出的提示
Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  // components: { App },
  // template: '<App/>'
  render: h => h(App)
})
