/**
* 自定义校验规则
* @author huangxueqian
* @version 0.1.0
*/
export const rules = {
  mobile: {
    getMessage: field => field,
    validate: value =>
      value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
}
