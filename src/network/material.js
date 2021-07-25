import { request } from './request'

export function getMaterial (data) {
  return request({
    url: '/material/info',
    methods: 'get'
  })
}
