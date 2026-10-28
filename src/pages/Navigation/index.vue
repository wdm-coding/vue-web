<script setup lang='ts'>
  import Aurora from '@/components/vueBits/Aurora.vue'
  defineOptions({
    name: 'Navigation'
  })
</script>


<template>
  <div class='navigation_wrap'>
    <Aurora
      :color-stops="['#7cff67', '#171D22', '#7cff67']"
      :amplitude="1.0"
      :blend="0.5"
      :speed="1.0"
      :intensity="1.0"
      class="w-full h-full"
    />
  </div>
</template>


<style lang='scss' scoped>
  .navigation_wrap{
    width: 100%;
    height: 100vh;
    background-color: #0b0b0b;
    position: relative;
    overflow: hidden;
  }
</style>
