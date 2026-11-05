<script setup lang='ts'>
  import ScaleContainer from '../../components/ScaleContainer/index.vue'
  defineOptions({
    name: 'EchartsScreen'
  })
</script>


<template>
  <ScaleContainer mode="cover">
    <div class='echarts_screen_wrap'>
      <div class='echarts_screen_header' />
      <div class='echarts_screen_content'>
        <div class='echarts_screen_left' />
        <div class='echarts_screen_middle' />
        <div class='echarts_screen_right' />
      </div>
    </div>
  </ScaleContainer>
</template>


<style lang='scss' scoped>
  .echarts_screen_wrap{
    width: 100%;
    height: 100%;
    background: url('@/assets/images/visualization/cps/bg.png') no-repeat center center;
    background-size: 100% 100%;
    .echarts_screen_header{
      width: 100%;
      height: 77px;
      background: url('@/assets/images/visualization/cps/header.png') no-repeat center center;
      background-size: 100% 100%;
    }
    .echarts_screen_content{
      width: 100%;
      height: calc(100% - 77px);
      display: flex;
      justify-content: space-between;
      .echarts_screen_left{
        width: 588px;
        height: 100%;
        background: url('@/assets/images/visualization/cps/left.png') no-repeat center center;
        background-size: 100% 100%;
        border: 1px solid #fff;
      }
      .echarts_screen_middle{
        width: 688px;
        height: 100%;
        background: url('@/assets/images/visualization/cps/middle.png') no-repeat center center;
        background-size: 100% 100%;
        border: 1px solid #fff;
      }
      .echarts_screen_right{
        width:598px;
        height: 100%;
        background: url('@/assets/images/visualization/cps/right.png') no-repeat center center;
        background-size: 100% 100%;
        border: 1px solid #fff;
      }
    }
  }
</style>
