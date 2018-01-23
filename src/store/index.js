// import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import { state, getters } from './state'

// Vuex is auto installed on the web
if (WXEnvironment.platform !== 'Web') {
  Vue.use(Vuex)
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
