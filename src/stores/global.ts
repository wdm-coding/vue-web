import { defineStore } from 'pinia'
interface GlobalState {
  siteName: string // 站点名称
}
export const useGlobalStore = defineStore('global',
  {
    state: (): GlobalState => ({
      siteName: 'Vue 门户平台'
    }),
    getters: {},
    actions: {
      increment() { }
    },
    persist: {
      key: 'global',
      storage: window.sessionStorage
    }
  }
)