<script setup lang='ts'>
  import Iridescence from '@/components/vueBits/Iridescence.vue'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const items = [
    {
      id: 1,
      title: '甘肃省算力调度服务平台',
      image: new URL('@/assets/images/visualization/cps/cover.png', import.meta.url).href,
      url: '/visualOutLet/1',
      createTime: '2026-01-01'
    },
    {
      id: 2,
      title: 'Echarts图表大屏',
      image: new URL('@/assets/images/visualization/cps/cover.png', import.meta.url).href,
      url: '/visualOutLet/2',
      createTime: '2026-01-02'
    }
  ]
  const handleCardClick = (url: string) => {
    router.push(url)
  }
  defineOptions({
    name: 'Visualization'
  })
</script>


<template>
  <div class='visualization_wrap'>
    <Iridescence 
      :color="[0.1, 0.7, 0.8]"
      :speed="1.0"
      :amplitude="0.2"
      :mouseReact="true"
    />
    <div class='visualization_content'>
      <n-grid :cols="24" x-gap="30px" y-gap="30px">  
        <n-gi :span="6" v-for="item in items" :key="item.id">
          <div class='visualization_item'>
            <n-card :title="item.title" style="width: 100%;height: 100%;" :bordered="false">
              <template #cover>
                <img :src="item.image">
              </template>
              <div class='visualization_item_description'>
                {{ item.createTime }}
              </div>
              <template #footer>
                <n-button type="primary" @click="handleCardClick(item.url)">查看详情</n-button>
              </template>
            </n-card>
          </div>
        </n-gi>
      </n-grid>
    </div>
  </div>
</template>
<style scoped lang='scss'>
  .visualization_wrap {
    width: 100%;
    height: 100vh;
    position: relative;
    .visualization_content {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      padding: 70px 30px 0;
      .visualization_item{
        width: 100%;
        height: 350px;
        .visualization_item_description{
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
</style>
