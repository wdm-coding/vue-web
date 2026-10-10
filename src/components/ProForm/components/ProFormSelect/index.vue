<script setup lang="ts">
	import { computed, onMounted, ref, useSlots, watch } from "vue"
	import ProFormField from "../ProFormField/index.vue"
	import { NSelect } from "naive-ui"
	const emit = defineEmits(["change"])
	const props = withDefaults(
		defineProps<{
			label?: string
			path?: string
			placeholder?: string
			fieldProps?: Record<string, any>
			options?: Record<string, any>[]
			multiple?: boolean
			params?: Record<string, any>
			request?: (params?: Record<string, any>) => Promise<Record<string, any>[]>
		}>(),
		{
			multiple: false,
		},
	)
	const loading = ref(false)
	// 内部值
	const innerValue = ref<any>(null)
	// 外部值
	const externalValue = defineModel<any>("value", { required: true })

	const slots = useSlots()

	// 下拉选项
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

	// 缓存下拉选项值，避免重复请求
	const optionsValues = computed(() => selectOptions.value.map((item) => item.value))
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
			if (props.multiple && Array.isArray(extlVals)) {
				innerValue.value = optionsValues.value.filter((val) => extlVals.includes(val))
			} else {
				innerValue.value = extlVals
			}
		}
	})
	// 定义组件选项
	defineOptions({
		name: "ProFormSelect",
	})
</script>

<template>
	<ProFormField :label="label" :path="path" v-bind="$attrs">
		<NSelect
			style="width: 100%"
			:value="innerValue"
			:placeholder="placeholder"
			:options="selectOptions"
			:loading="loading"
			:multiple="multiple"
			@update:value="handleChange"
			v-bind="fieldProps"
		>
			<template v-for="(_, name) in slots" :key="name" #[name]="scopedData">
				<component :is="slots[name]" v-bind="scopedData || {}" />
			</template>
		</NSelect>
	</ProFormField>
</template>
