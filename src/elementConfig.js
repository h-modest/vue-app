/**
* Element-ui组件库，按需加载
* @author huangxueqian
* @version 0.1.0
*/
import { Select, Option, Input, Row, Col, Button } from 'element-ui'
const element = {
  install: function (Vue) {
    Vue.use(Select)
    Vue.use(Option)
    Vue.use(Input)
    Vue.use(Row)
    Vue.use(Col)
    Vue.use(Button)
  }
}
export default element
