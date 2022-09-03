export const SET_REQUESTS = 'SET_REQUESTS'
export const SET_LOADING_REQUESTS = 'SET_LOADING_REQUESTS'

export default {
  [SET_REQUESTS](state, requests) {
    Object.assign(state, { requests })
  },

  [SET_LOADING_REQUESTS](state, isLoadingRequests) {
    Object.assign(state, { isLoadingRequests })
  }
}
