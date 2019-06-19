import Vue from 'vue'
import Router from 'vue-router'

import hell from '@/components/HelloWorld.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [{
    path: '/hell',
    name: 'hell',
    component: hell,
    meta: {
      title: '登录'
    }
  }]
})