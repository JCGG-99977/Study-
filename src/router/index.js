import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/homepage'
// 详情页面
import data from '@/views/data'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path:'/data',
      name: 'data',
      component: data
    }
  ]
})
