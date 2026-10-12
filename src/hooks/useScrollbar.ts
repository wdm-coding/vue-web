import { inject, provide, ref, Ref, type InjectionKey } from 'vue'
const SCROLL_CONTEXT_KEY: InjectionKey<{
  scrollTarget: Ref<HTMLElement | undefined>
}> = Symbol('scroll-context')
const useScrollbar = () => {
  const scrollTarget = ref<HTMLElement | undefined>(undefined)
  return {
    setScrollTarget: (newTarget: HTMLElement | undefined) => {
      console.log(newTarget)
      provide(SCROLL_CONTEXT_KEY, {
        scrollTarget: ref(newTarget)
      })
    },
    getScrollTarget: () => {
      if (!inject(SCROLL_CONTEXT_KEY)) return
      scrollTarget.value = inject(SCROLL_CONTEXT_KEY)?.scrollTarget.value
      return scrollTarget.value
    }
  }
}

export default useScrollbar