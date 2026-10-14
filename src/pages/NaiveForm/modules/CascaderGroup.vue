<script setup lang="ts">
	import { ProFormGroup, ProFormCascader } from "@/components/ProForm/components/index.ts"
	const options = [
		{
			label: "甘肃省",
			value: "620000",
			isLeaf: false,
			children: [
				{
					label: "兰州市",
					value: "620100",
					children: [
						{
							label: "城关区",
							value: "620101",
						},
						{
							label: "七里河区",
							value: "620103",
						},
					],
				},
				{
					label: "白银市",
					value: "620200",
				},
				{
					label: "张掖市",
					value: "620300",
				},
			],
		},
		{
			label: "陕西省",
			value: "610000",
			children: [
				{
					label: "西安市",
					value: "610100",
					isLeaf: false,
				},
				{
					label: "延安市",
					value: "610200",
				},
				{
					label: "铜川市",
					value: "610300",
				},
			],
		},
	]
	const optionAsync = async (): Promise<Record<string, any>[]> => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(options)
			}, 3000)
		})
	}
	defineOptions({
		name: "CascaderGroup",
	})
</script>

<template>
	<ProFormGroup title="下拉选择型表单项">
		<ProFormCascader
			label="级联选择器(单选)"
			path="cascader"
			placeholder="请选择"
			:span="12"
			tooltip="请选择"
			:options="options"
			:fieldProps="{
				checkStrategy: 'child',
			}"
		/>
		<ProFormCascader
			label="级联选择器(多选)"
			path="cascader"
			placeholder="请选择"
			:span="12"
			tooltip="请选择"
			:options="options"
			multiple
			:fieldProps="{
				cascade: true, // 是否开启级联
				checkStrategy: 'all', // 是否可勾选
			}"
		/>
		<ProFormCascader
			label="级联选择器(异步加载数据)"
			path="cascader"
			placeholder="请选择"
			:span="12"
			tooltip="请选择"
			:request="optionAsync"
			:fieldProps="{
				showPath: true,
				cascade: false, // 是否开启级联
				checkStrategy: 'all', // 是否可勾选
			}"
		/>
	</ProFormGroup>
</template>
