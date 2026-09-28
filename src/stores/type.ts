import useAuthStore from "./auth"
import useGlobalStore from "./global"

/** global store 状态 */
export interface GlobalState {
  siteName: string
}

/** auth store 状态 */
export interface AuthState {
  /** 登录成功后的跳转路径 */
  loginAfter: string
  isLoggedIn: boolean
  token: string
  userInfo: any
  menuTree: any | null
}

/** 各 store 状态映射：键名与 store 注册名保持一致 */
export interface StoreState {
  global: GlobalState
  auth: AuthState
}

// store 定义映射：键名 -> store 定义函数
// 新建 store 定义函数时，需要在 type.ts 中添加对应的 store 定义映射
export interface StoreMap {
  global: typeof useGlobalStore
  auth: typeof useAuthStore
}

/** store 键名联合类型 */
export type StoreKey = keyof StoreMap

/** store 实例映射：键名 -> store 实例类型 */
export type StoreInstanceMap = {
  [K in StoreKey]: ReturnType<StoreMap[K]>
}
