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
      <el-form ref="form" :model="form" :rules="rules" label-width="60px" size="mini">
        <el-form-item label="状态" prop="resource">
          <el-radio-group v-model="form.resource">
            <el-radio label="-1">全部</el-radio>
            <el-radio label="0">草稿</el-radio>
            <el-radio label="1">待审核</el-radio>
            <el-radio label="2">审核通过</el-radio>
            <el-radio label="3">审核失败</el-radio>
            <el-radio label="4">已删除</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道" prop="region">
          <el-select v-model="form.region" placeholder="请选择频道">
            <el-option label="频道一" value="shanghai"></el-option>
            <el-option label="频道二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('form')">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>根据筛选条件共查询到{{count}}条数据</span>
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
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="$router.push('/publish')"
              >
                编辑
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="deleteClick(scope.$index)"
              >
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="count"
          @current-change="pageClick"
        class="pagination">
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getContent, getStatus } from 'network/content'

export default {
  name: 'content-management',
  data () {
    return {
      form: {
        region: '',
        resource: ''
      },
      rules: {
        region: [
          { required: true, message: '请选择频道', trigger: 'blur' }
        ],
        resource: [
          { required: true, message: '请选择状态', trigger: 'blur' }
        ]
      },
      collect: null,
      result: [],
      loading: true,
      count: 0
    }
  },
  methods: {
    // 数据请求
    _getContent () {
      getContent().then(res => {
        // console.log(res)
        this.collect = res.data.collect[0].result
        this.result = res.data.collect
        this.count = this.result.length * 10
        // 关闭加载中
        this.loading = false
        // console.log(this.collect)
        // console.log(this.result)
      })
    },
    // 监听事件
    // 点击查询按钮，对数据进行筛选
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!')
          this.$message({
            type: 'success',
            message: '查询成功!'
          })
          this.loading = true
          getStatus().then(res => {
            // console.log(res.data
            // console.log(typeof this.form.resource)
            if (Number(this.form.resource) === -1) {
              this.collect = res.data.a[0].result
              this.result = res.data.a
            } else if (Number(this.form.resource) === 0) {
              this.collect = res.data.b[0].result
              this.result = res.data.b
            } else if (Number(this.form.resource) === 1) {
              this.collect = res.data.c[0].result
              this.result = res.data.c
            } else if (Number(this.form.resource) === 2) {
              this.collect = res.data.d[0].result
              this.result = res.data.d
            } else if (Number(this.form.resource) === 4) {
              this.collect = res.data.f[0].result
              this.result = res.data.f
            } else if (Number(this.form.resource) === 3) {
              this.collect = res.data.e[0].result
              this.result = res.data.e
            }
            this.count = this.result.length * 10
            // console.log(this.collect)
            // console.log(this.result)
            this.loading = false
          })
        } else {
          alert('error submit!!')
          this.$message({
            type: 'error',
            message: '查询失败!'
          })
          return false
        }
      })
    },
    // 点击页数更改展示数据
    pageClick (page) {
      this.collect = this.result[page - 1].result
      // console.log(this.collect)
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
        this.count--
        // console.log(index, this.collect)
        this.collect.splice(index, 1)
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
