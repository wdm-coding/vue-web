<script setup lang='ts'>
  import LogoList from '../components/logo-list.vue'
  const items = [
    {
      key: 'account',
      label: '公司相关账号',
      icon: 'BusinessOutline',
      size: 50,
      url: '/notebook/company/cs'
    },
    {
      key: 'dcp',
      label: '数据要素',
      icon: 'GitCompareOutline',
      size: 50,
      url: '/notebook/company/dcp'
    }
  ]
  const handleClick = (item: any) => {
    const env = import.meta.env
    const url = `${env.VITE_BASE_NOTEBOOK_URL}${item.url}`
    window.open(url, '_blank')
  }
  defineOptions({
    name: 'DocsModule'
  })
</script>


<template>
  <div class='docs_wrap'>
    <LogoList :items="items" @itemClick="handleClick" />
  </div>
</template>
