<script setup lang='ts'>
  import LogoList from '../components/logo-list.vue'
  const items = [
    {
      key: 'uni-app',
      label: 'uni-app',
      icon: new URL('@/assets/images/navigation/uni-app-logo.png', import.meta.url).href,
      url: 'https://uniapp.dcloud.net.cn/tutorial/'
    },
    {
      key: 'uview-plus',
      label: 'uview-plus',
      icon: new URL('@/assets/images/navigation/uview-plus-logo.png', import.meta.url).href,
      url: 'https://uview-plus.jiangruyi.com/components/install.html'
    },
    {
      key: 'dcloud',
      label: 'dcloud',
      icon: new URL('@/assets/images/navigation/dcloud-logo.png', import.meta.url).href,
      url: 'https://dev.dcloud.net.cn/pages/common/login'
    }
  ]
  const handleClick = (item: any) => {
    window.open(item.url, '_blank')
  }
  defineOptions({
    name: 'UniAppModule'
  })
</script>


<template>
  <div class='uni-app_wrap'>
    <LogoList :items="items" @itemClick="handleClick" />
  </div>
</template>

