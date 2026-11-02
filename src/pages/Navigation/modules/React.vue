<script setup lang='ts'>
  import LogoList from '../components/logo-list.vue'
  const items = [
    {
      key: 'react',
      label: 'react',
      icon: 'svg-react',
      url: 'https://react.dev/versions'
    },
    {
      key: 'antd',
      label: 'Ant Design',
      icon: 'svg-antd-logo',
      url: 'https://ant-design.antgroup.com/components/overview-cn/'
    }
  ]
  const handleClick = (item: any) => {
    window.open(item.url, '_blank')
  }
  defineOptions({
    name: 'ReactModule'
  })
</script>


<template>
  <div class='react_wrap'>
    <LogoList :items="items" @itemClick="handleClick" />
  </div>
</template>

