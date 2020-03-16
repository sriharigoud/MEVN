// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import * as VeeValidate from 'vee-validate'
import axios from 'axios'
import store from './store'
import VueAxios from 'vue-axios'
import * as VueIziToast from 'vue-izitoast'
import errorResponseHandler from './helpers/errorHandler'

Vue.use(VueIziToast)
Vue.use(VueAxios, axios)
// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(VeeValidate)
Vue.directive('VeeValidate', VeeValidate)
errorResponseHandler()
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token') || ''
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
