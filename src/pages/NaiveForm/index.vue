<script setup lang="ts">
	import ProForm from "@/components/ProForm/index.vue"
	import ProFormText from "@/components/ProForm/components/ProFormText/index.vue"
	import { reactive } from "vue"
	const model = reactive({
		name: "",
		age: "",
	})
	defineOptions({
		name: "NaiveForm",
	})
</script>

<template>
	<div class="naiveForm_wrap">
		<ProForm :model="model">
			<ProFormText label="姓名" path="name" v-model:value="model.name" />
			<ProFormText label="年龄" path="age" v-model:value="model.age" />
		</ProForm>
	</div>
</template>

<style lang="scss" scoped>
	.naiveForm_wrap {
		padding-top: 60px;
	}
</style>
