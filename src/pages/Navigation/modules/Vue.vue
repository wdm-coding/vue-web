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

