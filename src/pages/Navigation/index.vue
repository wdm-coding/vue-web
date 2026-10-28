<script setup lang='ts'>
  import DotGrid from '@/components/vueBits/DotGrid.vue'
  defineOptions({
    name: 'Navigation'
  })
</script>


<template>
  <div class='navigation_wrap'>
    <DotGrid
      :dot-size="6"
      :gap="40"
      base-color="#000"
      active-color="#27FF64"
      :proximity="150"
      :speed-trigger="100"
      :shock-radius="250"
      :shock-strength="5"
      :max-speed="5000"
      :resistance="750"
      :return-duration="1.5"
      class-name="custom-dot-grid"
    />
  </div>
</template>


<style lang='scss' scoped>
  .navigation_wrap{
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/navigation/bg.png') no-repeat center center;
    background-size: cover;
    position: relative;
    overflow: hidden;
  }
</style>
