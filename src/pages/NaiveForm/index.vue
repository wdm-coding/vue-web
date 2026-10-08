<script setup lang="ts">
	import ProForm from "@/components/ProForm/index.vue"
	import ProFormText from "@/components/ProForm/components/ProFormText/index.vue"
	import ProFormField from "@/components/ProForm/components/ProFormField/index.vue"
	import { reactive, ref } from "vue"
	import { FormInst, NButton } from "naive-ui"
	const formRef = ref<FormInst | null>(null)
	const model = reactive({
		name: "",
		password: "",
		desc: "",
	})
	const rules = reactive({
		name: [{ required: true, message: "请输入姓名", trigger: ["blur"] }],
		password: [{ required: true, message: "请输入密码", trigger: ["blur"] }],
		desc: [{ required: true, message: "请输入描述", trigger: ["blur"] }],
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
			:model="model"
			ref="formRef"
			:rules="rules"
			class="formBox"
			:grid="true"
			:rowProps="{ cols: 24 }"
			:colProps="{ span: 6 }"
		>
			<ProFormText label="姓名" path="name" v-model:value="model.name" placeholder="请输入姓名" />
			<ProFormText
				label="密码"
				path="password"
				v-model:value="model.password"
				type="password"
				placeholder="请输入密码"
				:span="18"
			/>
			<ProFormText
				label="描述"
				path="desc"
				type="textarea"
				v-model:value="model.desc"
				placeholder="请输入描述"
				:span="12"
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
