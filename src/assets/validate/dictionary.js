/**
* 校验
* @author huangxueqian
* @version 0.1.0
*/
export const dictionary = {
  cn: {
    messages: {
      required: field => '请输入' + field,
      mobile: '联系方式格式错误'
    },
    attributes: {
      mobile: '联系电话',
    }
  },
  en: {
    messages: {
      required: field => 'please ' + field,
      mobile:  'mobile error'
    },
    attributes: {
      mobile: 'mobile'
    }
  }
}
