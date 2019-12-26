import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/Login'
import index from '@/views/Index'
import error from '@/views/404page'
import test from '@/test/test'
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/error',
      name: 'error',
      component: error
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
});

// 添加导航守卫
router.beforeEach((to, from, next) => {
  let user = sessionStorage.getItem('user');
  // 如果访问登录界面，但是会话存在，则说明用户以登录，直接跳转到主页
  // 如果访问非登录界面，会话不存在，跳转到登录页面
  if(to.path === '/login') {
    if(user) {
      next({path: '/index'});
    } else {
      next();
    }
  } else {
    if(!user) {
      next({path: '/login'});
    } else {
      next();
    }
  }
});

export default router
