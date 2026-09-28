import { storeToRefs } from 'pinia'
import { storeMap } from '@/stores'
import type { StoreInstanceMap, StoreKey } from '@/stores/type'

/** storeToRefs 后的 refs 类型：state -> Ref，getters -> ComputedRef */
type StoreRefs<K extends StoreKey> = ReturnType<typeof storeToRefs<StoreInstanceMap[K]>>

/** useStore 返回类型：响应式 refs 覆盖原始 state/getters，保留 actions */
type UseStoreReturn<K extends StoreKey> = Omit<StoreInstanceMap[K], keyof StoreRefs<K>> &
  StoreRefs<K>

function useStore<K extends StoreKey>(key: K): UseStoreReturn<K> {
  const storeInstance = storeMap[key]()
  const refs = storeToRefs(storeInstance)
  return Object.assign({}, storeInstance, refs) as unknown as UseStoreReturn<K>
}

export default useStore
