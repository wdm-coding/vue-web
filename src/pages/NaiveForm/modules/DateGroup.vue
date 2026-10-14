<script setup lang="ts">
	import { ProFormDate, ProFormDateRange, ProFormGroup } from "@/components/ProForm/components/index.ts"
	defineOptions({
		name: "DateGroup",
	})
</script>

<template>
	<ProFormGroup title="日期型表单项">
		<ProFormDate label="日期" path="date" placeholder="请选择日期" :span="12" tooltip="请选择日期" />
		<ProFormDate
			label="时间日期"
			path="datetime"
			type="datetime"
			placeholder="请选择时间日期"
			:span="12"
			tooltip="请选择时间日期"
		/>
		<ProFormDate label="月份" path="month" type="month" placeholder="请选择月份" :span="12" tooltip="请选择月份" />
		<ProFormDate label="年份" path="year" type="year" placeholder="请选择年份" :span="12" tooltip="请选择年份" />
		<ProFormDate label="季度" path="quarter" type="quarter" placeholder="请选择季度" :span="12" tooltip="请选择季度" />
		<ProFormDate label="周" path="week" type="week" placeholder="请选择周" :span="12" tooltip="请选择周" />
		<ProFormDateRange label="日期范围" path="daterange" type="daterange" :span="12" tooltip="请选择日期范围" />
		<ProFormDateRange
			label="时间日期范围"
			path="datetimerange"
			type="datetimerange"
			:span="12"
			tooltip="请选择时间日期范围"
		/>
		<ProFormDateRange label="月份范围" path="monthrange" type="monthrange" :span="12" tooltip="请选择月份范围" />
		<ProFormDateRange label="年份范围" path="yearrange" type="yearrange" :span="12" tooltip="请选择年份范围" />
		<ProFormDateRange label="季度范围" path="quarterrange" type="quarterrange" :span="12" tooltip="请选择季度范围" />
	</ProFormGroup>
</template>

<style lang="scss" scoped>
	.DateGroup_wrap {
		width: 100%;
	}
</style>
