<script setup lang="ts">
	import ProFormField from "../ProFormField/index.vue"
	import { NInput } from "naive-ui"
	const props = withDefaults(
		defineProps<{
			label?: string
			path?: string
			placeholder?: string
			type?: "text" | "password" | "textarea"
			fieldProps?: Record<string, any>
		}>(),
		{
			type: "text",
		},
	)

	const inputValue = defineModel<any>("value", { required: true, default: "" })
	defineOptions({
		name: "ProFormText",
	})
</script>

<template>
	<ProFormField :label="label" :path="path" v-bind="$attrs">
		<NInput v-model:value="inputValue" :placeholder="placeholder" v-bind="fieldProps" :type="type" />
	</ProFormField>
</template>
