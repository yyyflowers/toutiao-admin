<template>
  <div id="publish">
    <el-card class="box-card first-card">
      <template #header>
        <div class="card-header">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/publish' }">发布文章</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </template>
      <div class="text item">
        <el-form ref="publish-form" :model="form" :rules="rules" label-width="60px">
          <el-form-item label="标题" prop="title">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="内容" prop="content">
            <el-input type="textarea" v-model="form.content"></el-input>
          </el-form-item>
          <el-form-item label="封面" prop="cover">
            <el-radio-group v-model="form.cover">
              <el-radio label="1">单图</el-radio>
              <el-radio label="3">三图</el-radio>
              <el-radio label="0">无图</el-radio>
              <el-radio label="-1">自动</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="频道" prop="channel">
            <el-select v-model="form.channel" placeholder="请选择频道">
              <el-option label="javascript" value="javascript"></el-option>
              <el-option label="vue" value="vue"></el-option>
              <el-option label="jquery" value="jquery"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onPublish">发表</el-button>
            <el-button @click="onDraft">存入草稿</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card class="box-card">
      <div v-if="essay.length !== 0">
        <el-table
          :data="essay"
          stripe
          style="width: 100%">
          <el-table-column
            label="封面"
            width="180">
          </el-table-column>
          <el-table-column
            prop="title"
            label="标题"
            width="180">
          </el-table-column>
          <el-table-column
            prop="content"
            label="内容"
            width="180">
          </el-table-column>
          <el-table-column
            prop="channel"
            label="频道">
          </el-table-column>
          <el-table-column
            label="操作"
            width="180">
            <template>
              <el-button
                size="mini"
                type="primary" icon="el-icon-edit"
                circle></el-button>
              <el-button
                size="mini"
                type="danger"
                icon="el-icon-delete"
                circle></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div v-else>您还没有发布文章</div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'publish',
  data () {
    return {
      form: {
        title: '', // 文章标题
        content: '', // 文章内容
        cover: {
          type: 0, // 封面类型，-1自动 0无图 1一张 3三张
          images: [] // 图片地址
        },
        channel: ['javascript', 'vue', 'jquery'] // 频道
      },
      rules: {
        title: [
          { required: true, message: '请输入文章标题', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入文章内容', trigger: 'blur' }
        ],
        cover: [
          { type: 'date', required: true, message: '请选择封面类型', trigger: 'blur' }
        ],
        channel: [
          { type: 'date', required: true, message: '请选择频道', trigger: 'change' }
        ]
      },
      essay: [],
      key: null
    }
  },
  methods: {
    // 点击发布文章
    onPublish () {
      this.$refs['publish-form'].validate(valid => {
      // this.$refs.from.validate((valid) => {
        if (valid) {
          this.$message({
            type: 'success',
            message: '发布成功!'
          })
        } else {
          return false
        }
      })
      // 验证表单
      this.key = this.form
      this.essay.push(this.key)
    },
    // 点击存入草稿箱
    onDraft () {
      this.$message({
        type: 'success',
        message: '已存入草稿!'
      })
    }
    // created () {
    //   this._getPublish()
    // }
  }
}
</script>

<style scoped lang="less">
  .first-card {
    margin-bottom: 30px;
  }
</style>
