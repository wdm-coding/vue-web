<script setup lang='ts'>
  import * as IconNames from '@vicons/ionicons5'
  import SvgIcon from './svg-icon.vue'
  import {
    computed, h, useAttrs 
  } from 'vue'
  const attrs = useAttrs()
  const {
    name, width, height
  } = defineProps<{
    name: string
    width?: string
    height?: string
  }>()
  defineOptions({
    name: 'Icon'
  })
  const component = computed(() => {
    if(IconNames[name as keyof typeof IconNames]){
      return IconNames[name as keyof typeof IconNames]
    }
    if(name.startsWith('svg-')){
      const iconName = name.replace('svg-', '')
      return h(SvgIcon, {
        name: iconName, width, height
      })
    }
    console.error(`图标 ${name} 不存在`)
    return null
  })
</script>


<template>
  <n-icon
    :component="component"
    v-bind="attrs"
  />
</template>


<style lang='scss' scoped>
</style>
