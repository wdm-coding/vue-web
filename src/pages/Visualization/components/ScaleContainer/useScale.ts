import {
  inject, ref, type InjectionKey, type Ref
} from 'vue'

export interface ScaleContext {
  /** 横向缩放比例 */
  scaleX: Ref<number>
  /** 纵向缩放比例 */
  scaleY: Ref<number>
  /** 设计稿宽度 */
  width: number
  /** 设计稿高度 */
  height: number
}

export const SCALE_KEY: InjectionKey<ScaleContext> = Symbol('scale-container')

/**
 * 获取 ScaleContainer 的缩放比例，需在 ScaleContainer 的插槽内使用
 */
export function useScale(): ScaleContext {
  const ctx = inject(SCALE_KEY, null)
  if (!ctx) {
    console.warn('useScale 必须在 <ScaleContainer> 内部使用，已返回默认缩放比例 1')
    return {
      scaleX: ref(1),
      scaleY: ref(1),
      width: 1920,
      height: 1080
    }
  }
  return ctx
}
