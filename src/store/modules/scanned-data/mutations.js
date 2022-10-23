export const SET_SCAN_DATA = 'SET_SCAN_DATA'
export const SET_LOADING_SCAN_DATA = 'SET_LOADING_SCAN_DATA'

export default {
  [SET_SCAN_DATA](state, scanData) {
    Object.assign(state, { scanData })
  },

  [SET_LOADING_SCAN_DATA](state, isLoadingScanData) {
    Object.assign(state, { isLoadingScanData })
  }
}
