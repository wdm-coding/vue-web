<script setup lang='ts'>
  import { topNavDataSource } from '../data'
  defineOptions({
    name: 'CpsCenterMap'
  })
</script>


<template>
  <!-- 中部：顶部应用导航 + 甘肃算力地图 -->
  <div class="center_map">
    <!-- 模型广场 / 数据工场 / 政务应用 / 行业平台 -->
    <div class="center_map_nav">
      <div
        v-for="item in topNavDataSource"
        :key="item.title"
        class="nav_item"
        :style="{ backgroundImage: `url(${item.icon})` }"
      >
        <span class="linear-gradient-nav-text">{{ item.title }}</span>
      </div>
    </div>
    <!-- 地图（含城市节点与算力出海航线） -->
    <img
      class="center_map_body"
      src="@/assets/images/visualization/cps/gs-map-bg.png"
      alt="地图"
    >
  </div>
</template>


<style lang='scss' scoped>
  .center_map{
    width: 900px;
    height: 686px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .center_map_nav{
      width: 861px;
      height: 82px;
      margin-left: 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .nav_item{
        width: 202px;
        height: 82px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        padding-left: 75px;
        white-space: nowrap;
      }
    }
    .center_map_body{
      width: 900px;
      height: 579px;
    }
  }
</style>
