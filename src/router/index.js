import Vue from 'vue'
import Router from 'vue-router'
import Base from './routes/base'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    Base
  ]
})
