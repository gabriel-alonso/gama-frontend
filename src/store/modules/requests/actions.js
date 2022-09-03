import requestClient from '../../../core/clients/request.client'

import { SET_REQUESTS, SET_LOADING_REQUESTS } from './mutations'

export default {
  async findAll({ commit }) {
    commit(SET_LOADING_REQUESTS, true)

    const data = await requestClient.findAll()

    commit(SET_REQUESTS, data.data)
    commit(SET_LOADING_REQUESTS, false)
  }
}
