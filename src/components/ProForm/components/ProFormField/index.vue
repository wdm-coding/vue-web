<script setup lang="ts">
	import { NFormItem } from "naive-ui"
	import { useProFormInject } from "../../useForm"
	import { computed } from "vue"
	import { HelpCircleOutline } from "@vicons/ionicons5"
	const { grid, colProps } = useProFormInject()
	const props = withDefaults(
		defineProps<{
			label?: string
			path?: string
			span?: number
			tooltip?: string
		}>(),
		{},
	)
	// 栅格占位列数：自身 span > 表单级 colProps > 默认 12
	const itemSpan = computed(() => props.span ?? colProps?.span ?? 12)
	defineOptions({
		name: "ProFormField",
		inheritAttrs: false,
	})
</script>

<template>
	<NFormItem
		:class="{ pro_form_grid_item: grid }"
		:style="grid ? { '--pro-cols': itemSpan } : undefined"
		:label="label"
		:path="path"
		v-bind="$attrs"
	>
		<template #label v-if="tooltip">
			<div class="pro_form_label">
				<span>{{ label }}</span>
				<n-tooltip trigger="hover">
					<template #trigger>
						<n-icon color="rgba(0, 0, 0, 0.4)" size="16" style="cursor: help">
							<HelpCircleOutline />
						</n-icon>
					</template>
					{{ tooltip }}
				</n-tooltip>
			</div>
		</template>
		<slot />
	</NFormItem>
</template>

<style scoped lang="scss">
	.pro_form_grid_item {
		min-width: 0;
		grid-column: span var(--pro-cols);
	}
	.pro_form_label {
		display: inline-flex;
		align-items: center;
		gap: 4px;
	}
</style>
