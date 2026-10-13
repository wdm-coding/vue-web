<script setup lang="ts">
	import { ProForm, ProFormField } from "@/components/ProForm/components/index.ts"
	import InputGroup from "./modules/InputGroup.vue"
	import DateGroup from "./modules/DateGroup.vue"
	import SelectGroup from "./modules/SelectGroup.vue"
	import CascaderGroup from "./modules/CascaderGroup.vue"
	import { reactive, ref } from "vue"
	import { FormInst, NButton } from "naive-ui"
	import useStore from "@/hooks/useStore.ts"
	const { scrollTarget } = useStore("global")
	const formRef = ref<FormInst | null>(null)
	const model = reactive<Record<string, any>>({
		name: "1",
		password: "1",
		desc: "1",
		number: 0,
		date: null,
		datetime: null,
		month: null,
		year: null,
		quarter: null,
		week: null,
		daterange: null,
		datetimerange: null,
		monthrange: null,
		yearrange: null,
		quarterrange: null,
		selectSingle: null,
		selectMulti: null,
		selectAsync: null,
		cascaderSingle: null,
		cascaderMulti: null,
		cascaderAsync: null,
	})
	const rules = reactive({
		name: [{ required: true, message: "请输入姓名", trigger: ["blur"] }],
		password: [{ required: true, message: "请输入密码", trigger: ["blur"] }],
		desc: [{ required: true, message: "请输入描述", trigger: ["blur"] }],
		number: [{ type: "number", required: true, message: "请输入数字", trigger: ["blur"] }],
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
			label-width="120px"
			label-align="right"
			:model="model"
			:rules="rules"
			:grid="true"
			:rowProps="{ cols: 24 }"
			:colProps="{ span: 12 }"
			:scrollTarget="scrollTarget"
		>
			<InputGroup :model="model" />
			<DateGroup :model="model" />
			<SelectGroup :model="model" />
			<CascaderGroup :model="model" />
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
			width: 1200px;
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
