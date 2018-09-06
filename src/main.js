// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueParticles from 'vue-particles'

import VueRouter from 'vue-router'

import App from './App'

import Hello from './components/Hello'
import Stuff from './components/Stuff'
import Contact from './components/Contact'

Vue.use(VueRouter)
Vue.use(VueParticles)

const routes = [
  { path: '/', component: Hello, Stuff } ,
  { path: '/contact', component: Contact }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App, Hello, Stuff, Contact},
  router
}).$mount('#app')
