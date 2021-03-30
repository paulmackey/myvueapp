import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './views/App'
import Home from './components/Home'
import Posts from './components/Posts'
import Post from './components/Post'
import Projects from './components/Projects'
import About from './components/About'
import PageNotFound from './components/PageNotFound'
import SubmissionSuccess from './components/SubmissionSuccess'
import SubmissionFail from './components/SubmissionFail'

import '@/assets/styles/All.less'
Vue.use(VueRouter)

// Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history', // enables accessing URL
  routes: [
    {
      path: '/', component: Home,
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
    },
    {
      path: '/projects/',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/about/',
      name: 'About',
      component: About
    },
    {
      path: '/thanks',
      name: 'success',
      component: SubmissionSuccess
    },
    {
      path: '/404',
      name: 'fail',
      component: SubmissionFail
    },
    {
      path: "*",
      component: PageNotFound
    }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
