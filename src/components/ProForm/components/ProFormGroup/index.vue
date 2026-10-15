<script setup lang="ts">
	import { NCard } from "naive-ui"
	import { useProFormInject } from "../../useForm"
	import { computed } from "vue"
	const { grid, rowProps } = useProFormInject()
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
	const cardStyle = computed(() =>
		grid
			? {
					minWidth: 0,
					gridColumn: `span ${groupSpan.value}`,
					marginBottom: rowProps?.yGap ?? "15px",
				}
			: {},
	)
	const contentStyle = computed(() =>
		grid
			? {
					width: "100%",
					display: "grid",
					gridTemplateColumns: `repeat(${rowProps?.cols ?? 24}, 1fr)`,
					columnGap: `${rowProps?.xGap ?? 10}px`,
					rowGap: `${rowProps?.yGap ?? 0}px`,
					...props.style,
				}
			: {
					...props.style,
				},
	)
	defineOptions({
		name: "ProFormGroup",
	})
</script>

<template>
	<NCard :title="title" :style="cardStyle" :contentStyle="contentStyle" v-bind="{ ...props.cardProps }">
		<slot></slot>
	</NCard>
</template>

s
