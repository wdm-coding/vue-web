<script setup lang='ts'>
  import GlobalHeader from '@/layouts/components/GlobalHeader/index.vue'
  import Menus from '@/layouts/components/Menus/index.vue'
  import PageMain from '@/layouts/components/PageMain/index.vue'
  import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
  import { menus as siderMenus } from '@/layouts/SiderLayout/index.ts'
  import 'vue3-perfect-scrollbar/style.css'
  import { ref } from 'vue'
  const collapsed = ref(false)
  defineOptions({
    name: 'SiderLayout'
  })
</script>


<template>
  <div class='sider_layout_wrap'>
    <GlobalHeader :isFixed="false" />
    <div class='sider_layout_content_wrap'>
      <div
        :class="{
          'sider_layout_menus_wrap': true,
          'collapsed_menus': collapsed,
        }"
      >
        <PerfectScrollbar class="sider_layout_scroll_area">
          <Menus mode="vertical" :menus="siderMenus" :collapsed="collapsed" />
        </PerfectScrollbar>
      </div>
      <div class='sider_layout_page_main_wrap'>
        <PerfectScrollbar class="sider_layout_scroll_area">
          <PageMain />
        </PerfectScrollbar>
      </div>
    </div>
  </div>
</template>


<style lang='scss' scoped>
  .sider_layout_wrap{
    width: 100%;
    height: 100vh;
    background-color: #f5f5f5;
    .sider_layout_scroll_area{
      height: calc(100vh - 58px);
    }
    .sider_layout_content_wrap{
      width: 100%;
      height: calc(100vh - 58px);
      display: flex;
      .sider_layout_menus_wrap{
        width: 200px;
        height: 100%;
        background-color: #fff;
      }
      .collapsed_menus{
        width: 64px;
      }
      .sider_layout_page_main_wrap{
        min-width: 0;
        flex: 1;
        flex-shrink: 0;
        height: 100%;
        background-color: #fff;
      }
    }
  }
</style>
