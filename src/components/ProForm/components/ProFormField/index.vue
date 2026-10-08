<script setup lang="ts">
	import { NFormItem } from "naive-ui"
	import { useProFormInject } from "../../useForm"
	import { computed } from "vue"
	const { grid, colProps } = useProFormInject()
	const props = withDefaults(
		defineProps<{
			label?: string
			path?: string
			span?: number
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
			<slot />
		</NFormItem>
	</div>
	<NFormItem v-else :label="label" :path="path" v-bind="$attrs">
		<slot />
	</NFormItem>
</template>

<style scoped lang="scss">
	.pro_form_grid_item {
		min-width: 0;
		grid-column: span var(--pro-cols);
	}
</style>
