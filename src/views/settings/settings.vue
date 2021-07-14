<template>
  <div id="settings">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/settings' }">个人设置</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </template>
      <div>
        <el-row :gutter="20">
          <el-col :span="16">
            <el-form ref="form" :model="user" label-width="80px">
              <el-form-item label="用户账号">
                {{user.id}}
              </el-form-item>
              <el-form-item label="手机号码">
                {{user.mobile}}
              </el-form-item>
              <el-form-item label="媒体名称">
                <el-input v-model="user.name"></el-input>
              </el-form-item>
              <el-form-item label="媒体介绍">
                <el-input type="textarea" v-model="user.desc"></el-input>
              </el-form-item>
              <el-form-item label="个人邮箱">
                <el-input v-model="user.email"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="8">
              <el-avatar shape="square"
                         :size="100"
                         fit="cover"
                         :src="user.photo"
                         @click.native="$refs.file.click()"
              ></el-avatar>
            <div class="hint">点击修改头像</div>
            <input type="file" ref="file" hidden @change="onChange">
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-dialog
      title="修改头像"
      :visible.sync="dialogVisible"
      :append-to-body="appendToBody"
      @opened="dialogOpended"
      @closed="dialogClosed">
      <div class="preview-img-wrap">
        <img
          class="preview-img"
          :src="previewImg"
          alt=""
          ref="previewImg"
        >
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sureClick">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
// 引用cropper图片剪裁器
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'
import { getUserProfile } from 'network/login'
export default {
  name: 'settings',
  data () {
    return {
      form: {
        // name: '',
        // desc: '',
        // email: ''
      },
      user: {},
      dialogVisible: false,
      appendToBody: true,
      // 预览图片
      previewImg: '',
      cropper: '',
      canvasData: null // 裁剪出来的图片数据
    }
  },
  created () {
    this._getUserProfile()
  },
  methods: {
    // 网络请求
    _getUserProfile () {
      getUserProfile().then(res => {
        // console.log(res)
        this.user = res.data
      })
    },
    // 点击事件
    // 点击保存按钮
    onSubmit () {
      console.log('submit!')
      this.form = this.user
      console.log(this.form)
      this.$bus.$emit('onSubmit', this.form)
    },
    // 点击头像进行修改,弹出文件选择框，在确认改变后弹出dialog
    onChange () {
      const file = this.$refs.file
      const blobData = window.URL.createObjectURL(file.files[0])
      this.previewImg = blobData
      // 解决相同文件不触发change事件
      this.$refs.file.value = ''
      this.dialogVisible = true
    },
    // Dialog 打开动画结束时的回调
    dialogOpended () {
      const image = this.$refs.previewImg
      // 初始化裁切器
      this.cropper = new Cropper(image, {
        aspectRatio: 1
      })
    },
    // Dialog 关闭动画结束时的回调
    dialogClosed () {
      // 销毁裁切器
      this.cropper.destroy()
    },
    // 点击修改头像的确定按钮
    sureClick () {
      this.cropper.getCroppedCanvas().toBlob(file => {
        // const formData = new FormData()
        // formData.append('photo', file)
        console.log(file)
        // 更新视图
        this.user.photo = window.URL.createObjectURL(file)
        // 关闭对话框
        this.dialogVisible = false
      })
    }
  }
}
</script>

<style scoped>
  .hint {
    height: 20px;
    width: 100px;
    background-color: rgba(0,0,0,.5);
    position: relative;
    top: -25px;
    color: #ffffff;
    font-size: 13px;
    text-align: center;
  }
  .preview-img {
    display: block;
    max-width: 100%;
    height: 200px;
  }
</style>
