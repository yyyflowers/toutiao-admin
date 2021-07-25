<template>
  <div id="fans">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/fans' }">粉丝统计</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </template>
      <div>
        <el-row :gutter="20">
          <el-col :span="12"><div ref="main" style="width: 600px;height:400px;"></div></el-col>
          <el-col :span="12"><div ref="main2" style="width: 600px;height:400px;"></div></el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
// 引入 echarts.js
import * as echarts from 'echarts'

export default {
  name: 'fans',
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(this.$refs.main)
    var myChart2 = echarts.init(this.$refs.main2)
    // 指定图表的配置项和数据
    var option = {
      title: {
        text: '用户年龄统计'
      },
      tooltip: {},
      legend: {
        data: ['占比']
      },
      xAxis: {
        data: ['24岁以下', '25-30岁', '31-35岁', '36-40岁', '41岁以上']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: '占比',
        type: 'bar',
        data: [36, 28, 14, 7, 15]
      }]
    }
    var option2 = {
      title: {
        text: '用户访问来源',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: '搜索引擎' },
            { value: 735, name: '直接访问' },
            { value: 580, name: '邮件营销' },
            { value: 484, name: '联盟广告' },
            { value: 300, name: '视频广告' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option)
    myChart2.setOption(option2)
  }
}
</script>

<style scoped>
</style>
