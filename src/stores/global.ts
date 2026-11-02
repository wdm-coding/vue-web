import { defineStore } from 'pinia'
import type { GlobalState } from '@/stores/type'
const useGlobalStore = defineStore('global',
  {
    state: (): GlobalState => ({
      scrollTarget: undefined,
      siteName: 'Vue 门户平台',
      theme: 'dark',
      navigationConfig: {
        activeKey: 'project'
      }
    }),
    actions: {
      setScrollTarget(newTarget: HTMLElement | undefined) {
        this.scrollTarget = newTarget
      },
      setNavigationActiveKey(key: string) {
        this.navigationConfig.activeKey = key
      }
    },
    persist: {
      key: 'global',
      omit: ['scrollTarget','theme'],
      storage: window.sessionStorage
    }
  }
)

export default useGlobalStore