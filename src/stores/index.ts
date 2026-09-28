import type { StoreMap } from './type'

// 自动注册 store
function transformStores(): StoreMap {
  const modules = import.meta.glob(['./*.ts', '!./type.ts', '!./index.ts'], {
    eager: true,
    import: 'default'
  })
  const result: Record<string, any> = {}
  for (const key in modules) {
    const storeName = key?.split('/').pop()?.replace('.ts', '') ?? ''
    result[storeName] = modules[key]
  }
  return result as StoreMap
}
// 导出 storeMap
export const storeMap = transformStores()
