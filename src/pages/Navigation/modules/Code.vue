<script setup lang='ts'>
  import LogoList from '../components/logo-list.vue'
  const items = [
    {
      key: 'github',
      label: 'github',
      icon: 'svg-github-logo',
      url: 'https://github.com/'
    },
    {
      key: 'echarts',
      label: 'echarts',
      icon: new URL('@/assets/images/navigation/echarts-logo.png', import.meta.url).href,
      url: 'https://echarts.apache.org/zh/index.html'
    },
    {
      key: 'isqqw',
      label: 'isqqw图表库',
      icon: 'BarChartSharp',
      url: 'https://www.isqqw.com/'
    },
    {
      key: 'ppchart',
      label: 'ppchart图表库',
      icon: 'AnalyticsOutline',
      url: 'https://ppchart.com/'
    }
  ]
  const handleClick = (item: any) => {
    window.open(item.url, '_blank')
  }
  defineOptions({
    name: 'CodeModule'
  })
</script>


<template>
  <div class='code_wrap'>
    <LogoList :items="items" @itemClick="handleClick" />
  </div>
</template>
