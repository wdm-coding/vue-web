<script setup lang='ts'>
  import LogoList from '../components/logo-list.vue'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const items = [
    {
      key: 'portalLayout',
      label: '门户布局',
      icon: 'BusinessOutline',
      size: 50,
      url: '/portal'
    },
    {
      key: 'ManageLayout',
      label: '管理端布局',
      icon: 'GitCompareOutline',
      size: 50,
      url: '/userCenter'
    },
    {
      key: 'visualization',
      label: '数据可视化大屏',
      icon: 'DesktopOutline',
      size: 50,
      url: '/portal/visualization'
    }
  ]
  const handleClick = (item: any) => {
    router.push(item.url)
  }
  defineOptions({
    name: 'MyAppModule'
  })
</script>


<template>
  <div class='myApp_wrap'>
    <LogoList :items="items" @itemClick="handleClick" />
  </div>
</template>
