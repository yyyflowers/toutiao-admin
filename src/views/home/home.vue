<template>
  <div id="home">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="box-card" shadow="hover">
          <div class="text item" @click="contentClick">
            <i class="el-icon-menu icon"></i>
            <span>内容管理</span>
          </div>
       </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card" shadow="hover">
          <div class="text item" @click="materialClick">
            <i class="el-icon-folder icon"></i>
            <span>素材管理</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card" shadow="hover">
          <div class="text item" @click="commentClick">
            <i class="el-icon-edit-outline icon"></i>
            <span>评论统计</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card" shadow="hover">
          <div class="text item" @click="fansClick">
            <i class="el-icon-s-custom icon"></i>
            <span>粉丝统计</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-card class="box-card2" shadow="hover">
      <div class="text item">
        <div ref="main" style="width: 1020px;height:400px;"></div>
      </div>
    </el-card>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'home',
  mounted () {
    var myChart = echarts.init(this.$refs.main)
    var option = {
      title: {
        text: '推广方式'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '视频广告',
          type: 'line',
          stack: '总量',
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: '直接访问',
          type: 'line',
          stack: '总量',
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '搜索引擎',
          type: 'line',
          stack: '总量',
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    }
    myChart.setOption(option)
  },
  methods: {
    contentClick () {
      this.$router.push('/content')
    },
    materialClick () {
      this.$router.push('/material')
    },
    commentClick () {
      this.$router.push('/comment')
    },
    fansClick () {
      this.$router.push('/fans')
    }
  }
}
</script>

<style scoped>
  .text {
    font-size: 18px;
    text-align: center;
  }
  .item {
    padding: 18px 0;
  }
  .box-card {
    width: 200px;
    cursor: pointer;
  }
  .icon {
    margin-right: 20px;
    font-size: 40px;
  }
  .box-card2 {
    width: 1020px;
    margin-top: 20px;
  }
</style>
