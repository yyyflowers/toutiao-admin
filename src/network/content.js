import { request } from './request'
export function getContent () {
  return request({
    url: '/content/info/get'
  })
}
