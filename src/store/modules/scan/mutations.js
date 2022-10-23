export const SET_SCAN = 'SET_SCAN'
export const SET_LOADING_SCAN = 'SET_LOADING_SCAN'

export default {
  [SET_SCAN](state, scan) {
    Object.assign(state, { scan })
  },

  [SET_LOADING_SCAN](state, isLoadingScan) {
    Object.assign(state, { isLoadingScan })
  }
}
