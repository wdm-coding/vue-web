<script setup lang="ts">
  import {
    computed, onMounted, ref, toRef, useSlots, watch 
  } from 'vue'
  import ProFormField from '../ProFormField/index.vue'
  import {
    CascaderOption, NCascader, NSpin 
  } from 'naive-ui'
  import { useProFormInject } from '../../useForm'
  const { model } = useProFormInject()
  const emit = defineEmits(['change'])
  const props = withDefaults(
    defineProps<{
      label?: string
      path?: string
      placeholder?: string
      fieldProps?: Record<string, any>
      options?: Record<string, any>[]
      multiple?: boolean
      request?: (params?: Record<string, any>) => Promise<Record<string, any>[]>
    }>(),
    {
      multiple: false
    }
  )
  const remote = computed(() => props.request !== undefined)
  const firstLoading = ref(false)
  // 内部值
  const innerValue = ref<any>(null)
  // 外部值
  const externalValue = props.path ? toRef(model, props.path) : ref(null)

  const slots = useSlots()
  // 下拉选项
  const selectOptions = ref<Record<string, any>[]>([])
  const requestOptions = async (params?: Record<string, any>) => {
    if (props.options) {
      return props.options || []
    }
    if (props.request) {
      try {
        const res = await props.request(params)
        return res ?? []
      } finally {
        firstLoading.value = false
      }
    }
  }

  // 下拉选项加载时触发的事件
  const onLoadOptions = (option: CascaderOption): Promise<void> => {
    return new Promise<void>(resolve => {
      requestOptions(option).then(res => {
        if (!option.label) {
          selectOptions.value = res || []
          firstLoading.value = false
          resolve()
        } else {
          option.children = [
            {
              value: Math.random().toString(36).substring(2),
              label: `${option.label}-${Math.random().toString(36).substring(2)}`,
              isLeaf: false
            }
          ]
          resolve()
        }
      })
    })
  }
  onMounted(() => {
    // 初始化加载根节点选项
    firstLoading.value = true
    onLoadOptions({})
  })

  // 用户选择值时触发的事件
  const handleChange = (val: any, option: CascaderOption, pathValues: string[]) => {
    console.log(val, option, pathValues)
    emit('change', val)
    // 更新内部值
    innerValue.value = val
    // 同步给外部值
    externalValue.value = val
  }

  // 外部值同步给内部值
  watch([() => externalValue.value, () => selectOptions.value], ([extlVals, opts]) => {
    if (opts.length > 0) {
      if (props.multiple && Array.isArray(extlVals)) {
        innerValue.value = extlVals
      } else {
        innerValue.value = extlVals
      }
    }
  })
  // 定义组件选项
  defineOptions({
    name: 'ProFormCascader',
    inheritAttrs: false
  })
</script>

<template>
  <ProFormField :label="label" :path="path" v-bind="$attrs">
    <NCascader
      style="width: 100%"
      :value="innerValue"
      :placeholder="placeholder"
      :options="selectOptions"
      :multiple="multiple"
      :remote="remote"
      @update:value="handleChange"
      v-bind="fieldProps"
      :on-load="onLoadOptions"
    >
      <template v-for="(_, name) in slots" :key="name" #[name]="scopedData">
        <component :is="slots[name]" v-bind="scopedData || {}" />
      </template>
      <template #empty v-if="firstLoading">
        <NSpin size="small" />
      </template>
    </NCascader>
  </ProFormField>
</template>
