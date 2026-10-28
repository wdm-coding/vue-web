<script setup lang="ts">
	import { zhCN, dateZhCN } from "naive-ui"
	import useMessage from "@/hooks/useMessage"
	import useStore from "@/hooks/useStore"
	import { watchEffect } from "vue"
	const { theme } = useStore("global")
	useMessage()
	watchEffect(() => {
		document.documentElement.setAttribute('data-theme', theme.value)
	})
</script>

<template>
	<n-config-provider :locale="zhCN" :dateLocale="dateZhCN">
		<n-message-provider>
			<router-view />
		</n-message-provider>
	</n-config-provider>
</template>
