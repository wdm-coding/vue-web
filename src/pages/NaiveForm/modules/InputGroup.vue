<script setup lang="ts">
	import { ProFormText, ProFormNumber } from "@/components/ProForm/components/index.ts"
	import Icon from "@/components/Icon/index.vue"
	defineProps<{
		model: Record<string, any>
	}>()
	defineOptions({
		name: "InputGroup",
	})
</script>

<template>
	<ProFormText label="姓名" path="name" v-model:value="model.name" placeholder="请输入姓名" disabledAutocomplete>
		<template #prefix>
			<Icon name="Accessibility" />
		</template>
	</ProFormText>
	<ProFormText
		label="密码"
		path="password"
		v-model:value="model.password"
		type="password"
		placeholder="请输入密码"
		:span="12"
		:fieldProps="{
			'show-password-on': 'click',
		}"
	/>
	<ProFormText
		label="描述"
		path="desc"
		type="textarea"
		v-model:value="model.desc"
		placeholder="请输入描述"
		:span="24"
		tooltip="请输入描述"
	/>
	<ProFormNumber
		label="数字"
		path="number"
		v-model:value="model.number"
		placeholder="请输入数字"
		:span="24"
		tooltip="请输入数字"
	/>
</template>
