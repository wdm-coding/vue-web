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
	const itemSpan = computed(() => props.span ?? colProps?.span ?? 12)
	defineOptions({
		name: "ProFormField",
	})
</script>

<template>
	<div v-if="grid" class="pro_form_grid_item" :style="{ '--pro-cols': itemSpan ?? 0 }">
		<NFormItem :label="label" :path="path" v-bind="$attrs">
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
	</div>
	<NFormItem v-else :label="label" :path="path" v-bind="$attrs">
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
		.pro_form_label {
			display: inline-flex;
			align-items: center;
			gap: 4px;
		}
	}
</style>
