import Vue from 'vue'
import Router from 'vue-router'

import hell from '@/components/HelloWorld.vue'
import home from '@/components/home.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: home,
    meta: {
      title: 'test'
    }
  },{
    path: '/hell',
    name: 'hell',
    component: hell,
    meta: {
      title: '登录'
    }
  }]
})