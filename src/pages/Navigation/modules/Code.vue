<script setup lang='ts'>
  import LogoList from '../components/logo-list.vue'
  const items = [
    {
      key: 'github',
      label: 'github',
      icon: 'svg-github-logo',
      url: 'https://github.com/'
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
