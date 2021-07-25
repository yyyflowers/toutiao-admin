import { request } from './request'
export function getContent () {
  return request({
    url: '/content/info/get'
  })
}

export function getStatus () {
  return request({
    url: '/content/info?status'
  })
}
