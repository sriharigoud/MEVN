import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/components/Auth'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Posts from '@/components/Posts'
import AddPost from '@/components/AddPost'
import store from '../store//index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Auth,
      children: [
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ],
      redirect: {
        name: localStorage.getItem('user') ? 'Posts' : 'Login'
      }
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/posts/add',
      name: 'AddPost',
      component: AddPost
    },
    {
      path: '/posts/edit/:id',
      name: 'EditPost',
      component: AddPost
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
