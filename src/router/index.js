import Vue from 'vue'
import VueRouter from 'vue-router'

const SignIn = resolve => require(['../views/login/signIn.vue'], resolve)

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/signIn'
  },
  {
    path: '/signIn',
    component: SignIn,
    meta: {
      title: '登录',
      keepAlive: false
    },
    beforeEnter:(to,from,next)=>{
      document.title = to.matched[0].meta.title
      next()
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router