<script setup lang="ts">
	import { onMounted, ref, Slot, toRef, useSlots } from "vue"
	import ProFormField from "../ProFormField/index.vue"
	import { NInput } from "naive-ui"
	import { useProFormInject } from "../../useForm"
	const { model } = useProFormInject()
	const props = withDefaults(
		defineProps<{
			label?: string
			path: string
			placeholder?: string
			type?: "text" | "password" | "textarea"
			fieldProps?: Record<string, any>
			disabledAutocomplete?: boolean
		}>(),
		{
			type: "text",
			disabledAutocomplete: false,
		},
	)
	const readonly = ref(props.disabledAutocomplete)
	onMounted(() => {
		if (props.disabledAutocomplete) {
			setTimeout(() => {
				readonly.value = false
			}, 200)
		}
	})
	const slots = useSlots()
	const inputValue: any = props.path ? toRef(model, props.path) : ref(null)

	defineOptions({
		name: "ProFormText",
	})
</script>

<template>
	<ProFormField :label="label" :path="path" v-bind="$attrs">
		<NInput
			v-model:value="inputValue"
			:placeholder="placeholder"
			v-bind="fieldProps"
			:type="type"
			:readonly="disabledAutocomplete ? readonly : fieldProps?.readonly"
		>
			<template v-for="(_, name) in slots" :key="name" #[name]="scopedData">
				<component :is="slots[name] as Slot" v-bind="scopedData || {}" />
			</template>
		</NInput>
	</ProFormField>
</template>
