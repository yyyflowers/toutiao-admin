import request from './request'
// 用户登录
export function getUser (user) {
  return request({
    method: 'post',
    url: '/user/login',
    // 请求体
    data: user
  })
}
export function getUserProfile () {
  return request({
    method: 'get',
    url: '/user/info/get'
    // 后端要求把授权的用户身份放入请求头中 axios 可以通过headers 设置请求头
    // headers: {
    //   Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NTY2NTQ4MTYsInVzZXJfaWQiOjEsInJlZnJlc2giOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZX0.4wnHcFAR5qpylolnfwXXq1GC5Wi7iGCG_VjqBOfKCqo'
    // }
  })
}
