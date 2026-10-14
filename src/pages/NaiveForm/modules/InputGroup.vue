<script setup lang="ts">
	import { ProFormText, ProFormNumber, ProFormGroup } from "@/components/ProForm/components/index.ts"
	import Icon from "@/components/Icon/index.vue"
	defineOptions({
		name: "InputGroup",
	})
</script>

<template>
	<ProFormGroup title="输入型表单项">
		<ProFormText label="姓名" path="name" placeholder="请输入姓名" disabledAutocomplete>
			<template #prefix>
				<Icon name="Accessibility" />
			</template>
		</ProFormText>
		<ProFormText
			label="密码"
			path="password"
			type="password"
			placeholder="请输入密码"
			:span="12"
			:fieldProps="{
				'show-password-on': 'click',
			}"
		/>
		<ProFormText label="描述" path="desc" type="textarea" placeholder="请输入描述" :span="24" tooltip="请输入描述" />
		<ProFormNumber label="数字" path="number" placeholder="请输入数字" :span="24" tooltip="请输入数字" />
	</ProFormGroup>
</template>
