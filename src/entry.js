// import Vue from 'vue'
import App from './App.vue'
import router from './router'


console.log('fires')


new Vue(Vue.util.extend({ el: '#root', router }, App));

router.push('/');