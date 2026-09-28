<script setup lang="ts">
	import { NFormItem, NInput } from "naive-ui"
	import { inject } from "vue"
	import { provideId } from "../index.ts"
	const formValue = inject(provideId)
	defineOptions({
		name: "ComName",
	})
</script>

<template>
	<div class="comName_wrap">
		<n-form-item v-bind="$attrs">
			<n-input v-model:value="formValue.name" />
		</n-form-item>
	</div>
</template>

<style lang="scss" scoped>
	.comName_wrap {
	}
</style>
