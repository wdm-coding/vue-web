<script setup lang="ts">
	import Icon from "@/components/Icon/index.vue"
	import { h } from "vue"
	import { ref } from "vue"
	const fApi = ref({})
	const formData = ref({
		goods_name: "",
		label: [],
	})
	const handleSubmit = (formData: object) => {
		alert(JSON.stringify(formData))
	}
	const options = ref({
		resetBtn: true,
		info: {
			type: "tooltip",
			placement: "top",
			icon: () => h(Icon, { name: "vite" }),
			content: "这是字段说明",
		},
	})
	const rule = ref([
		{
			type: "input",
			field: "goods_name",
			title: "商品名称",
			props: {
				placeholder: "请输入商品名称",
			},
			info: {
				type: "tooltip",
				placement: "top",
				icon: "icon-info",
				content: "这是字段说明",
			},
		},
		{
			type: "checkbox",
			field: "label",
			title: "标签",
			options: [
				{ label: "好用", value: 0 },
				{ label: "快速", value: 1 },
				{ label: "高效", value: 2 },
				{ label: "全能", value: 3 },
			],
		},
	])
	defineOptions({
		name: "MyApp",
	})
</script>

<template>
	<div class="my_app_wrap">
		<div class="my_app_title">我的应用</div>
	</div>
</template>

<style lang="scss" scoped>
	.my_app_wrap {
		height: 100vh;
		background-color: #f5f5f5;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
