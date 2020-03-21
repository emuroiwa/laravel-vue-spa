require('./bootstrap');

import 'es6-promise/auto'
import axios from 'axios'
import Vue from 'vue'
import VueAuth from '@websanova/vue-auth'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Index from './Index'
import auth from './auth'
import router from './router'
import VueElementLoading from 'vue-element-loading'


// Set Vue globally
window.Vue = Vue

// window variables
window.Fire =  new Vue();

// Set Vue router
Vue.router = router
Vue.use(VueRouter)

// Set Vue authentication
Vue.use(VueAxios, axios)

axios.defaults.baseURL = `http://localhost:9090/api/v1`
Vue.use(VueAuth, auth)

// components
Vue.component('index', Index)
Vue.component('VueElementLoading', VueElementLoading);


const app = new Vue({
  el: '#app',
  router
})