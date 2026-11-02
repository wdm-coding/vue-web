<script setup lang='ts'>
  import LogoList from '../components/logo-list.vue'
  const items = [
    {
      key: 'qianwen',
      label: '千问',
      icon: 'svg-qianwen-logo',
      size: 50,
      url: 'https://www.qianwen.com/chat'
    },
    {
      key: 'doubao',
      label: '豆包',
      icon: new URL('@/assets/images/navigation/doubao-logo.png', import.meta.url).href,
      url: 'https://www.doubao.com/chat'
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
