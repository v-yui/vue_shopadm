import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/login.vue'
import Home from '../components/home.vue'
import Welcome from '../components/welcome.vue'
import Users from '../components/user/users.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome },
      { path: '/Users', component: Users }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
// to 即将要进入的目标 路由对象
// from 当前导航正要离开的路由
// next Function
router.beforeEach((to, from, next) => {
  // 路径是/login则直接跳转，若不是则获取token，判断是否有token值
  // 有则继续跳转，无则强制跳回/login
  if (to.path === '/login') return next()
  // getItem() 作为 Storage 接口的方法，接受一个键名（key name）作为参数，并返回对应键名的值（key's value）。
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
