<script setup lang="ts">
	import { NForm } from "naive-ui"
	defineOptions({
		name: "ProForm",
	})
</script>

<template>
	<NForm v-bind="$attrs">
		<slot></slot>
	</NForm>
</template>

<style lang="scss" scoped></style>
