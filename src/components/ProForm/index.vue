<script setup lang="ts">
  import {
    FormInst, NForm, type FormValidationError 
  } from 'naive-ui'
  import {
    nextTick, reactive, ref 
  } from 'vue'
  import { useProFormProvide } from './useForm'
  const innerFormRef = ref<FormInst | null>(null)
  const props = withDefaults(
    defineProps<{
      rules?: Record<string, any[]>
      grid?: boolean
      rowProps?: {
        cols?: number
        xGap?: number
        yGap?: number
      }
      colProps?: {
        span?: number
      }
      scrollTarget?: HTMLElement | undefined
    }>(),
    {}
  )
  const emit = defineEmits<{
    onFinish: [model: Record<string, any>]
    onError: [errors: FormValidationError[]]
  }>()
  const model = reactive<Record<string, any>>({})

  // 注入 Context
  useProFormProvide({
    formRef: innerFormRef,
    model: model,
    grid: props.grid,
    rowProps: props.rowProps,
    colProps: props.colProps
  })
  // 滚动到第一个错误位置
  const scrollFirstError = () => {
    nextTick(() => {
      const firstError = document.querySelector('.n-form-item-feedback--error, .n-input--error-status')
      if (firstError && props.scrollTarget) {
        const errorRect = firstError.getBoundingClientRect()
        const containerRect = props.scrollTarget.getBoundingClientRect()
        const targetTop = errorRect.top - containerRect.top + props.scrollTarget.scrollTop - 100
        // eslint-disable-next-line vue/no-mutating-props
        props.scrollTarget.scrollTop = targetTop
      }
    })
  }
  // 提交表单
  const onSubmit = () => {
    innerFormRef.value?.validate(errors => {
      if (!errors) {
        emit('onFinish', model)
      } else {
        emit('onError', errors)
        scrollFirstError()
      }
    })
  }
  // 验证表单
  const validate = (callback: (errors: FormValidationError[] | null) => void) => {
    innerFormRef.value?.validate(errors => {
      if (errors) {
        callback(errors)
        scrollFirstError()
      } else {
        callback(null)
      }
    })
  }

  // 重置表单
  const restoreValidation = () => {
    Object.keys(model).forEach(key => {
      model[key] = null
    })
    innerFormRef.value?.restoreValidation()
  }

  // 刷新标签宽度
  const invalidateLabelWidth = () => innerFormRef.value?.invalidateLabelWidth()

  // 获取model值
  const getFieldsValue = (params?: string[] | undefined | null | string) => {
    if (!params) {
      return model
    }
    if (Array.isArray(params)) {
      const result: Record<string, any> = {}
      params.forEach((key: string) => {
        result[key] = model[key]
      })
      return result
    }
    return model[params]
  }

  // 设置model值
  const setFieldsValue = (params: Record<string, any>) => {
    Object.assign(model, params)
  }
  // 暴露原生实例方法
  defineExpose({
    onSubmit,
    validate,
    restoreValidation,
    invalidateLabelWidth,
    getFieldsValue,
    setFieldsValue
  })
  defineOptions({
    name: 'ProForm',
    inheritAttrs: false
  })
</script>

<template>
  <NForm
    :model="model"
    :rules="rules"
    ref="innerFormRef"
    v-bind="$attrs"
  >
    <div
      v-if="props.grid"
      class="pro_form_grid"
      :style="{
        '--pro-cols': props.rowProps?.cols ?? 24,
        columnGap: `${props.rowProps?.xGap ?? 10}px`,
        rowGap: `${props.rowProps?.yGap ?? 0}px`,
      }"
    >
      <slot />
    </div>
    <template v-else>
      <slot />
    </template>
  </NForm>
</template>

<style scoped lang="scss">
	.pro_form_grid {
		display: grid;
		grid-template-columns: repeat(var(--pro-cols), 1fr);
	}
</style>
