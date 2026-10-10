<script setup lang="ts">
	import { Slot, useSlots } from "vue"
	import ProFormField from "../ProFormField/index.vue"
	import { NDatePicker } from "naive-ui"

	const props = withDefaults(
		defineProps<{
			label?: string
			path?: string
			placeholder?: string
			type?: "date" | "datetime" | "month" | "year" | "quarter" | "week"
			fieldProps?: Record<string, any>
		}>(),
		{
			type: "date",
		},
	)

	const inputValue = defineModel<any>("value", { required: true, default: null })

	const slots = useSlots()

	const valueFormat = {
		date: "yyyy-MM-dd",
		datetime: "yyyy-MM-dd HH:mm:ss",
		month: "yyyy-MM",
		year: "yyyy年",
		quarter: "yyyy-第Q季度",
		week: "YYYY-w周",
	}

	defineOptions({
		name: "ProFormDate",
	})
</script>

<template>
	<ProFormField :label="label" :path="path" v-bind="$attrs">
		<NDatePicker
			v-model:formatted-value="inputValue"
			:value-format="valueFormat[props.type]"
			:placeholder="placeholder"
			:type="type"
			style="width: 100%"
			v-bind="fieldProps"
		>
			<template v-for="(_, name) in slots" :key="name" #[name]="scopedData">
				<component :is="slots[name] as Slot" v-bind="scopedData || {}" />
			</template>
		</NDatePicker>
	</ProFormField>
</template>
