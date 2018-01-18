// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './mixins'

// const meta = weex.requireModule('meta')


Vue.mixin(mixins)
// meta.setViewport({  
//   width: 750
// })
new Vue(Vue.util.extend({ el: '#root', router, store }, App))
router.push('/home')