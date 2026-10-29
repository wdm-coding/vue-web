<script setup lang='ts'>
  import * as IconNames from '@vicons/ionicons5'
  import SvgIcon from './svg-icon.vue'
  import {
    computed, h, useAttrs 
  } from 'vue'
  import { isImagePath } from './utils.ts'
  const attrs = useAttrs()
  const {
    name, width, height, label, labelPos = 'bottom', labelColor = 'inherit', labelSize = 'inherit', gap = '5px'
  } = defineProps<{
    name: string
    width?: string
    height?: string
    label?: string // 文字标签
    labelPos?: 'top' | 'bottom' | 'left' | 'right' // 文字标签位置
    labelColor?: string // 文字标签颜色
    labelSize?: string // 文字标签字体大小
    gap?: string // 文字标签与图标间距
  }>()
  defineOptions({
    name: 'Icon',
    inheritAttrs: false
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
    if(isImagePath(name)){
      return 'img'
    }
    console.error(`图标 ${name} 不存在`)
    return null
  })
  // 图片尺寸（宽高互为兜底，缺省 100%）
  const imgStyle = computed(() => ({
    width: width || height || '100%',
    height: height || width || '100%'
  }))
  // 标签在左/右时横向排列
  const isRow = computed(() => labelPos === 'left' || labelPos === 'right')
  // 标签在上/左时排在图标前面
  const labelFirst = computed(() => labelPos === 'top' || labelPos === 'left')
  const wrapStyle = computed(() => ({
    flexDirection: isRow.value ? ('row' as const) : ('column' as const),
    gap
  }))
  const labelStyle = computed(() => ({
    color: labelColor,
    fontSize: labelSize
  }))
</script>


<template>
  <span
    v-if="label"
    class="icon-label"
    :style="wrapStyle"
  >
    <span
      v-if="labelFirst"
      class="icon-label__text"
      :style="labelStyle"
    >{{ label }}</span>
    <img
      v-if="component === 'img'"
      class="icon-label__icon"
      :src="name"
      :alt="name"
      :style="imgStyle"
    >
    <n-icon
      v-else
      class="icon-label__icon"
      :component="component"
      v-bind="attrs"
    />
    <span
      v-if="!labelFirst"
      class="icon-label__text"
      :style="labelStyle"
    >{{ label }}</span>
  </span>
  <template v-else>
    <img
      v-if="component === 'img'"
      :src="name"
      :alt="name"
      :style="imgStyle"
    >
    <n-icon
      v-else
      :component="component"
      v-bind="attrs"
    />
  </template>
</template>


<style lang='scss' scoped>
  .icon-label {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;

    .icon-label__icon {
      flex-shrink: 0;
    }

    .icon-label__text {
      white-space: nowrap;
    }
  }
</style>
