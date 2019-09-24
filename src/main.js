import Vue from 'vue'
import App from './App.vue'
// 开发配置参数
import devConfig from './devConfig'
// 引入路由
import router from './router'
// 引入公用css
import './assets/style/public.less'
// 引入全局变量
import globalVariable from './globalVariable'
// 按需引入Element-ui
import 'element-ui/lib/theme-chalk/index.css'
import element from './elementConfig'
Vue.use(element)
// 引入全局less
import './assets/style/public.less'

var render = {
  router,
  render: h => h(App),
}

// 是否引入i18n
if (devConfig.i18n.open) {
  // 引入验证
  require('./assets/validate/validate')
  var VueI18n = require('vue-i18n').default
  var messages = require('./lib/i18n').default
  Vue.use(VueI18n)
  const i18n = new VueI18n({
    locale: devConfig.i18n.lang,
    messages
  })
  render = Object.assign(render, {i18n})
}

// 是否开启vuex
if (devConfig.vuex.open) {
  const store = require('./store').default
  render = Object.assign(render, { store })
}

Vue.config.productionTip = false
Vue.prototype = Object.assign(Vue.prototype, globalVariable)
new Vue(render).$mount('#app')
