import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import Menu from './Menu.vue'
import Visual from './Visual.vue'
import * as pbi from 'powerbi-client'

console.log('Hello')

//var models = window['powerbi-client'].models
//var permissions = models.Permissions.All

console.log('Hello again')

Vue.use(ElementUI)

Vue.component('app-menu', Menu)
Vue.component('app-visual', Visual)

new Vue({
  el: '#app',
  render: h => h(App)
})
