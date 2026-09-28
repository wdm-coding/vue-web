<script setup lang="ts">
	import { NForm, FormInst } from "naive-ui"
	import { provide, ref, useAttrs } from "vue"
	import { provideId } from "./index"
	const attrs = useAttrs()
	// 注入provide
	provide(provideId, attrs.model)
	defineOptions({
		name: "ProForm",
	})
</script>

<template>
	<div class="proForm_wrap">
		<n-form :ref="attrs.ref" :model="attrs.model" :rules="attrs.rules">
			<slot></slot>
		</n-form>
	</div>
</template>

<style lang="scss" scoped>
	.comName_wrap {
	}
</style>
