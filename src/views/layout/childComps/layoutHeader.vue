<template>
  <div class="layout-header">
    <div>
      <i class="el-icon-s-fold" @click="iClick()"></i>
      <span>北京字节跳动科技有限公司</span>
    </div>
    <el-dropdown class="dropdown">
      <div class="dropdown-wrap">
        <img :src="user.photo" alt="">
        <span class="el-dropdown-link">{{user.name}}</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-s-tools" @click.native="$router.push('/settings')">个人设置</el-dropdown-item>
          <el-dropdown-item icon="el-icon-s-opportunity" @click.native="dropClick()">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'layoutHeader',
  props: {
    user: Object
  },
  methods: {
    iClick () {
      this.$emit('iClick')
    },
    dropClick () {
      this.$router.push('/')
    }
  },
  mounted () {
    this.$bus.$on('onSubmit', data => {
      console.log(data)
      this.user.name = data.name
      this.user.photo = data.photo
    })
  }
}
</script>

<style scoped lang="less">
  .layout-header {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .dropdown img{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }
    .dropdown-wrap {
      display: flex;
      align-items: center;
    }
  }

</style>
