<script setup lang="ts">
  import {
    computed, h, nextTick, ref, watchEffect
  } from 'vue'
  import { type MenuItem } from '@/layouts/PortalLayout/index.ts'
  import type { MenuOption } from 'naive-ui'
  import { useRoute,useRouter } from 'vue-router'
  import CustomLabel from './CustomLabel.vue'
  import Icon from '@/components/Icon/index.vue'
  const route = useRoute()
  const router = useRouter()
  const {
    mode = 'horizontal', menus = [], collapsed = false 
  } = defineProps<{
    mode: 'horizontal' | 'vertical'
    menus: MenuItem[]
    collapsed?: boolean
  }>()
  const getLabel = (item: MenuItem) => {
    if(mode === 'horizontal' && item.children){
      return () => h(CustomLabel,{
        class: 'horizontal_label',
        path: item.path,
        title: item.title
      })
    }else if(mode === 'horizontal' && !item.children){
      return () => h(CustomLabel,{
        class: `horizontal_label ${item.path === '/userCenter' ? 'is_sideParent' : ''}`,
        path: item.path,
        title: item.title
      })
    }else{
      return item.title
    }
  }
  const transformMenuOptions: (menus: MenuItem[]) => MenuOption[] = list => {
    return list.map(item => {
      const baseItem: MenuOption = {
        label: getLabel(item),
        key: item.path
      }
      if(item.icon){
        baseItem.icon = () => h(Icon, { name: item.icon as string })
      }
      if (item.children) {
        baseItem.children = transformMenuOptions(item.children)
      }
      return baseItem
    })
  }
  const menuOptions = computed(() => transformMenuOptions(menus))
  const selectedKey = ref('')
  watchEffect(() => {
    selectedKey.value = route.path
  })
  const onUpdateValue = (key: string) => {
    router.push(key)
  }
  defineOptions({
    name: 'Menus'
  })
</script>

<template>
  <div class="layout_menus_wrap">
    <n-menu
      :class="{'has_sideParent': route.path.indexOf('/userCenter') !== -1}"
      v-model:value="selectedKey"
      :mode="mode"
      :options="menuOptions"
      responsive
      :collapsed="mode === 'vertical' && collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :onUpdateValue="onUpdateValue"
    />
  </div>
</template>

<style lang="scss" scoped>
	.layout_menus_wrap {
    width: 100%;
		::v-deep(.n-menu--horizontal) {
      .n-menu-item-content{
        height: 100%;
        padding: 0;
        .n-menu-item-content-header{
          height: 100%;
          display: flex;
          align-items: center;
          .horizontal_label{
            display: flex;
            align-items: center;
            height: 100%;
            padding: 0 20px;
            color: #333;
          }
        }
      }
      .n-menu-item-content--child-active .n-menu-item-content-header .horizontal_label,
			.n-menu-item-content--selected .n-menu-item-content-header .horizontal_label {
				color: #333;
				position: relative;
				&::after {
					content: "";
					width: 100%;
					max-width: 30px;
					height: 4px;
					background-color: #007bff;
					border-radius: 2px;
					position: absolute;
					bottom: 0px;
					left: 50%;
					transform: translateX(-50%);
				}
			}
		}
    ::v-deep(.has_sideParent){
      .n-menu-item-content-header{
        .is_sideParent{
          color: #333;
          position: relative;
          &::after {
            content: "";
            width: 100%;
            max-width: 30px;
            height: 4px;
            background-color: #007bff;
            border-radius: 2px;
            position: absolute;
            bottom: 0px;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }
    ::v-deep(.n-menu--vertical){
      .n-menu-item-content-header{
        text-align: left;
      }
    }
	}
</style>
