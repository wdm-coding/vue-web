<script setup lang='ts'>
  import ChartBase from '@/pages/Visualization/components/ChartBase/index.vue'
  import type { ECOption } from '@/pages/Visualization/components/ChartBase/types'
  import ScreenBox from '@/pages/Visualization/components/ScreenBox/index.vue'
  const bannerBg = new URL('@/assets/images/home/banner-bg.png', import.meta.url).href
  import { ref } from 'vue'
  const option = ref<ECOption>({
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 30]
      }
    ]
  })

  defineOptions({
    name: 'BarChart'
  })
</script>


<template>
  <ScreenBox :bgImage="bannerBg" width='100%' height='315px'>
    <ChartBase :option='option' height='315px' />
  </ScreenBox>
</template>


<style lang='scss' scoped>
</style>

