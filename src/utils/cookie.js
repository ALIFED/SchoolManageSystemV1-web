/**
 * @Author yangchegntao
 * @Date 2019-12-08 19:10
 * @Description Cookie工具
 */

import Cookie from 'js-cookie'

/**
 * 设置Cookie
 * @param name Cookie name
 * @param value Cookie value
 */
function cookieSet(name, value) {
  Cookie.set(name, value);
}

/**
 * 创建具有实效的Cookie
 * @param name Cookie name
 * @param value Cookie value
 * @param expires 时效 单位为天
 */
function cookieSetWithExpires(name, value, expires) {
  Cookie.set(name, value, {expires: expires});
}

/**
 * 为当前页创建expires天的Cookie
 * @param name Cookie name
 * @param value Cookie value
 * @param expires 时效 单位为天
 * @param path 当前页路径
 */
function cookieSetWithExpirseToCurrentPage(name, value, expires, path) {
  Cookie.set(name, value, {expires: expires, path: path});
}

/**
 * 获取name为name的value
 * @param name Cookie name
 */
function getCookieValueWithName(name) {
  Cookie.get(name);
}

/**
 * 获取所有Cookie
 * return => {name: , value: }
 */
function getAllCookieValue() {
  Cookie.get();
}

/**
 * 删除Cookie 如果值设置了路径，那么不能用简单的delete方法删除值，需要在delete时指定路径
 * @param name
 * @param path
 */
function deleteCookie(name, path) {
  if(path === null) {
    Cookie.remove(name);
  } else {
    Cookie.remove(name, {path: path})
  }
}

/**
 * 以JSON形式获取Cookie
 * @param name
 */
function getCookieToJSON(name) {
  Cookie.getJSON(name);
}

export default {
  cookieSet,
  cookieSetWithExpires,
  cookieSetWithExpirseToCurrentPage,
  getCookieValueWithName,
  getAllCookieValue,
  deleteCookie,
  getCookieToJSON
}

