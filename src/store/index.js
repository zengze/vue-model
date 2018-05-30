import Vue from 'vue'
import Vuex from 'vuex'
import { mutations, actions } from './types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tableData: []
  },
  mutations: {
    [mutations.LOGIN_SUCCESS_DATA](state, payload) {
      state.tableData = payload.tableData;
    }
  }
})
