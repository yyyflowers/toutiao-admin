<template>
  <div id="layout">
    <el-container class="container">
      <el-aside width="auto" class="aside">
        <layout-aside class="aside-menu" :is-collapse="isCollapse"></layout-aside>
      </el-aside>
      <el-container>
        <el-header class="header">
          <layout-header :user="user" @iClick="iClick()"></layout-header>
        </el-header>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import layoutAside from './childComps/layoutAside'
import layoutHeader from './childComps/layoutHeader'
import { getUserProfile } from 'network/login'

export default {
  name: 'layout',
  data () {
    return {
      user: {},
      isCollapse: false
    }
  },
  components: {
    layoutAside,
    layoutHeader
  },
  created () {
    this._getUserProfile()
  },
  methods: {
    // 除了登录接口，其他接口都需要提供身份表示token才能获取数据
    _getUserProfile () {
      getUserProfile().then(res => {
        // console.log(res)
        this.user = res.data
      })
    },
    iClick () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="less" scoped>
  .container {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    .aside {
      .aside-menu {
        height: 100%;
      }
    }
    .header {
      border-bottom: 1px solid #a8a9a9;
    }
    .main {}
  }
</style>
