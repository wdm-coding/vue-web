<script setup lang='ts'>
  import ScaleContainer from '../../components/ScaleContainer/index.vue'
  import CpsHeader from './modules/CpsHeader.vue'
  import LeftPanel from './modules/LeftPanel.vue'
  import CenterMap from './modules/CenterMap.vue'
  import RightPanel from './modules/RightPanel.vue'
  import BottomEcosystem from './modules/BottomEcosystem.vue'
  import CpsFooter from './modules/CpsFooter.vue'
  import './theme.scss'
  defineOptions({
    name: 'CpsView'
  })
</script>


<template>
  <ScaleContainer mode="stretch">
    <div class="cps_wrap">
      <!-- 顶部标题栏 -->
      <CpsHeader />
      <!-- 副标题 -->
      <div class="cps_subtitle">
        全国算力基础设施运营与服务底座
      </div>
      <!-- 中部三栏 -->
      <div class="cps_main">
        <LeftPanel />
        <CenterMap />
        <RightPanel />
      </div>
      <!-- 底部合作生态 -->
      <BottomEcosystem />
      <!-- 页脚 -->
      <CpsFooter />
    </div>
  </ScaleContainer>
</template>


<style lang='scss' scoped>
  .cps_wrap{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: url('@/assets/images/visualization/cps/bg.png') no-repeat center center;
    background-size: 100% 100%;
    .cps_subtitle{
      margin-top: 11px;
      color: rgba(96, 198, 227, 1);
      font-size: 20px;
      font-family: 'shsn';
      text-align: center;
      white-space: nowrap;
      line-height: 22px;
    }
    .cps_main{
      display: flex;
      flex-direction: row;
      width: 1880px;
      height: 693px;
      margin: 16px 0 0 20px;
    }
  }
</style>
