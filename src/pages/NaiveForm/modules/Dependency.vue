<script setup lang="ts">
	import { ProFormDependency, ProFormGroup, ProFormText, ProFormSwitch } from "@/components/ProForm/components/index.ts"
	defineOptions({
		name: "Dependency",
	})
</script>

<template>
	<ProFormGroup title="联动组件">
		<ProFormSwitch label="是否展示联动组件" path="isShowDep" />
		<ProFormDependency :deps="['isShowDep']">
			<template #default="{ deps }">
				<ProFormText v-if="deps.isShowDep" label="联动组件" path="depsName" placeholder="联动组件" disabledAutocomplete>
					<template #prefix>
						<Icon name="Accessibility" />
					</template>
				</ProFormText>
			</template>
		</ProFormDependency>
	</ProFormGroup>
</template>
