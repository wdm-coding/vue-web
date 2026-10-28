<script setup lang="ts">
	
	defineOptions({
		name: "Home",
	})
</script>

<template>
	<div class="home_wrap">
		<n-button type="primary">按钮</n-button>
		<h1 class="home_banner" />
	</div>
</template>

<style lang="scss" scoped>
	.home_wrap {
		width: 100%;
		min-height: 200vh;
		padding-top: 75px;
		.home_banner {
			width: 100%;
			height: 100vh;
			background: url("@/assets/images/home/banner-bg.png") no-repeat center center;
			background-size: cover;
		}
	}
</style>
