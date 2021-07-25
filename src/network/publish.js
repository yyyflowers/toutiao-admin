import { request } from './request'
export function getSingle () {
  return request({
    methods: 'get',
    url: '/publish/article/single'
  })
}
export function getDouble () {
  return request({
    methods: 'get',
    url: '/publish/article/double'
  })
}
