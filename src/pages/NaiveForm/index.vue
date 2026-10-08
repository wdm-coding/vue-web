<script setup lang="ts">
	import { ProForm, ProFormText, ProFormField, ProFormNumber } from "@/components/ProForm/components/index.ts"
	import { reactive, ref } from "vue"
	import { FormInst, NButton } from "naive-ui"
	const formRef = ref<FormInst | null>(null)
	const model = reactive({
		name: "",
		password: "",
		desc: "",
		number: "",
	})
	const rules = reactive({
		name: [{ required: true, message: "请输入姓名", trigger: ["blur"] }],
		password: [{ required: true, message: "请输入密码", trigger: ["blur"] }],
		desc: [{ required: true, message: "请输入描述", trigger: ["blur"] }],
		number: [{ required: true, message: "请输入数字", trigger: ["blur"] }],
	})
	const onFinish = () => {
		formRef.value?.validate((errors) => {
			if (!errors) {
				console.log("提交成功", model)
			} else {
				console.log("提交失败", errors)
			}
		})
	}
	const onReset = () => {
		formRef.value?.restoreValidation()
	}
	defineOptions({
		name: "NaiveForm",
	})
</script>

<template>
	<div class="naiveForm_wrap">
		<ProForm
			class="formBox"
			ref="formRef"
			label-placement="left"
			label-width="100px"
			label-align="right"
			:model="model"
			:rules="rules"
			:grid="true"
			:rowProps="{ cols: 24 }"
			:colProps="{ span: 12 }"
		>
			<ProFormText label="姓名" path="name" v-model:value="model.name" placeholder="请输入姓名">
				<template #prefix>
					<span>prefix</span>
				</template>
				<template #suffix>
					<span>suffix</span>
				</template>
			</ProFormText>
			<ProFormText
				label="密码"
				path="password"
				v-model:value="model.password"
				type="password"
				placeholder="请输入密码"
				:span="12"
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
			<ProFormField :span="24">
				<div class="btn_group">
					<NButton type="primary" @click="onFinish">提交</NButton>
					<NButton type="primary" @click="onReset">重置</NButton>
				</div>
			</ProFormField>
		</ProForm>
	</div>
</template>

<style lang="scss" scoped>
	.naiveForm_wrap {
		padding-top: 60px;
		.formBox {
			width: 800px;
			margin: 20px auto;
			padding: 20px;
			border: 1px solid #ccc;
			border-radius: 5px;
		}
		.btn_group {
			width: 100%;
			display: flex;
			justify-content: flex-end;
			gap: 10px;
		}
	}
</style>
