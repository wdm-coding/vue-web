<script setup lang="ts">
	import { ProFormRadioGroup, ProFormCheckBoxGroup } from "@/components/ProForm/components/index.ts"
	defineProps<{
		model: Record<string, any>
	}>()
	const options = [
		{ label: "全部", value: "all" },
		{ label: "未解决", value: "open" },
		{ label: "已解决", value: "closed" },
		{ label: "解决中", value: "processing" },
	]
	const optionAsync = async (): Promise<Record<string, any>[]> => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(options)
			}, 3000)
		})
	}
	defineOptions({
		name: "CheckRadioGroup",
	})
</script>

<template>
	<ProFormGroup title="单选框/复选框组">
		<ProFormCheckBoxGroup
			label="复选框组"
			path="checkBoxGroup"
			v-model:value="model.checkBoxGroup"
			:request="optionAsync"
		/>
		<ProFormRadioGroup label="单选框组" path="radioGroup" v-model:value="model.radioGroup" :options="options" />
	</ProFormGroup>
</template>
