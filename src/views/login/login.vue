<template>
  <div class="login-container">
    <el-form ref="login-form" :model="user" :rules="rules" class="login-form">
      <el-form-item prop="mobile">
        <el-input v-model="user.mobile" placeholder="请输入手机号码"></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input v-model="user.code"  placeholder="请输入验证码"></el-input>
      </el-form-item>
      <el-form-item prop="agree">
        <el-checkbox v-model="user.agree">我已阅读并同意用户协议和隐私条款</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="login-btn" :loading="loginLoading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getUser } from 'network/login.js'
export default {
  name: 'Login',
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810',
        agree: false
      },
      loginLoading: false,
      rules: {
        mobile: [
          { required: true, message: '请输入手机号码', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ],
        agree: [
          {
            validator: (rule, value, callback) => {
              if (value) {
                callback()
              } else {
                callback(new Error('请勾选用户协议'))
              }
            },
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      // 表单验证
      this.$refs['login-form'].validate(valid => {
        // 如果验证失败,停止提交
        if (!valid) {
          return
        }
        // 验证通过,请求通过
        this.login()
      })
      // 处理后端响应结果 成功:xxxx   失败:xxxx
    },
    login () {
      // 保存数据
      const user = this.user
      // 验证通过，提交登录
      this.loginLoading = true
      getUser(user).then(res => {
        // console.log(res)
        this.$message({
          message: '登录成功',
          type: 'success'
        })
        this.loginLoading = false
        // 路由跳转到首页
        this.$router.push('/home')
      }).catch(erro => {
        console.log(erro)
        this.$message({
          message: '登录失败',
          type: 'error'
        })
        this.loginLoading = false
      })
    }
  }
}
</script>

<style lang="less">
  .login-container {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("../../assets/img/login_bg.jpg") no-repeat;
    background-size: cover;
    .login-form {
      background-color: #fff;
      padding: 50px;
      .login-btn {
        width: 100%;
      }
    }
  }
</style>
