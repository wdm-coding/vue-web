<script setup lang='ts'>
  import { computed, CSSProperties } from 'vue'
  const props = withDefaults(defineProps<{
    width?: string // 盒子宽度
    height?: string // 盒子高度
    bgImage?: string // 背景图片
  }>(), {
    width: '100%',
    height: '100%',
    bgImage: ''
  })
  const boxStyle = computed(() => {
    const baseStyle: CSSProperties = {
      width: props.width,
      height: props.height
    }
    if (props.bgImage){
      baseStyle.backgroundImage = `url(${props.bgImage})`
      baseStyle.backgroundSize = '100% 100%'
      baseStyle.backgroundPosition = 'center'
      baseStyle.backgroundRepeat = 'no-repeat'
    }
    return baseStyle
  })
  defineOptions({
    name: 'ScreenBox'
  })
</script>


<template>
  <div class='screen_box_wrap' :style='boxStyle'>
    <slot />
  </div>
</template>


<style lang='scss' scoped>
  .screen_box_wrap{
    width: 100%;
    height: 100%;
  }
</style>
