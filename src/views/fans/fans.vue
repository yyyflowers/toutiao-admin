<template>
  <div id="fans">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/fans' }">粉丝管理</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </template>
      <div>
        <div id="main" ref="main" style="width: 600px;height:400px;"></div>
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
      dialogVisible: false
    }
  },
  methods: {
  },
  mounted () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(this.$refs.main)
    // 指定图表的配置项和数据
    var option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    }
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option)
  }
}
</script>

<style scoped>

</style>
