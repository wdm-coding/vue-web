<script setup lang='ts'>
  import DotGrid from '@/components/vueBits/DotGrid.vue'
  import GradientText from '@/components/vueBits/GradientText.vue'
  import Icon from '@/components/Icon/index.vue'
  const siderTabs = [
    {
      id: 1,
      name: 'svg-vue',
      label: 'wdm'
    },
    {
      id: 2,
      name: 'svg-vite',
      label: 'wdm'
    },
    {
      id: 3,
      name: 'svg-vite',
      label: 'wdm'
    },
    {
      id: 4,
      name: 'svg-vite',
      label: 'wdm'
    }
  ]
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
    <div class='navigation_groups'>
      <div class='navigation_logo'>
        <Icon
          name="/src/assets/images/logo.jpeg"
          label="wdm"
          width="40px"
          height="40px"
          labelPos="bottom"
          labelSize="12px"
          gap="15px"
        />
      </div>
      <div class='sider_tabs'>
        <div
          v-for="item in siderTabs"
          :key="item.id"
          class='sider_tab'
        >
          <Icon
            
            :name="item.name"
            :label="item.label"
            width="40px"
            height="40px"
            labelPos="bottom"
            labelSize="12px"
            gap="15px"
          />
        </div>
      </div>
    </div>
    <div class='navigation_content'>
      <GradientText text='开发环境' />
      <GradientText text='生产环境' />
    </div>
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
    .navigation_groups{
      width: 60px;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background: rgb(6, 3, 45);
      color: #fff;
      font-size: 3rem;
      font-weight: bold;
      text-align: center;
      z-index: 1;
      pointer-events: none;
      .navigation_logo{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 30px auto;
      }
    }
    .sider_tabs{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 40px;
    }
    .navigation_content{
      width: 1000px;
      position: absolute;
      top: 200px;
      left: 50%;
      transform: translate(-50%, 0);
      font-size: 3rem;
      font-weight: bold;
      color: #fff;
      text-align: center;
      z-index: 1;
      pointer-events: none;
    }
  }
</style>
