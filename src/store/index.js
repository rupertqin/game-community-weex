// import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

// Vuex is auto installed on the web
if (WXEnvironment.platform !== 'Web') {
  Vue.use(Vuex)
}

const state = {
  isSidebarOpen: false,
}

const  getters = {
  isSideBarOpen (state, getters) {
    return state.isSidebarOpen
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
