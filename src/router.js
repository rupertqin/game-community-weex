import Router from 'vue-router'
import ViewHome from './assets/views/home.vue'
import ViewNews from './assets/views/news.vue'
import ViewMy from './assets/views/my.vue'

Vue.use(Router)


export default new Router({
  // mode: 'abstract',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: ViewHome },
    { path: '/news', component: ViewNews },
    { path: '/my', component: ViewMy }
  ]
})
