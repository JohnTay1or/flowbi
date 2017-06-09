import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import Menu from './Menu.vue'
//import * as pbi from 'powerbi-client'
import { routes } from './routes'

const router = new VueRouter ({
  routes,
  mode: 'history'
})

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueResource)

//Vue.http.options.root = 'http://127.0.0.1:1337/api/'
Vue.http.options.root = 'http://flowbi.azurewebsites.net/api/'

Vue.component('app-menu', Menu)

window.Event = new Vue();

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
