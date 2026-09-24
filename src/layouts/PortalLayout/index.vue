<script setup lang='ts'>
  import GlobalHeader from '../components/GlobalHeader/index.vue'
  import PageMain from '@/layouts/components/PageMain/index.vue'
  import PortalFooter from './modules/PortalFooter/index.vue'
  import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
  import type { PerfectScrollbarExpose } from 'vue3-perfect-scrollbar'
  import 'vue3-perfect-scrollbar/style.css'
  import { onMounted, ref } from 'vue'
  import BackTop from '@/layouts/components/BackTop/index.vue'
  import { onBeforeRouteUpdate } from 'vue-router'
  const scrollbarRef = ref<PerfectScrollbarExpose | undefined>(undefined)
  const scrollTarget = ref<HTMLElement | undefined>(undefined)
  const isScroll = ref(false)
  const scrollTop = ref(0)
  onMounted(() => {
    scrollTarget.value = scrollbarRef.value?.ps?.element as HTMLElement
  })
  const onScroll = () => {
    const scrollbarYTop = scrollbarRef.value?.ps?.scrollbarYTop || 0
    isScroll.value = scrollbarYTop > 60
    scrollTop.value = scrollbarYTop
  }
  // 监听路由变化，重置滚动位置
  onBeforeRouteUpdate(() => {
    if (!scrollTarget.value) return
    scrollTarget.value.scrollTop = 0
  })
  defineOptions({
    name: 'PortalLayout'
  })
</script>


<template>
  <div class='portal_layout_wrap'>
    <GlobalHeader :class="{'is_scroll': isScroll}" />
    <PerfectScrollbar
      class="portal_layout_scroll_area"
      @ps-scroll-y="onScroll"
      ref="scrollbarRef"
    >
      <div class='portal_layout_main_wrap'>
        <PageMain />
      </div>
      <PortalFooter />
    </PerfectScrollbar>
    <BackTop :show="scrollTop > 300" :target="scrollTarget" />
  </div>
</template>


<style lang='scss' scoped>
  .portal_layout_wrap{
    width: 100%;
    background-color: #f8f8f8;
    .portal_layout_scroll_area{
      height: 100vh;
      .portal_layout_main_wrap{
        min-height: 100%;
      }
    }
  }
</style>
