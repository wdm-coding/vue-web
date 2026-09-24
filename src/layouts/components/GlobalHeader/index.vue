<script setup lang='ts'>
  import { menus as PortalMenus } from '@/layouts/PortalLayout/index.ts'
  import Menus from '@/layouts/components/Menus/index.vue'
  import { useRouter } from 'vue-router'
  import { useGlobalStore } from '@/stores/global'
  defineOptions({
    name: 'GlobalHeader'
  })
  const { isFixed = true } = defineProps<{
    isFixed?: boolean
  }>()
  const { siteName } = useGlobalStore()
  const router = useRouter()
  const handleClick = () => {
    router.push({ name: 'UserCenter' })
  }
</script>


<template>
  <div
    :class="{
      'global_header_wrap': true,
      'global_header_fixed': isFixed
    }"
  >
    <div class='site_name'>{{siteName}}</div>
    <div class='global_header_middle_wrap'>
      <Menus :menus="PortalMenus" mode="horizontal" />
    </div>
    <div class='global_header_right_wrap'>
      <div @click='handleClick'>个人中心</div>
    </div>
  </div>
</template>


<style lang='scss' scoped>
  .global_header_wrap{
    width: 100%;
    height: 58px;
    background: rgba(255,255,255,0.2);
    backdrop-filter: blur(7px);
    display: flex;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    .site_name{
      margin-right: 20px;
    }
    .global_header_middle_wrap{
      min-width: 0;
      flex: 1;
      flex-shrink: 0;
      height: 100%;
      display: flex;
      align-items: center;
    }
    .global_header_right_wrap{
      display: flex;
      align-items: center;
      margin-left: auto;
      height: 100%;
    }
  }
  .global_header_fixed{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
  }
  .is_scroll{
    background: rgba(255,255,255,1);
    color: #fff000;
  }
</style>
