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
    },
    {
      key: 'antd-pro-components',
      label: 'Antd Pro Components',
      icon: 'svg-antd-pro-logo',
      url: 'https://procomponents.ant.design/components'
    },
    {
      key: 'Zustand',
      label: 'Zustand',
      icon: new URL('@/assets/images/navigation/zustand-logo.webp', import.meta.url).href,
      url: 'https://zustand.nodejs.cn/docs/getting-started/introduction'
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

