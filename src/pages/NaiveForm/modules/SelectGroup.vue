<script setup lang="ts">
	import { ProFormSelect } from "@/components/ProForm/components/index.ts"
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
	<ProFormSelect
		label="下拉选择"
		path="select"
		v-model:value="model.select"
		placeholder="请选择"
		:span="12"
		tooltip="请选择"
		:request="optionAsync"
	/>
</template>
