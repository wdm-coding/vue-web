<script setup lang="ts">
	import { ref, Slot, toRef, useSlots } from "vue"
	import ProFormField from "../ProFormField/index.vue"
	import { NSwitch } from "naive-ui"
	import { useProFormInject } from "../../useForm.ts"
	const { model } = useProFormInject()
	const props = withDefaults(
		defineProps<{
			label?: string
			path: string
			placeholder?: string
			fieldProps?: Record<string, any>
		}>(),
		{},
	)
	const slots = useSlots()
	const inputValue: any = props.path ? toRef(model, props.path) : ref(null)

	defineOptions({
		name: "ProFormSwitch",
		inheritAttrs: false,
	})
</script>

<template>
	<ProFormField :label="label" :path="path" v-bind="$attrs">
		<NSwitch v-model:value="inputValue" :placeholder="placeholder" v-bind="fieldProps">
			<template v-for="(_, name) in slots" :key="name" #[name]="scopedData">
				<component :is="slots[name] as Slot" v-bind="scopedData || {}" />
			</template>
		</NSwitch>
	</ProFormField>
</template>
