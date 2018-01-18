import Router from 'vue-router'
import ViewHome from './assets/views/home.vue'
import ViewTopic from './assets/views/topic.vue'
import ViewMy from './assets/views/my.vue'

Vue.use(Router)


export default new Router({
  // mode: 'abstract',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: ViewHome },
    { path: '/topic', component: ViewTopic },
    { path: '/my', component: ViewMy }
  ]
})
