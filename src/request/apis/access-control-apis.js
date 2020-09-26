/**
 * @Author yangchegntao
 * @Date 2019-12-08 16:10
 * @Description 登录退出接口统一管理
 */

import axios from "../axios";

const login = (data) => {
  return axios({
    url: '/accessControl/access/login',
    method: 'post',
    data
  })
};

const register = (data) => {
  return axios({
    url: '/accessControl/access/register',
    method: 'post',
    data
  })
};

const logout = () => {
  return axios({
    url: '/accessControl/access/logout',
    method: 'post',
  })
};

export default {
  login,
  register,
  logout
}
