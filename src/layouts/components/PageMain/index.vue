<script setup lang='ts'>
  defineOptions({
    name: 'PageMain'
  })
</script>


<template>
  <div class='page_main_wrap' ref="containerRef">
    <router-view />
  </div>  
</template>


<style lang='scss' scoped>
  .page_main_wrap{
    background-color: #fff;
    height: 100%;
  }
</style>
