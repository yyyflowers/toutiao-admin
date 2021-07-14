<template>
  <div class="content-management">
    <el-card class="box-card first-card">
    <template #header>
      <div class="card-header">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/content' }">内容管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </template>
    <div class="text item">
      <el-form ref="form" :model="form" label-width="40px" size="mini">
        <el-form-item label="状态">
          <el-radio-group v-model="form.resource">
            <el-radio label="全部"></el-radio>
            <el-radio label="草稿"></el-radio>
            <el-radio label="待审核"></el-radio>
            <el-radio label="审核通过"></el-radio>
            <el-radio label="审核失败"></el-radio>
            <el-radio label="已删除"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道">
          <el-select v-model="form.region" placeholder="请选择频道">
            <el-option label="频道一" value="shanghai"></el-option>
            <el-option label="频道二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-date-picker
            v-model="value1"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>根据筛选条件共查询到1000条数据</span>
        </div>
      </template>
      <div class="text item">
        <el-table
          :data="collect"
          stripe
          style="width: 100%"
          v-loading="loading">
          <el-table-column
            label="封面"
            width="180">
            <template #default="scope">
              <img :src="scope.row.images" alt="">
            </template>
          </el-table-column>
          <el-table-column
            prop="title"
            label="标题"
            width="180">
          </el-table-column>
          <el-table-column
            label="状态">
            <template #default="scope">
              <el-tag v-if="scope.row.status === 1">待审核</el-tag>
              <el-tag type="success" v-else-if="scope.row.status === 2">审核通过</el-tag>
              <el-tag type="info" v-else-if="scope.row.status === 0">草稿</el-tag>
              <el-tag type="warning" v-else-if="scope.row.status === 4">已删除</el-tag>
              <el-tag type="danger" v-else-if="scope.row.status === 3">审核失败</el-tag>
              </template>
          </el-table-column>
          <el-table-column
            prop="pubDate"
            label="发布时间">
          </el-table-column>
          <el-table-column
            label="操作"
            width="180">
            <template>
              <el-button
                size="mini"
                @click="$router.push('/publish')">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="deleteClick()">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000"
          @current-change="pageClick"
        class="pagination">
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getContent } from 'network/content'

export default {
  name: 'content-management',
  data () {
    return {
      form: {
        region: '',
        date1: '',
        date2: '',
        resource: ''
      },
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: '',
      collect: null,
      result: [],
      loading: true
    }
  },
  methods: {
    // 数据请求
    _getContent () {
      getContent().then(res => {
        this.collect = res.data.collect[0].result
        this.result = res.data.collect
        // 关闭加载中
        this.loading = false
      })
    },
    // 监听事件
    onSubmit () {
      console.log('submit!')
    },
    // 点击页数更改展示数据
    pageClick (page) {
      this.collect = this.result[page - 1].result
    },
    deleteClick (index) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        console.log(index)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  },
  created () {
    this._getContent()
  }
}
</script>

<style scoped lang="less">
  .first-card {
    margin-bottom: 30px;
  }
  .pagination {
    margin-top: 20px;
    text-align: center;
  }
</style>
