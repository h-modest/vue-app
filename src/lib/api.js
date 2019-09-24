/**
* ajax请求配置文件
* @author huangxueqian
* @version 0.1.0
*/
import config from '../config'
import axios from 'axios'
import { filter } from './util'

function apiAxios (method, url, params, success) {
  if (params) {
    params = filter(params)
  }
  const isPost = method === 'POST' || method === 'PUT'

  axios({
    method: method,
    url: url,
    data: isPost ? params : null,
    params: !isPost ? params : null,
    baseURL: config.api_url,
    changeOrigin:true,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: false
  })
    .then(res => {
      success(res.data)
    })
    .catch(err => {
      let res = err.response
      if (err) {
        throw new Error('api error, HTTP CODE: ' + res.status);
      }
    })
}

export default {
  get: (url, params, success) => {
    return apiAxios('GET', url, params, success)
  },
  post: (url, params, success) => {
    return apiAxios('POST', url, params, success)
  },
  put: (url, params, success) => {
    return apiAxios('PUT', url, params, success)
  },
  delete: (url, params, success) => {
    return apiAxios('DELETE', url, params, success)
  }
}
