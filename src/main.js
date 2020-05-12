import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './views/App'
import Posts from './components/Posts'
import Post from './components/Post'

Vue.use(VueRouter)

// Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history', // enables accessing URL
  routes: [
    { path: '/', component: App,
    },
    {
      path: '/blog/',
      name: 'blog-home',
      component: Posts
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: Post
    }
  ]
})

new Vue({
  router
}).$mount('#app')
