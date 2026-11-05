<script setup lang='ts'>  
  import items from './index.ts'
  import { useRoute } from 'vue-router'
  const route = useRoute()
  const id = route.params.id
  const item = items.find(item => item.id === Number(id))
  const component = item?.component
  defineOptions({
    name: 'VisualizationOutLet'
  })
</script>


<template>
  <div class='visualization_outLet_wrap'>
    <component :is="component" />
  </div>
</template>


<style lang='scss' scoped>
  .visualization_outLet_wrap{
    width: 100%;
    height: 100%;
  }
</style>
