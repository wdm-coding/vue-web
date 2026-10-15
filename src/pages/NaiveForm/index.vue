<script setup lang="ts">
	import { ProForm, ProFormField, FormInst } from "@/components/ProForm/components/index.ts"
	import InputGroup from "./modules/InputGroup.vue"
	import DateGroup from "./modules/DateGroup.vue"
	import SelectGroup from "./modules/SelectGroup.vue"
	import CascaderGroup from "./modules/CascaderGroup.vue"
	import CheckRadioGroup from "./modules/CheckRadioGroup.vue"
	import Dependency from "./modules/Dependency.vue"
	import ProFormCustom from "@/components/ProForm/components/ProFormCustom/index.vue"
	import { onMounted, reactive, ref } from "vue"
	import { NButton, NInput } from "naive-ui"
	import useStore from "@/hooks/useStore.ts"
	const { scrollTarget } = useStore("global")
	const formRef = ref<FormInst | null>(null)
	const rules = reactive({
		name: [{ required: true, message: "请输入姓名", trigger: ["blur"] }],
		password: [{ required: true, message: "请输入密码", trigger: ["blur"] }],
		desc: [{ required: true, message: "请输入描述", trigger: ["blur"] }],
		number: [{ type: "number", required: true, message: "请输入数字", trigger: ["blur"] }],
	})
	const onFinish = () => {
		formRef.value?.validate((errors) => {
			if (!errors) {
				console.log("提交成功", formRef.value?.getFieldsValue())
			} else {
				console.log("提交失败", errors)
			}
		})
	}
	onMounted(() => {
		formRef.value?.setFieldsValue({
			name: "张三",
			password: "123456",
			desc: "这是一个描述",
			number: 123,
			date: "2026-01-01",
			daterange: ["2026-01-01", "2026-01-02"],
			datetimerange: ["2026-01-01 00:00:00", "2026-01-02 00:00:00"],
			selectSingle: "open",
			selectMulti: ["closed", "processing"],
			selectAsync: ["open", "processing"],
		})
	})
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
			label-width="130px"
			label-align="right"
			:rules="rules"
			:grid="true"
			:rowProps="{ cols: 24 }"
			:colProps="{ span: 12 }"
			:scrollTarget="scrollTarget"
		>
			<InputGroup />
			<DateGroup />
			<SelectGroup />
			<CascaderGroup />
			<CheckRadioGroup />
			<Dependency />
			<ProFormCustom label="自定义字段" path="customField">
				<template #default="{}">
					<NInput />
				</template>
			</ProFormCustom>
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
