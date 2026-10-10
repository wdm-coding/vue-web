<script setup lang="ts">
	import { zhCN, dateZhCN } from "naive-ui"
	import useMessage from "@/hooks/useMessage"
	useMessage()
</script>

<template>
	<n-config-provider :locale="zhCN" :dateLocale="dateZhCN">
		<n-message-provider>
			<router-view />
		</n-message-provider>
	</n-config-provider>
</template>
