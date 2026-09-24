<script setup lang="ts">
  const {
    show,target,duration 
  } = defineProps({
    show: {
      type: Boolean,
      default: false
    },
    target: {
      type: HTMLElement,
      default: undefined
    },
    duration: {
      type: Number,
      default: 800
    }
  })
  function smoothScrollToTop(el: HTMLElement, duration: number) {
    const start = el.scrollTop
    const distance = start // 滚动距离 = 当前 scrollTop
    let startTime: number | null = null
    function easeInOutCubic(t: number) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    }
    function animate(currentTime: number) {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      el.scrollTop = start - distance * easeInOutCubic(progress)
      if (elapsed < duration) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }
  const onBackToTop = () => {
    smoothScrollToTop(target as HTMLElement, duration)
  }
  defineOptions({
    name: 'BackTop'
  })
</script>

<template>
  <div class="back_top_wrap" v-if="show" @click="onBackToTop">回到顶部</div>
</template>

<style lang="scss" scoped>
	.back_top_wrap {
		width: 200px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		font-size: 14px;
		position: fixed;
		bottom: 20px;
		right: 20px;
		background-color: #0274e7;
		color: #fff;
		border-radius: 20px;
    cursor: pointer;
	}
</style>
