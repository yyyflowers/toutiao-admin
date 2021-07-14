module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        api: '@/api',
        assets: '@/assets',
        components: '@/components',
        network: '@/network',
        styles: '@/styles',
        views: '@/views',
        utils: '@/utils'
      }
    }
  }
}
