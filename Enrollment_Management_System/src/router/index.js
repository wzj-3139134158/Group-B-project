import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import staff from '@/components/staff'
import Management from '@/components/Management'
import grouping from '@/components/grouping'
import HOmePage from '@/components/HOmePage'
import Studentgrouping from '@/components/Studentgrouping'

import fenye from '@/components/fenye'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    // 登录页
    {
      path: '/HOmePage',
      name: 'HOmePage',
      component: HOmePage,
    }, 
    // 首页
    {
      path: '/staff',
      name: 'staff',
      component: staff
    },
    // 员工页
    {
      path: '/Management',
      name: 'Management',
      component: Management
    }, 
    // 学员页
    {
      path: '/grouping',
      name: 'grouping',
      component: grouping
    }, 
    // 分组页
    {
      path: '/Studentgrouping',
      name: 'Studentgrouping',
      component: Studentgrouping
    },
    {
      path: '/fenye',
      name: 'fenye',
      component: fenye
    },
  ]
})
