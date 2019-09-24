/**
* 公共函数
* @author huangxueqian
* @version 0.1.0
*/
import _ from 'lodash'

/**
  * @function toType 判断参数类型
  * @param obj 参数
*/
export function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

/**
  * @function filter 过滤null函数
  * @param obj 参数
*/
export function filter (obj) {
  for (var key in obj) {
    if (obj[key] == null) {
      delete obj[key]
    }
    if (toType(key) === 'string') {
      obj[key] = _.trim(obj[key])
    } else if (toType(obj) === 'object' || toType(obj) === 'array') {
      obj[key] = filter(obj[key])
    }
  }
  return obj
}

/**
  * @function hasClass 是否包含类
  * @param obj dom
  * @param cls 类名
*/
function hasClass (obj, cls) {
  return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

/**
  * @function addClass 添加类
  * @param obj dom
  * @param cls 类名
*/
function addClass (obj, cls) {
  if (!hasClass(obj, cls)) {
    if (obj.className == '') obj.className += cls
    else obj.className += ' ' + cls
  }
}

/**
  * @function removeClass 移除类
  * @param obj dom
  * @param cls 类名
*/
function removeClass (obj, cls) {
  if (hasClass(obj, cls)) {
    let reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    let regMark = ' ';
    if (obj.className.split(' ').length === 1) regMark = ''
    obj.className = obj.className.replace(reg, regMark)
  }
}

/**
  * @function toggleClass 开关类
  * @param obj dom
  * @param cls 类名
*/
export function toggleClass (obj, cls) {
  if (hasClass(obj, cls)) {
    removeClass(obj, cls)
  } else {
    addClass(obj, cls)
  }
}

/**
  * @function random 取区间中的数
  * @param lower 最小值
  * @param upper 最大值
  * @return 随机数
*/
export function random(lower, upper) {
	return Math.floor(Math.random() * (upper - lower)) + lower
}

/**
  * @function fmtDate 时间戳格式化
  * @param obj 时间戳
*/
export function fmtDate(obj){
    var date =  new Date(obj)
    var y = 1900+date.getYear()
    var m = "0"+(date.getMonth()+1)
    var d = "0"+date.getDate()
    return y+"."+m.substring(m.length-2,m.length)+"."+d.substring(d.length-2,d.length)
}

/**
  * @function scrollTo 锚点滚动
  * @param offsetTop{Number} 滚动位置
  * @param callback{Function} 回调函数
  * @param time{Number} 滑动频率
*/
export function scrollTo(offsetTop, callback, time = 50) {
  var distance = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
  var step = offsetTop/time;
  if (offsetTop > distance) {
   anchorDown();
  } else {
   let newTotal = distance - offsetTop;
   step = newTotal/time;
   anchorUp();
  }
  function scroll(top) {
    document.body.scrollTop = top
    document.documentElement.scrollTop = top
    window.pageYOffset = top
  }
  function anchorUp() {
    if (distance > offsetTop) {
      distance -= step;
      scroll(distance);
      setTimeout(anchorUp, 10)
    } else {
      scroll(offsetTop);
      typeof callback === 'function' && callback();
    }
  }
  function anchorDown() {
     if (distance < offsetTop) {
        distance += step;
        scroll(distance);
        setTimeout(anchorDown, 10)
     } else {
       scroll(offsetTop);
       typeof callback === 'function' && callback();
     }
  }
}
