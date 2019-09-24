/**
* 校验配置文件
* @author huangxueqian
* @version 0.1.0
*/
import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'

import VueI18n from 'vue-i18n'
import zh_CN from 'vee-validate/dist/locale/zh_CN'
import { dictionary } from './dictionary'
import { rules } from './rules'
import devConfig from '../../devConfig.js'
Vue.use(VueI18n)

Vue.use(VeeValidate, {
  locale: devConfig.i18n.lang,
  dictionary: {
    zh_CN
  }
})

Validator.extend('mobile', rules.mobile)
Validator.localize(dictionary)
