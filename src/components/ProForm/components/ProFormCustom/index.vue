<script setup lang="ts">
	import ProFormField from "../ProFormField/index.vue"
	import { useProFormInject } from "../../useForm"
	const { model } = useProFormInject()
	const props = withDefaults(
		defineProps<{
			label?: string
			path: string
		}>(),
		{},
	)

	// 写回表单模型中对应字段的值
	const setValue = (val: any) => {
		model[props.path] = val
	}

	defineOptions({
		name: "ProFormCustom",
	})
</script>

<template>
	<ProFormField :label="label" :path="path" v-bind="$attrs">
		<slot :value="model[path]" :setValue="setValue" :model="model" />
	</ProFormField>
</template>
