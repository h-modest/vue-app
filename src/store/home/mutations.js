import * as types from '../mutation-types'

export default {
  [types.SET_NUMBER] (state, data) {
    state.number = data
  }
}
