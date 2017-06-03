import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import Menu from './Menu.vue'
import Visual from './Visual.vue'
import Customer from './Customer.vue'
import * as pbi from 'powerbi-client'
import { routes } from './routes'

const router = new VueRouter ({
  routes,
  mode: 'history'
})

Vue.use(ElementUI)
Vue.use(VueRouter)

Vue.component('app-menu', Menu)
Vue.component('app-visual', Visual)
Vue.component('app-customer', Customer)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
