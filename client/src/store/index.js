import auth from './modules/auth'
import posts from './modules/posts'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    posts
  }
})
