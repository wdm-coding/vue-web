<script setup lang="ts">
	import { zhCN } from "naive-ui"
	import useMessage from "@/hooks/useMessage"
	useMessage()
</script>

<template>
	<n-config-provider :locale="zhCN">
		<n-message-provider>
			<router-view />
		</n-message-provider>
	</n-config-provider>
</template>
