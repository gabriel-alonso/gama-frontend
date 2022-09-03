import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import requestsModule from './modules/requests'

export default new Vuex.Store({
  modules: {
    requestsModule
  }
})
