import scanClient from '../../../core/clients/scan.client'

import { SET_SCAN, SET_LOADING_SCAN } from './mutations'

export default {
  async findAll({ commit }) {
    commit(SET_LOADING_SCAN, true)

    const data = await scanClient.findAll()

    commit(SET_SCAN, data.data)
    commit(SET_LOADING_SCAN, false)
  }
}
