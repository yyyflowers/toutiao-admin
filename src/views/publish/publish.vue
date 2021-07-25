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
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="标题" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="频道" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择频道">
              <el-option label="vuejs" value="vuejs"></el-option>
              <el-option label="html" value="html"></el-option>
              <el-option label="css" value="css"></el-option>
              <el-option label="javascript" value="javascript"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="内容" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="onDraft('ruleForm')">存入草稿</el-button>
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
            prop="name"
            label="标题"
            width="180">
          </el-table-column>
          <el-table-column
            prop="region"
            label="频道">
          </el-table-column>
          <el-table-column
            prop="desc"
            label="内容"
            width="180">
          </el-table-column>
          <el-table-column
            prop="time"
            label="发布时间"
            width="180">
          </el-table-column>
          <el-table-column
            label="操作"
            width="180">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary" icon="el-icon-edit"
                circle
                @click="editClick(scope.$index)"
              ></el-button>
              <el-button
                size="mini"
                type="danger"
                icon="el-icon-delete"
                circle
                @click="deleteClick(scope.$index)"
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div v-else>您还没有发布文章</div>
    </el-card>
    <el-dialog
      title="编辑"
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleClose"
      append-to-body>
      <div class="text item">
        <el-form :model="form" :rules="formRules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="标题" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="内容" prop="desc">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
         <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogClick()">确 定</el-button>
       </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'publish',
  data () {
    return {
      ruleForm: {
        name: '',
        region: '',
        desc: '',
        time: ''
      },
      form: {
        name: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入标题', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择频道', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: '请填写内容', trigger: 'blur' }
        ]
      },
      formRules: {
        name: [
          { required: true, message: '请输入标题', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: '请填写内容', trigger: 'blur' }
        ]
      },
      essay: [],
      num: 1000,
      dialogVisible: false,
      editIndex: null
    }
  },
  methods: {
    // 点击发布文章
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        // 验证表单
        if (valid) {
          // alert('submit!')
          this.$message({
            type: 'success',
            message: '发布成功!'
          })
          // console.log(this.ruleForm)
          const date = new Date()
          this.ruleForm.time = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
          this.essay.splice(0, 0, JSON.parse(JSON.stringify(this.ruleForm)))
          // console.log(this.essay)
          this.ruleForm = {}
        } else {
          // console.log('error submit!!')
          this.$message({
            type: 'error',
            message: '发布失败!'
          })
          return false
        }
      })
    },
    // 点击存入草稿箱
    onDraft (formName) {
      this.$refs[formName].resetFields()
      this.$message({
        type: 'success',
        message: '已存入草稿!'
      })
    },
    // 点击删除按钮
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
        // console.log(index)
        // console.log(this.essay)
        this.essay.splice(index, 1)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    handleClose (done) {
      this.$confirm('确认关闭？').then(_ => {
        done()
      }).catch(_ => {})
    },
    editClick (index) {
      this.dialogVisible = true
      this.editIndex = index
      // console.log(this.editIndex)
    },
    dialogClick () {
      this.dialogVisible = false
      // console.log(this.form.name, this.form.desc, this.editIndex)
      // console.log(this.essay)
      this.essay[this.editIndex].name = this.form.name
      this.essay[this.editIndex].desc = this.form.desc
    }
  }
}
</script>

<style scoped lang="less">
  .first-card {
    margin-bottom: 30px;
  }
</style>
