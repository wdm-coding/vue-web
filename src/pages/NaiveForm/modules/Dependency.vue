<script setup lang="ts">
	import {
		ProFormDependency,
		ProFormGroup,
		ProFormText,
		ProFormRadioGroup,
	} from "@/components/ProForm/components/index.ts"
	defineOptions({
		name: "Dependency",
	})
</script>

<template>
	<ProFormGroup title="联动组件">
		<ProFormRadioGroup
			label="是否展示联动组件"
			path="isShowDep"
			:options="[
				{ label: '是', value: '1' },
				{ label: '否', value: '0' },
			]"
		/>
		<ProFormDependency :deps="['isShowDep']">
			<template #default="{ deps }">
				<ProFormText
					v-if="deps.isShowDep === '1'"
					label="联动组件"
					path="depsName"
					placeholder="联动组件"
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
