<script setup lang='ts'>
  import {
    computed, onBeforeUnmount, onMounted, provide, ref
  } from 'vue'
  import { SCALE_KEY } from './useScale'

  const {
    width = 1920, height = 1080, mode = 'fit'
  } = defineProps<{
    width?: number // 设计稿宽度
    height?: number // 设计稿高度
    mode?: 'fit' | 'cover' | 'stretch' | 'width' // fit-等比适配 cover-等比铺满 stretch-拉伸铺满 width-仅按宽度缩放
  }>()

  defineOptions({
    name: 'ScaleContainer'
  })

  const wrapRef = ref<HTMLElement>()
  const scaleX = ref(1)
  const scaleY = ref(1)

  // 向子组件提供缩放状态
  provide(SCALE_KEY, {
    scaleX, scaleY, width, height
  })

  // 根据容器实际尺寸与设计稿尺寸计算缩放比例
  function updateScale() {
    const el = wrapRef.value
    if (!el || !el.clientWidth || !el.clientHeight) return
    const ratioW = el.clientWidth / width
    const ratioH = el.clientHeight / height
    if (mode === 'stretch') {
      scaleX.value = ratioW
      scaleY.value = ratioH
      return
    }
    let scale = ratioW
    if (mode === 'fit') scale = Math.min(ratioW, ratioH)
    if (mode === 'cover') scale = Math.max(ratioW, ratioH)
    scaleX.value = scale
    scaleY.value = scale
  }

  const contentStyle = computed(() => ({
    width: `${width}px`,
    height: `${height}px`,
    transform: `scale(${scaleX.value}, ${scaleY.value})`
  }))

  let observer: ResizeObserver | null = null
  onMounted(() => {
    updateScale()
    observer = new ResizeObserver(updateScale)
    if (wrapRef.value) observer.observe(wrapRef.value)
  })
  onBeforeUnmount(() => {
    observer?.disconnect()
    observer = null
  })

  defineExpose({
    scaleX, scaleY, updateScale
  })
</script>


<template>
  <div
    ref="wrapRef"
    class="scale_container_wrap"
  >
    <div
      class="scale_container_wrap__content"
      :style="contentStyle"
    >
      <slot />
    </div>
  </div>
</template>


<style lang='scss' scoped>
  .scale_container_wrap{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    .scale_container_wrap__content{
      flex-shrink: 0;
      transform-origin: center;
    }
  }
</style>
