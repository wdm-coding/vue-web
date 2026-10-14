<script setup lang="ts">
	import { computed, ComputedRef, onMounted, ref, toRef, watch } from "vue"
	import ProFormField from "../ProFormField/index.vue"
	import { NCheckboxGroup, NCheckbox } from "naive-ui"
	import { useProFormInject } from "../../useForm"
	const { model } = useProFormInject()
	const emit = defineEmits(["change"])
	const props = withDefaults(
		defineProps<{
			label?: string
			path?: string
			placeholder?: string
			fieldProps?: Record<string, any>
			options?: Record<string, any>[]
			params?: Record<string, any>
			request?: (params?: Record<string, any>) => Promise<Record<string, any>[]>
			layout?: "vertical" | "horizontal"
		}>(),
		{
			layout: "horizontal",
		},
	)
	const loading = ref(false)
	// 内部值
	const innerValue = ref<any>(null)
	// 外部值
	const externalValue = props.path ? toRef(model, props.path) : ref(null)
	const labelField: ComputedRef<string> = computed(() => props.fieldProps?.labelField || "label")
	const valueField: ComputedRef<string> = computed(() => props.fieldProps?.valueField || "value")
	// 选项
	const selectOptions = ref<Record<string, any>[]>([])
	let reqId = 0
	const requestOptions = async (params?: Record<string, any>) => {
		if (props.options) {
			selectOptions.value = props.options || []
			return
		}
		if (props.request) {
			const id = ++reqId
			loading.value = true
			try {
				const res = await props.request(params)
				if (id === reqId) selectOptions.value = res ?? []
			} finally {
				if (id === reqId) loading.value = false
			}
		}
	}
	// 初始化时请求数据
	onMounted(() => {
		requestOptions(props.params)
	})

	// 监听params变化，重新请求数据
	watch(
		() => JSON.stringify(props.params ?? {}),
		() => {
			requestOptions(props.params)
		},
	)

	// 用户选择值时触发的事件
	const handleChange = (val: any) => {
		emit("change", val)
		// 更新内部值
		innerValue.value = val
		// 同步给外部值
		externalValue.value = val
	}

	// 外部值同步给内部值
	watch([() => externalValue.value, () => selectOptions.value], ([extlVals, opts]) => {
		if (opts.length > 0) {
			innerValue.value = extlVals
		}
	})
	defineOptions({
		name: "ProFormCheckBoxGroup",
	})
</script>

<template>
	<ProFormField :label="label" :path="path" v-bind="$attrs">
		<NCheckboxGroup @update:value="handleChange" v-bind="fieldProps" :value="innerValue">
			<n-space :vertical="layout === 'vertical'">
				<NCheckbox v-for="item in selectOptions" :key="item[valueField]" :value="item[valueField]">
					{{ item[labelField] }}
				</NCheckbox>
			</n-space>
		</NCheckboxGroup>
	</ProFormField>
</template>
