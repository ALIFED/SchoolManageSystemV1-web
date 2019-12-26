/**
 * @Author yangchegntao
 * @Date 2019-12-09 09:38
 * @Description 统一管理store 并导出store
 */

import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex);

export default new Vuex.Store({
  getters,
  actions,
  mutations,
  modules: {
  }
})
