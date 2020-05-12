import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './views/App.vue'

Vue.use(VueRouter)

// Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history', // enables accessing URL
  routes: [
    { path: '/foo', component: App }
  ]
})

new Vue({
  router
}).$mount('#app')
