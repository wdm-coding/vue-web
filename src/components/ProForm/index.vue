<script setup lang="ts">
	import { FormInst, NForm } from "naive-ui"
	import { ref, toRef } from "vue"
	import { useProFormProvide } from "./useForm"
	const innerFormRef = ref<FormInst | null>(null)
	const props = withDefaults(
		defineProps<{
			model: Record<string, any>
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
		}>(),
		{},
	)
	const emit = defineEmits(["onFinish", "onError", "onReset"])

	const onFinish = () => {
		innerFormRef.value?.validate((errors) => {
			if (!errors) {
				emit("onFinish", props.model)
			} else {
				emit("onError", errors)
			}
		})
	}

	// 注入 Context
	useProFormProvide({
		formRef: innerFormRef,
		model: toRef(props, "model"),
		grid: props.grid,
		rowProps: props.rowProps,
		colProps: props.colProps,
	})

	// 暴露原生实例方法
	const validate = (...args: any[]) => innerFormRef.value?.validate(...args)
	const restoreValidation = () => {
		// 重置表单数据
		Object.keys(props.model).forEach((key) => {
			props.model[key] = ""
		})
		innerFormRef.value?.restoreValidation()
	}
	const invalidateLabelWidth = () => innerFormRef.value?.invalidateLabelWidth()

	defineExpose({
		onFinish,
		validate,
		restoreValidation,
		invalidateLabelWidth,
	})
	defineOptions({
		name: "ProForm",
	})
</script>

<template>
	<NForm :model="model" :rules="rules" ref="innerFormRef" v-bind="$attrs">
		<div
			v-if="props.grid"
			v-bind="props.rowProps"
			class="pro_form_grid"
			:style="{
				'--pro-cols': props.rowProps?.cols ?? 24,
				columnGap: `${props.rowProps?.xGap ?? 10}px`,
				rowGap: `${props.rowProps?.yGap ?? 0}px`,
			}"
		>
			<slot></slot>
		</div>
		<template v-else>
			<slot></slot>
		</template>
	</NForm>
</template>

<style scoped lang="scss">
	.pro_form_grid {
		display: grid;
		grid-template-columns: repeat(var(--pro-cols), 1fr);
		.btn_group {
			min-width: 0;
			grid-column: span var(--pro-cols) !important;
		}
	}
</style>
