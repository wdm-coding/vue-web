<script setup lang='ts'>
  import { computed } from 'vue'
  const { name } = defineProps<{
    name: string
    width?: string
    height?: string
    color?: string
  }>()
  const symbolId = computed(() => `#icon-${name}`)
  defineOptions({
    name: 'SvgIcon'
  })
</script>


<template>
  <svg
    aria-hidden="true"
    :fill="color || 'currentColor'"
  >
    <use :xlink:href="symbolId" />
  </svg>
</template>


<style lang='scss' scoped>
  .comName_wrap{
  
  }
</style>
