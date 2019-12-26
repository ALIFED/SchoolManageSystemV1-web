/**
 * @Author yangchegntao
 * @Date 2019-12-08 16:10
 * @Description 前端接口统一管理
 */

import axios from "./axios";

const login = (data) => {
  return axios({
    url: '/login',
    method: 'post',
    data
  })
};

const getAll = () => {
  return axios({
    url: '/menu',
    method: 'get'
  })
};

export default {
  login,
  getAll
}
