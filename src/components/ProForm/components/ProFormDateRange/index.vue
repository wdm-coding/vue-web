<script setup lang="ts">
	import { computed, Slot, useSlots } from "vue"
	import ProFormField from "../ProFormField/index.vue"
	import { NDatePicker } from "naive-ui"

	const props = withDefaults(
		defineProps<{
			label?: string
			path?: string
			placeholder?: string
			type?: "daterange" | "datetimerange" | "monthrange" | "yearrange" | "quarterrange"
			startPlaceholder?: string
			endPlaceholder?: string
			fieldProps?: Record<string, any>
		}>(),
		{
			type: "daterange",
		},
	)

	const inputValue = defineModel<any>("value", { required: true, default: null })

	const slots = useSlots()

	const valueFormat = {
		daterange: "yyyy-MM-dd",
		datetimerange: "yyyy-MM-dd HH:mm:ss",
		monthrange: "yyyy-MM",
		yearrange: "yyyy",
		quarterrange: "yyyy-第Q季度",
	}
	const _startPlaceholder = computed(() => {
		if (props.type === "yearrange") {
			return "开始年份"
		}
		if (props.type === "quarterrange") {
			return "开始季度"
		}
		return props.startPlaceholder || undefined
	})
	const _endPlaceholder = computed(() => {
		if (props.type === "yearrange") {
			return "结束年份"
		}
		if (props.type === "quarterrange") {
			return "结束季度"
		}
		return props.endPlaceholder || undefined
	})
	defineOptions({
		name: "ProFormDateRange",
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
			:start-placeholder="_startPlaceholder"
			:end-placeholder="_endPlaceholder"
		>
			<template v-for="(_, name) in slots" :key="name" #[name]="scopedData">
				<component :is="slots[name] as Slot" v-bind="scopedData || {}" />
			</template>
		</NDatePicker>
	</ProFormField>
</template>
