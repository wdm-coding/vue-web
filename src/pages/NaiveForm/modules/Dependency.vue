<script setup lang="ts">
	import { ProFormDependency, ProFormGroup, ProFormText } from "@/components/ProForm/components/index.ts"
	defineProps<{
		model: Record<string, any>
	}>()
	defineOptions({
		name: "Dependency",
	})
</script>

<template>
	<ProFormGroup title="测试联动">
		<ProFormDependency :deps="['checkBoxGroup', 'radioGroup']">
			<template #default="{ deps }">
				<ProFormText
					v-if="deps.radioGroup === 'closed'"
					label="测试联动"
					path="depsName"
					v-model:value="model.depsName"
					placeholder="测试联动"
					disabledAutocomplete
				>
					<template #prefix>
						<Icon name="Accessibility" />
					</template>
				</ProFormText>
			</template>
		</ProFormDependency>
	</ProFormGroup>
</template>

<style lang="scss" scoped>
	.comName_wrap {
	}
</style>
