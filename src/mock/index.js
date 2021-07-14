import Mock from 'mockjs'

// 设置全局延时 没有延时的话有时候会检测不到数据变化 建议保留
Mock.setup({
  timeout: '300-600'
})
// 用户登录
Mock.mock(/\/user\/login/, 'post', {
  name: '橙橙橙',
  id: 1
})
// 用户信息获取
Mock.mock(/\/user\/info\/get/, 'get', {
  name: '橙橙橙',
  id: 152354546363,
  photo: 'https://img0.baidu.com/it/u=3311900507,1448170316&fm=26&fmt=auto&gp=0.jpg',
  mobile: '13911111111',
  email: '123123@163.com',
  desc: '经费是否会全额返还全额潜伏期问过我叫吧去给几千个机器哦无法区分级'
})
// 内容管理的获取
Mock.mock(/\/content\/info\/get/, 'get', {
  data: {
    total: 118680,
    page: '@incerment(1)'
  },
  'collect|100': [
    {
      page: '@increment(1)',
      'result|10': [
        {
          id: '@integer(11352545365465,90054352332356)',
          images: '@dataImage(120x90)',
          title: '@ctitle( 7, 12 )',
          status: '@natural(0,4)',
          pubDate: '@datetime()'
        }
      ]
    }
  ],
  'result|10': [
    {
      id: '@integer(11352545365465,90054352332356)',
      images: '@dataImage(120x90)',
      title: '@ctitle( 7, 12 )',
      status: '@natural(0,4)',
      pubDate: '@datetime()'
    }
  ]
})

// 发布文章
// Mock.mock(/\/publish\/article/, 'post', {
//   name: '橙',
//   id: 1,
//   photo: 'https://img0.baidu.com/it/u=3311900507,1448170316&fm=26&fmt=auto&gp=0.jpg',
//   mobile: '13911111111'
// })

// Mock.mock(/\/publish\/article/, 'post', {
//   name: '橙橙橙',
//   id: 1
// })

// 素材管理的获取
Mock.mock(/\/material\/info/, 'get', {
  'material|20': [
    {
      images: '@dataImage(120x90)',
      'is_collected|1': true
    }
  ],
  'collect|12': [
    {
      imgs: '@dataImage(120x90)'
    }
  ]
})

// 评论管理的获取
Mock.mock(/\/comment\/info/, 'get', {
  'comment|4': [
    {
      page: '@increment(1)',
      'result|100': [
        {
          title: '@ctitle( 7, 12 )',
          'totalComment|5-50': 5,
          'totalFans|50-200': 50,
          'status|1': true
        }
      ]
    }
  ]
})
