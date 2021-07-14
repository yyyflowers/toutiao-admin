import { request } from './request'
export function getPublish () {
  return request({
    methods: 'post',
    url: '/publish/article'
  })
}
