<script setup lang="ts">
	import {
		ProForm,
		ProFormText,
		ProFormField,
		ProFormNumber,
		ProFormDate,
		ProFormDateRange,
		ProFormSelect,
	} from "@/components/ProForm/components/index.ts"
	import { reactive, ref } from "vue"
	import { FormInst, NButton } from "naive-ui"
	import Icon from "@/components/Icon/index.vue"
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
		select: null,
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
			<ProFormDate
				label="日期"
				path="date"
				v-model:value="model.date"
				placeholder="请选择日期"
				:span="12"
				tooltip="请选择日期"
			/>
			<ProFormDate
				label="时间日期"
				path="datetime"
				v-model:value="model.datetime"
				type="datetime"
				placeholder="请选择时间日期"
				:span="12"
				tooltip="请选择时间日期"
			/>
			<ProFormDate
				label="月份"
				path="month"
				v-model:value="model.month"
				type="month"
				placeholder="请选择月份"
				:span="12"
				tooltip="请选择月份"
			/>
			<ProFormDate
				label="年份"
				path="year"
				v-model:value="model.year"
				type="year"
				placeholder="请选择年份"
				:span="12"
				tooltip="请选择年份"
			/>
			<ProFormDate
				label="季度"
				path="quarter"
				v-model:value="model.quarter"
				type="quarter"
				placeholder="请选择季度"
				:span="12"
				tooltip="请选择季度"
			/>
			<ProFormDate
				label="周"
				path="week"
				v-model:value="model.week"
				type="week"
				placeholder="请选择周"
				:span="12"
				tooltip="请选择周"
			/>
			<ProFormDateRange
				label="日期范围"
				path="daterange"
				type="daterange"
				v-model:value="model.daterange"
				:span="12"
				tooltip="请选择日期范围"
			/>
			<ProFormDateRange
				label="时间日期范围"
				path="datetimerange"
				v-model:value="model.datetimerange"
				type="datetimerange"
				:span="12"
				tooltip="请选择时间日期范围"
			/>
			<ProFormDateRange
				label="月份范围"
				path="monthrange"
				v-model:value="model.monthrange"
				type="monthrange"
				:span="12"
				tooltip="请选择月份范围"
			/>
			<ProFormDateRange
				label="年份范围"
				path="yearrange"
				v-model:value="model.yearrange"
				type="yearrange"
				:span="12"
				tooltip="请选择年份范围"
			/>
			<ProFormDateRange
				label="季度范围"
				path="quarterrange"
				type="quarterrange"
				v-model:value="model.quarterrange"
				:span="12"
				tooltip="请选择季度范围"
			/>
			<ProFormSelect
				label="下拉选择"
				path="select"
				v-model:value="model.select"
				placeholder="请选择"
				:span="12"
				tooltip="请选择"
				:request="optionAsync"
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
