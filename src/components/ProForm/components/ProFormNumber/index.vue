<script setup lang="ts">
	import { Slot, useSlots } from "vue"
	import ProFormField from "../ProFormField/index.vue"
	import { NInputNumber } from "naive-ui"

	const props = withDefaults(
		defineProps<{
			label?: string
			path?: string
			placeholder?: string
			fieldProps?: Record<string, any>
		}>(),
		{},
	)

	const inputValue = defineModel<any>("value", { required: true, default: null })

	const slots = useSlots()

	defineOptions({
		name: "ProFormNumber",
	})
</script>

<template>
	<ProFormField :label="label" :path="path" v-bind="$attrs">
		<NInputNumber style="width: 100%" v-model:value="inputValue" :placeholder="placeholder" v-bind="fieldProps">
			<template v-for="(_, name) in slots" :key="name" #[name]="scopedData">
				<component :is="slots[name] as Slot" v-bind="scopedData || {}" />
			</template>
		</NInputNumber>
	</ProFormField>
</template>
