<script setup lang="ts">
	import { menus as PortalMenus } from "@/layouts/PortalLayout/index.ts"
	import Menus from "@/layouts/components/Menus/index.vue"
	import { useRouter } from "vue-router"
	import useStore from "@/hooks/useStore"
	import { DropdownOption } from "naive-ui"
	import avatar from "@/assets/images/logo.jpeg"
	defineOptions({
		name: "GlobalHeader",
	})
	const { isFixed = true } = defineProps<{
		isFixed?: boolean
	}>()
	const { siteName } = useStore("global")
	const { isLoggedIn, userInfo, userLogout } = useStore("auth")
	const router = useRouter()
	const dropDownOptions: DropdownOption[] = [
		{
			label: "退出登录",
			key: "logout",
		},
	]
	const handleSelect = (key: string) => {
		switch (key) {
			case "logout":
				userLogout().then(() => {
					router.replace("/home")
					window.$message.success("退出成功")
				})
				break
			case "register":
				break
			case "login":
				router.push("/login")
				break
			default:
				break
		}
	}
</script>

<template>
	<div
		:class="{
			global_header_wrap: true,
			global_header_fixed: isFixed,
		}"
	>
		<div class="site_name">{{ siteName }}</div>
		<div class="global_header_middle_wrap">
			<Menus :menus="PortalMenus" mode="horizontal" />
		</div>
		<div class="global_header_right_wrap">
			<div v-if="isLoggedIn">
				<n-dropdown trigger="hover" :options="dropDownOptions" @select="handleSelect">
					<n-space align="center" style="cursor: pointer">
						<n-avatar round :size="38" :src="avatar" placement="bottom" />
						<span>{{ userInfo?.nickname }}</span>
					</n-space>
				</n-dropdown>
			</div>
			<div v-else>
				<n-button quaternary type="primary" @click="handleSelect('register')">注册</n-button>
				<n-button quaternary @click="handleSelect('login')">登录</n-button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.global_header_wrap {
		width: 100%;
		height: 58px;
		background: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(7px);
		display: flex;
		align-items: center;
		padding: 0 20px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		.site_name {
			margin-right: 20px;
		}
		.global_header_middle_wrap {
			min-width: 0;
			flex: 1;
			flex-shrink: 0;
			height: 100%;
			display: flex;
			align-items: center;
		}
		.global_header_right_wrap {
			display: flex;
			align-items: center;
			margin-left: auto;
			height: 100%;
			padding-right: 20px;
		}
	}
	.global_header_fixed {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
	}
	.is_scroll {
		background: rgba(255, 255, 255, 1);
		color: #fff000;
	}
</style>
