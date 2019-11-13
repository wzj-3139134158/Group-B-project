// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'    /* 注册路由  */


import '../src/public/css/staff.css'   /* 引入css文件 */

import '../src/public/js/staff.js'    /* 引入空js文件 */
      
import '../src/public/css/Management.css'

import '../src/public/css/grouping.css'   /* 引入分组页面css文件 */

import '../src/public/css/HOmePage.css' 






//引入element-ui组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
