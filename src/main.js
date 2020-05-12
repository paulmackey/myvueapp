import Vue from 'vue'
import App from './App.vue'

/* import Post from '@/views/Post.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  { path: '/foo', component: Post }
]

const router = new VueRouter({
  routes
  // mode: 'history', // will need htaccess for this to work
  // base: process.env.NODE_ENV === 'development' ? '/' : '/toyota/',
})
*/
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
