// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// ElementUI使用
import ElementUI from 'element-ui';
// iview 使用
import iview from 'view-design'
import 'element-ui/lib/theme-chalk/index.css';
import i18n from "./vi18n/i18ns";
// 将api挂在上Vue原型上
import api from '@/request/apis'
import store from '@/store/index'
// import mock from '@/mock/mock'
Vue.use(ElementUI);
Vue.use(iview);
Vue.prototype.$api = api;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  // mock,
  components: { App },
  template: '<App/>'
});
