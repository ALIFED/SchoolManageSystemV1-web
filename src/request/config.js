/**
 * @Author yangchengtao
 * @Date 2019-12-08 14:47
 * @Description axios基本配置
 */

export default {
  method: '',
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  data: {},
  timeout: 10000, // 设置超时时间
  withCredentials: true, // 携带凭证
  responseType: 'json'

}
