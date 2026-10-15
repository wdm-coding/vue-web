<script setup lang="ts">
	import { useProFormInject } from "../../useForm"
	import { computed } from "vue"
	const { model } = useProFormInject()
	const props = withDefaults(
		defineProps<{
			deps: string[]
		}>(),
		{},
	)
	const depsValue = computed(() => {
		if (props.deps.length === 0) return {}
		return Object.fromEntries(props.deps.map((d) => [d, (model as Record<string, unknown>)[d]]))
	})
	defineOptions({
		name: "ProFormDependency",
	})
</script>

<template>
	<slot :deps="depsValue" />
</template>
