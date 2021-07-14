<template>
  <div>
    <div class="body-radio">
      <el-radio-group v-model="collect" size="medium" @change="radioClick">
        <el-radio-button label="false">全部</el-radio-button>
        <el-radio-button label="true">收藏</el-radio-button>
      </el-radio-group>
      <el-button type="success" size="medium" @click="dialogVisible = true">添加素材</el-button>
    </div>
    <el-row :gutter="20" v-if="isshow">
      <el-col :span="4" v-for="(item, index) in imgs" :key="index">
        <el-image
          :src="item.images"
          fit="cover">
        </el-image>
        <div class="img-icon">
          <i :class="item.is_collected ? 'el-icon-star-on' : 'el-icon-star-off'"></i>
          <i class="el-icon-delete"></i>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20"  v-else>
      <el-col :span="4" v-for="(item, index) in Cimgs" :key="index">
        <el-image
          :src="item.imgs"
          fit="cover">
        </el-image>
        <div class="img-icon">
          <i class="el-icon-star-on"></i>
          <i class="el-icon-delete"></i>
        </div>
      </el-col>

    </el-row>
    <el-dialog
      title="添加素材"
      :visible.sync="dialogVisible"
      width="52%"
      append-to-body= 'append-to-body'>
      <el-upload
        class="upload-demo"
        drag
        action="http://api-toutiao-web.itheima.net/meterial/post"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <span slot="footer" class="dialog-footer">
  </span>
    </el-dialog>
  </div>
</template>

<script>
import { getMaterial } from 'network/material'
export default {
  name: 'collect',
  data () {
    return {
      dialogVisible: false,
      collect: false,
      imgs: '',
      Cimgs: '',
      isshow: true,
      appendToBody: true
    }
  },
  created () {
    this._getMaterial()
  },
  methods: {
    // 网络请求
    _getMaterial () {
      getMaterial().then(res => {
        // console.log(res)
        this.imgs = res.data.material
        this.Cimgs = res.data.collect
      })
    },
    // 监听点击事件
    // 点击收藏和全部进行切换
    radioClick () {
      this.isshow = !this.isshow
    }
  }
}
</script>

<style scoped>
  .body-radio {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  .img-icon {
    position: relative;
    top: -20px;
    background-color: rgba(204, 204, 204, .5);
    height: 15px;
    width: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  }
</style>
