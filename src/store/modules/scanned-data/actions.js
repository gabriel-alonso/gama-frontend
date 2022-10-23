import scanDataClient from '../../../core/clients/scan-data.client'

import { SET_SCAN_DATA, SET_LOADING_SCAN_DATA } from './mutations'

export default {
  async findAll({ commit }) {
    commit(SET_LOADING_SCAN_DATA, true)

    const data = await scanDataClient.findAll()

    commit(SET_SCAN_DATA, data.data)
    commit(SET_LOADING_SCAN_DATA, false)
  }
}
