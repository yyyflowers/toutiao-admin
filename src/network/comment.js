import { request } from './request'

export function getComment () {
  return request({
    url: '/comment/info',
    methods: 'get'
  })
}
