<script setup lang='ts'>
  import ScreenBox from '@/pages/Visualization/components/ScreenBox/index.vue'
  const bannerBg = new URL('@/assets/images/visualization/chartScreen/box-bg.png', import.meta.url).href
  const props = withDefaults(defineProps<{
    title: string,
    width: string,
    height: string 
  }>(), {
    title: '',
    width: '100%',
    height: '100%'
  })
  defineOptions({
    name: 'BoxTitle'
  })
</script>


<template>
  <ScreenBox :bgImage="bannerBg" :width="width" :height="height">
    <div class='box_title_wrap'>
      <div class='box_title'>
        {{ title }}
      </div>
      <slot />
    </div>
  </ScreenBox>
</template>


<style lang='scss' scoped>
  .box_title_wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .box_title{
      width: 100%;
      height: 55px;
      line-height: 55px;
      font-size: 20px;
      font-weight: bold;
      color: #00F6FF;
      padding-left: 20px;
      border-bottom: 1px solid #00F6FF;
    }
  }
</style>
