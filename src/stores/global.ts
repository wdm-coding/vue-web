import { defineStore } from 'pinia'
import type { GlobalState } from '@/stores/type'
const useGlobalStore = defineStore('global',
  {
    state: (): GlobalState => ({
      siteName: 'Vue 门户平台'
    }),
    persist: {
      key: 'global',
      storage: window.sessionStorage
    }
  }
)

export default useGlobalStore