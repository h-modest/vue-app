/**
* 全局参数配置
* @author huangxueqian
* @version 0.1.0
*/
import api from './lib/api'
import devConfig from './devConfig'

let global = {
  $api: api
}

// 是否开启echarts
if (devConfig.echarts.open) {
  let echarts = require('echarts')
  global = Object.assign(global, { $echarts: echarts })
}

export default global;
