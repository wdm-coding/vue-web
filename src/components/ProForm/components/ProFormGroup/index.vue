<script setup lang="ts">
	import { NCard } from "naive-ui"
	import { useProFormInject } from "../../useForm"
	import { computed } from "vue"
	const { rowProps } = useProFormInject()
	const props = withDefaults(
		defineProps<{
			span?: number
			title?: string
			style?: Record<string, string>
			cardProps?: Record<string, any>
		}>(),
		{},
	)
	const groupSpan = computed(() => props.span ?? rowProps?.cols ?? 24)
	defineOptions({
		name: "ProFormGroup",
	})
</script>

<template>
	<NCard
		:title="title"
		:style="{
			minWidth: 0,
			gridColumn: `span ${groupSpan}`,
			marginBottom: rowProps?.yGap ?? '15px',
		}"
		:contentStyle="{
			width: '100%',
			display: 'grid',
			gridTemplateColumns: `repeat(${rowProps?.cols ?? 24}, 1fr)`,
			columnGap: `${rowProps?.xGap ?? 10}px`,
			rowGap: `${rowProps?.yGap ?? 0}px`,
			...props.style,
		}"
		v-bind="{ ...props.cardProps }"
	>
		<slot></slot>
	</NCard>
</template>

<style scoped lang="scss">
	.pro_form_grid {
		display: grid;
		grid-template-columns: repeat(var(--pro-cols), 1fr);
	}
</style>

s
