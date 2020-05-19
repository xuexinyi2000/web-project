// 路由规则
import Vue from 'vue'
import Router from 'vue-router'
import adminLogin from '../components/admin/Login.vue'
import adminHome from '../components/admin/home.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    // “/”重定向到管理员登录页面
    { path: '/', redirect: '/adminlogin'},
    { path: '/adminlogin', component: adminLogin },
    { path: '/adminhome', component: adminHome }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.path === '/adminlogin'){
    next();
  }
  if(!window.sessionStorage.getItem('admin_id')){
    return next('/adminlogin');
  }
  next();
})


export default router;