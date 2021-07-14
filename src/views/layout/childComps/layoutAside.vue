<template>
      <el-menu
        :uniqueOpened="true"
        default-active="/home"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
        :collapse="isCollapse">
        <el-menu-item index="/home">
          <i class="el-icon-s-home"></i>
          <template #title>首页</template>
        </el-menu-item>
        <el-menu-item index="/content">
          <i class="el-icon-menu"></i>
          <template #title>内容管理</template>
        </el-menu-item>
        <el-menu-item index="/material">
          <i class="el-icon-folder"></i>
          <template #title>素材管理</template>
        </el-menu-item>
        <el-menu-item index="/publish">
          <i class="el-icon-s-promotion"></i>
          <template #title>发布文章</template>
        </el-menu-item>
        <el-menu-item index="/comment">
          <i class="el-icon-edit-outline"></i>
          <template #title>评论管理</template>
        </el-menu-item>
        <el-menu-item index="/fans">
          <i class="el-icon-s-custom"></i>
          <template #title>粉丝管理</template>
        </el-menu-item>
        <el-menu-item index="/settings">
          <i class="el-icon-setting"></i>
          <template #title>个人设置</template>
        </el-menu-item>
      </el-menu>
</template>

<script>
export default {
  name: 'layoutAside',
  props: {
    isCollapse: Boolean
  }
}
</script>

<style lang="less" scoped>
</style>
