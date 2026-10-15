<script setup lang="ts">
	import { ref, toRef } from "vue"
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
	const innerValue: any = props.path ? toRef(model, props.path) : ref(null)

	defineOptions({
		name: "ProFormCustom",
	})
</script>

<template>
	<ProFormField :label="label" :path="path" v-bind="$attrs">
		<slot />
	</ProFormField>
</template>
