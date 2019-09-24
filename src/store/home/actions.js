import * as types from '../mutation-types'
import api from '@/lib/api'

export const setCount = ({ commit }, data) => {
  api.post('product', data, res => {
    commit(types.SET_NUMBER, res)
  })
}
