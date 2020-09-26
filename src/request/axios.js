/**
 * @Author yangchengtao
 * @Date 2019-12-08 14:53
 * @Description 封装axios
 */

import axios from 'axios'
import configs from './config'
import qs from 'qs'
import router from '@/router/index'
import Cookie from '@/utils/cookie'
import {Loading} from 'element-ui'

export default function _axios(options) {
  return new Promise(function (resolve, reject) {
    const instance = axios.create({
      baseURL: configs.baseURL,
      headers: {},
      // transformResponse` 在传递给 then/catch 前，允许修改响应数据
      transformResponse: [function (date) {}]
    });
    // 创建loading
    let loading;
    // 配置requset拦截器
    instance.interceptors.request.use(
      config => {
        console.log(config);
        // 请求开始的时候开启全屏 loading 动画
        loading = Loading.service({
          lock: true,
          text: '努力加载中...',
          background: 'rgba(255, 255, 255, 0)',
        });
        // 携带Token
        /*let token = Cookie.getCookieValueWithName('token');
        console.log(token);
        if(token) {
          config.header.accessToken = token;
        } else {
          router.push('/login');
        }*/
        config.data = qs.stringify(config.data);
        return config;
      },
      // 请求失败处理
      error => {
        loading.close();
        console.log('request: ', error);
        const errorInfo = error.response;
        console.log(errorInfo);
        Promise.reject(error);
      }
    );

    // 配置响应拦截器
    instance.interceptors.response.use(
      response => {
        // 相应时关闭加载动画
        console.log(response);
        loading.close();
        let data;
        // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
        if(response.data === undefined) {
          data = JSON.stringify(response.request.responseText);
        } else {
          data = response.data;
        }
        /*switch(data.code) {
          case 1001:

        }*/
        console.log(data);
        return data;
      },
      error => {
        loading.close();
        if(error && error.response) {
          switch(error.response.status) {
            case 400:
              err.message = '请求错误';
              break;
            case 401:
              err.message = '未授权，请登录';
              break;
            case 403:
              err.message = '拒绝访问';
              break;
            case 404:
              err.message = `请求地址出错: ${err.response.config.url}`;
              break;
            case 408:
              err.message = '请求超时';
              break;
            case 500:
              err.message = '服务器内部错误';
              break;
            case 501:
              err.message = '服务未实现';
              break;
            case 502:
              err.message = '网关错误';
              break;
            case 503:
              err.message = '服务不可用';
              break;
            case 504:
              err.message = '网关超时';
              break;
            case 505:
              err.message = 'HTTP版本不受支持';
              break;
            default:
          }
        }
        console.log(error);
        return Promise.reject(error);
      }
    );

    // 处理请求
    instance(options).then(
      res => {
        resolve(res);
        return false;
      }
    ).catch(
      error => {
      reject(error);
    })
  }).catch(err => {})
}



