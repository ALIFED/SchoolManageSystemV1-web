/**
 * @Author yangchegntao
 * @Date 2019-12-26 14:15
 * @Description 数据模拟
 */

import Mock from 'mockjs'

Mock.mock('http://localhost:8080/user', {
  'name': '@name',
  'email': '@email',
  'age|1-10': 5
});

Mock.mock('http://localhost:8080/menu', {
  'id': '@increment',
  'name': 'menu'
});

Mock.mock('http://localhost:8080/login', {
  dataddd: {
    username: 'sssssss',
    token: 'adfafadfasdfasdfasdfasdf'
  }
});

export default Mock

