// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueParticles from 'vue-particles'

import VueRouter from 'vue-router'

import App from './App'

import Hello from './components/Hello'
import About from './components/About'
import People from './components/People'
import GettingInvolved from './components/GettingInvolved'

Vue.use(VueRouter)
Vue.use(VueParticles)

const routes = [
  {path: '/', component: Hello},
  {path: '/about', component: About},
  {path: '/people', component: People},
  {path: '/get-involved', component: GettingInvolved}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App, Hello, About, People, GettingInvolved },
  router
}).$mount('#app')
