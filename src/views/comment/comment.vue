<template>
  <div id="comment">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/comment' }">评论管理</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </template>
      <div v-loading="loading">
        <el-table
          :data="comment"
          stripe
          style="width: 100%">
          <el-table-column
            prop="title"
            label="标题"
            width="180">
          </el-table-column>
          <el-table-column
            prop="totalComment"
            label="总评论数"
            width="180">
          </el-table-column>
          <el-table-column
            prop="totalFans"
            label="粉丝评论数">
          </el-table-column>
          <el-table-column
            label="状态">
            <template slot-scope="scope">
              <el-tag v-if="scope.row.status === true" type="success">正常</el-tag>
              <el-tag v-if="scope.row.status === false" type="danger">关闭</el-tag>
            </template>
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.status"
                active-color="#13ce66"
                inactive-color="#ff4949"
              @click.native="operateClick">
              </el-switch>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage1"
          :page-sizes="[100,200,300,400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getComment } from 'network/comment'
export default {
  name: 'comment',
  data () {
    return {
      comment: null,
      currentPage1: 1,
      loading: true
    }
  },
  created () {
    this._getComment()
  },
  methods: {
    // 网络请求
    _getComment () {
      getComment().then(res => {
        // console.log(res)
        this.comment = res.data.comment[0].result
        this.result = res.data.comment
        // 数据加载成功时关闭loading
        this.loading = false
      })
    },
    // 监听点击事件
    // 点击操作按钮时
    operateClick () {
      this.$message({
        showClose: true,
        message: '操作成功',
        type: 'success'
      })
    },
    // 点击页码时
    handleCurrentChange (page) {
      this.comment = this.result[page - 1].result
    }
  }
}
</script>

<style scoped>

</style>
