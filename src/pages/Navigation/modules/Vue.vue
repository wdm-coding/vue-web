<script setup lang='ts'>
  import LogoList from '../components/logo-list.vue'
  const items = [
    {
      key: 'vue',
      label: 'vue',
      icon: 'svg-vue',
      url: 'https://cn.vuejs.org/'
    },
    {
      key: 'naive-ui',
      label: 'Naive UI',
      icon: 'svg-naive-ui-logo',
      url: 'https://www.naiveui.com/zh-CN/os-theme'
    },
    {
      key: 'xicons',
      label: 'Xicons',
      icon: 'HappyOutline',
      color: 'rgb(39, 255, 100)',
      url: 'https://xicons.org/#/'
    },
    {
      key: 'vitepress',
      label: 'Vitepress',
      icon: 'https://vitepress.dev/vitepress-logo-mini.svg',
      url: 'https://vitepress.dev/zh/reference/site-config#appearance'
    },
    {
      key: 'vueBits',
      label: 'VueBits',
      icon: 'DesktopOutline',
      size: 50,
      url: 'https://vue-bits.nodejs.cn/backgrounds/aurora'
    }
  ]
  const handleClick = (item: any) => {
    window.open(item.url, '_blank')
  }
  defineOptions({
    name: 'VueModule'
  })
</script>


<template>
  <div class='vue_wrap'>
    <LogoList :items="items" @itemClick="handleClick" />
  </div>
</template>

