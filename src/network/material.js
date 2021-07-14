import { request } from './request'

export function getMaterial () {
  return request({
    url: '/material/info',
    methods: 'get'
  })
}
