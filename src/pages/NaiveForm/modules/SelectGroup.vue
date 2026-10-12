<script setup lang="ts">
	import { ProFormSelect, ProFormGroup } from "@/components/ProForm/components/index.ts"
	defineProps<{
		model: Record<string, any>
	}>()
	const optionAsync = async (): Promise<Record<string, any>[]> => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve([
					{ label: "全部", value: "all" },
					{ label: "未解决", value: "open" },
					{ label: "已解决", value: "closed" },
					{ label: "解决中", value: "processing" },
				])
			}, 3000)
		})
	}
	defineOptions({
		name: "SelectGroup",
	})
</script>

<template>
	<ProFormGroup title="下拉选择型表单项">
		<ProFormSelect
			label="下拉选择(单选)"
			path="selectSingle"
			v-model:value="model.selectSingle"
			placeholder="请选择"
			:span="12"
			tooltip="请选择"
			:request="optionAsync"
		/>
		<ProFormSelect
			label="下拉选择(多选)"
			path="selectMulti"
			v-model:value="model.selectMulti"
			placeholder="请选择"
			:span="12"
			tooltip="请选择"
			:request="optionAsync"
			multiple
		/>
	</ProFormGroup>
</template>
