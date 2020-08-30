import Vue from 'vue'
import VueRouter from 'vue-router'

const SignIn = ()=> import('../views/login/signIn.vue')
const SignUp = ()=> import('../views/login/signUp.vue')

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
  },
  {
    path: '/signUp',
    component: SignUp,
    meta: {
      title: '注册',
      keepAlive: false
    },
    beforeEnter:(to,from,next)=>{
      document.title = to.matched[0].meta.title
      next()
    }
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router