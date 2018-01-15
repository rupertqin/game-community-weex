import Router from 'vue-router'
import ViewHome from './assets/views/home.vue'
import ViewMain from './assets/views/main.vue'
import ViewTopic from './assets/views/topic.vue'
import ViewMy from './assets/views/my.vue'

Vue.use(Router)


export default new Router({
  // mode: 'abstract',
  routes: [
    {
      path: '/main',
      component: ViewMain,
      children: [
        { path: 'home', component: ViewHome },
        { path: 'topic', component: ViewTopic },
      ]
    },
    { path: '/', redirect: '/main/home' },
    { path: '/my', component: ViewMy }
  ]
})
