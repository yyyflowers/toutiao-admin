<template>
  <div id="material">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/material' }">素材管理</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </template>
      <collect></collect>
    </el-card>
  </div>
</template>

<script>
import collect from '../../collect'
export default {
  name: 'material',
  components: {
    collect
  }
}
</script>

<style scoped>
</style>
