import Home from './Home.vue'
import Customer from './Customer.vue'
import Visual from './Visual.vue'

export const routes = [
  { path: '', component: Home },
  { path: '/customer', component: Customer },
  { path: '/visual', component: Visual },
]
