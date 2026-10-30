<script setup lang='ts'>
  import DotGrid from '@/components/vueBits/DotGrid.vue'
  import Icon from '@/components/Icon/index.vue'
  import VueModule from './modules/Vue.vue'
  import ProjectModule from './modules/Project.vue'
  import AiModule from './modules/Ai.vue'
  import CodeModule from './modules/Code.vue'
  import ReactModule from './modules/React.vue'
  import UniAppModule from './modules/UniApp.vue'
  import AnimatedContent from '@/components/vueBits/AnimatedContent.vue'
  import { markRaw, ref } from 'vue'
  const logo = new URL('@/assets/images/logo.jpeg', import.meta.url).href
  const siderTabs = [
    {
      id: 1,
      name: 'LayersOutline',
      label: '项目',
      size: 30,
      color: '#27FF64',
      key: 'project',
      component: markRaw(ProjectModule)
    },
    {
      id: 2,
      name: 'svg-vite',
      label: 'AI',
      key: 'ai',
      component: markRaw(AiModule)
    },
    {
      id: 3,
      name: 'CodeWorking',
      label: '编程',
      size: 30,
      color: '#27FF64',
      key: 'code',
      component: markRaw(CodeModule)
    },
    {
      id: 4,
      name: 'svg-react',
      label: 'React',
      size: 30,
      key: 'react',
      component: markRaw(ReactModule)
    },
    {
      id: 5,
      name: 'svg-vue',
      label: 'vue',
      size: 30,
      key: 'vue',
      component: markRaw(VueModule)
    },
    {
      id: 6,
      name: new URL('@/assets/images/navigation/uni-app-logo.png', import.meta.url).href,
      size: 30,
      label: 'uni-app',
      key: 'uniApp',
      component: markRaw(UniAppModule)
    }
  ]
  const activeTab = ref('project')
  const currentComponent = ref(ProjectModule)
  const siderTabClick = (item: any) => {
    console.log(item)
    activeTab.value = item.key
    currentComponent.value = item.component
  }
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
      class-name="custom_dot_grid"
    />
    <div class='navigation_groups'>
      <div class='navigation_logo'>
        <Icon
          :name="logo"
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
          :class="['sider_tab', {'active_tab': item.key === activeTab}]"
          @click="siderTabClick(item)"
        >
          <Icon
            :name="item.name"
            :label="item.label"
            width="30px"
            height="30px"
            labelPos="bottom"
            labelSize="12px"
            gap="8px"
            :size="item.size || 40"
            :color="item.color || '#fff'"
          />
        </div>
      </div>
    </div>
    <div class='navigation_content'>
      <AnimatedContent
        :key="activeTab"
        :distance="100"
        direction="vertical"
        :reverse="false"
        :duration="0.8"
        ease="power3.out"
        :initial-opacity="0"
        :animate-opacity="true"
        :scale="1"
        :threshold="0.1"
        :delay="0"
      >
        <component :is="currentComponent" />
      </AnimatedContent>
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
    .custom_dot_grid{
      z-index: 1;
    }
    .navigation_groups{
      width: 60px;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background: rgb(6, 3, 45);
      color: #fff;
      font-weight: bold;
      z-index: 1;
      .navigation_logo{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 30px auto;
      }
      .sider_tabs{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        .sider_tab{
          cursor: pointer;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 0;
        }
        .active_tab{
          background: rgba(39, 255, 100, 0.2);
        }
      }
    }
    .navigation_content{
      width: 1000px;
      position: absolute;
      top: 120px;
      left: 50%;
      transform: translate(-50%, 0);
      font-size: 3rem;
      font-weight: bold;
      color: #fff;
      text-align: center;
      z-index: 1000;
    }
  }
</style>
