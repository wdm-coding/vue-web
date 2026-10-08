import { inject, provide, Ref, type InjectionKey } from 'vue'
export interface ProFormContext<T = any> {
  formRef: Ref<any>
  model: Ref<T>
  grid: boolean
  rowProps?: {
    cols?: number
    xGap?: number
    yGap?: number
  }
  colProps?: {
    span?: number
  }
}

export const PRO_FORM_KEY: InjectionKey<ProFormContext> = Symbol('pro-form-context')

export function useProFormProvide<T>(context: ProFormContext<T>) {
  provide(PRO_FORM_KEY, context)
}

export function useProFormInject<T>(): ProFormContext<T> {
  const context = inject(PRO_FORM_KEY)
  if (!context) {
    throw new Error('ProForm 子组件必须包裹在 <ProForm> 内部')
  }
  return context as ProFormContext<T>
}