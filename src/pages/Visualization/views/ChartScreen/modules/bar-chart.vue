<script setup lang='ts'>
  import ChartBase from '@/pages/Visualization/components/ChartBase/index.vue'
  import type { ECOption } from '@/pages/Visualization/components/ChartBase/types'
  import { ref } from 'vue'
  // 数据源定义
  const cities = ['兰州市', '酒泉市', '嘉峪关市', '甘南市', '临夏市', '白银市', '金昌市', '庆阳市', '张掖市', '定西市', '武威市', '平凉市', '天水市', '陇南市', '兰州新区']
  const peopleData = [210, 250, 200, 260, 230, 270, 220, 240, 280, 210, 250, 230, 270, 290, 240]
  const moneyData = [300, 350, 320, 380, 340, 360, 310, 330, 370, 320, 360, 340, 380, 400, 350]

  // 渐变色工厂函数，用于生成科技感渐变
  const createGradient = (colors: [string, string]) => ({
    type: 'linear' as const,
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [
      { offset: 0, color: colors[0] },
      { offset: 1, color: colors[1] }
    ]
  })
  const option = ref<ECOption>({
    // 图例配置
    legend: {
      data: ['解决欠薪人数', '办结案件追薪总金额'],
      top: '16px',
      left: 'center',
      textStyle: {
        color: '#FFFFFF',
        fontSize: 12
      },
      icon: 'rect',
      itemWidth: 14,
      itemHeight: 8,
      itemGap: 20
    },
    // 左右两侧的单位标注（通过 text 辅助实现设计图效果）
    graphic: [
      {
        type: 'text',
        left: '2%',
        top: '40px',
        style: {
          text: '单位:万元', fill: '#5ECCFA', fontSize: 11 
        }
      },
      {
        type: 'text',
        right: '2%',
        top: '40px',
        style: {
          text: '单位:人', fill: '#5ECCFA', fontSize: 11 
        }
      }
    ],
    // 容器网格，留出左右空间给双 Y 轴
    grid: {
      top: '70px',
      bottom: '6%',
      left: '3%',
      right: '3%',
      containLabel: true
    },
    // 提示框
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(20, 30, 50, 0.9)',
      borderColor: '#3b82f6',
      textStyle: { color: '#ffffff', fontSize: 12 },
      padding: 10
    },
    // X 轴（市州列表）
    xAxis: {
      type: 'category',
      data: cities,
      axisLabel: {
        color: '#FFFFFF',
        fontSize: 10,
        interval: 0,
        // 逐字换行实现竖向展示
        formatter: (value: string) => value.split('').join('\n')
      },
      axisLine: {
        lineStyle: { color: '#4395BB' }
      },
      axisTick: { show: false }
    },
    // 双 Y 轴（左右两侧刻度完全一致，共享同一套视觉体系）
    yAxis: [
      {
        type: 'value',
        min: 0,
        max: 500,
        interval: 100,
        position: 'left',
        axisLabel: { color: '#FFFFFF', fontSize: 11 },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: '#4395BB'
          }
        },
        axisLine: { show: false },
        axisTick: { show: false }
      },
      {
        type: 'value',
        min: 0,
        max: 500,
        interval: 100,
        position: 'right',
        axisLabel: { color: '#FFFFFF', fontSize: 11 },
        splitLine: { show: false },
        axisLine: { show: false },
        axisTick: { show: false }
      }
    ],
    // 数据系列（柱状图渐变配色）
    series: [
      {
        name: '解决欠薪人数',
        type: 'bar',
        yAxisIndex: 0,
        barWidth: 10,
        itemStyle: {
          color: createGradient(['#4E9BF2', '#0E286D']) // 深蓝色渐变
        },
        data: peopleData
      },
      {
        name: '办结案件追薪总金额',
        type: 'bar',
        yAxisIndex: 1,
        barWidth: 10,
        itemStyle: {
          color: createGradient(['#61D2D9', '#14364D']) // 青绿色渐变
        },
        data: moneyData
      }
    ]
  })

  defineOptions({
    name: 'BarChart'
  })
</script>


<template>
  <ChartBase :option='option' height='265px' />
</template>


