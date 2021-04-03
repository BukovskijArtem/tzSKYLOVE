import Vue from 'vue'
import Router from 'vue-router'
import basicTable from '@/components/basicTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'basicTable',
      component: basicTable
    }
  ]
})
