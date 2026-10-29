<script setup lang='ts'>
  import LogoList from '../components/logo-list.vue'
  const items = [
    {
      key: 'qianwen',
      label: '千问',
      icon: 'svg-qianwen-logo',
      url: 'https://www.qianwen.com/chat'
    },
    {
      key: 'deepseek',
      label: 'deepseek',
      icon: 'svg-vite',
      url: 'https://chat.deepseek.com/'
    }
  ]
  const handleClick = (item: any) => {
    window.open(item.url, '_blank')
  }
  defineOptions({
    name: 'Ai'
  })
</script>


<template>
  <div class='ai_wrap'>
    <LogoList :items="items" @itemClick="handleClick" />
  </div>
</template>


<style lang='scss' scoped>
  .ai_wrap{
  
  }
</style>
