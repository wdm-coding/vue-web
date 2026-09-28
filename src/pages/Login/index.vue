<script setup lang="ts">
	import { ref } from "vue"
	import Icon from "@/components/Icon/index.vue"
	import { FormInst, FormRules } from "naive-ui"
	import useStore from "@/hooks/useStore"
	import { useRouter } from "vue-router"
	const router = useRouter()
	const { siteName } = useStore("global")
	const { userLogin } = useStore("auth")
	interface LoginForm {
		username: string
		password: string
	}
	const form = ref<LoginForm>({
		username: "admin",
		password: "123456",
	})
	const rules: FormRules = {
		username: [{ required: true, message: "请输入用户名", trigger: ["input", "blur"] }],
		password: [{ required: true, message: "请输入密码", trigger: ["input", "blur"] }],
	}
	const formRef = ref<FormInst | null>(null)
	const onLogin = async () => {
		formRef.value?.validate((errors) => {
			if (!errors) {
				userLogin(form.value).then((path: string) => {
					console.log("登录成功", form.value)
					router.push(path)
					window.$message.success("登录成功")
				})
			} else {
				console.log("登录失败")
			}
		})
	}

	defineOptions({
		name: "Login",
	})
</script>

<template>
	<div class="login_wrap">
		<div class="login_bg_02" />
		<div class="login_bg_01"></div>
		<div class="login_bg_03"></div>
		<!-- 登录卡片容器 -->
		<div class="login_container">
			<div class="login_icon">
				<Icon name="svg-vue" size="40" />
				<span class="site_name">{{ siteName }}</span>
			</div>
			<div class="login_card">
				<h2 class="login_title">登录</h2>
				<n-form class="login_form" :model="form" :rules="rules" ref="formRef" :show-label="false" size="large">
					<n-form-item path="username">
						<n-input v-model:value="form.username" placeholder="请输入用户名">
							<template #prefix>
								<Icon name="PersonOutline" size="24" />
							</template>
						</n-input>
					</n-form-item>
					<n-form-item path="password">
						<n-input v-model:value="form.password" type="password" placeholder="请输入密码">
							<template #prefix>
								<Icon name="LockClosedOutline" size="24" />
							</template>
						</n-input>
					</n-form-item>
					<n-form-item>
						<n-button class="login_btn" type="primary" attr-type="button" @click="onLogin"> 登录 </n-button>
					</n-form-item>
				</n-form>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.login_wrap {
		width: 100%;
		height: 100vh;
		background: url("@/assets/images/login/login_bg.webp") no-repeat center center;
		background-size: cover;
		position: relative;
		.login_bg_02 {
			position: absolute;
			width: 100%;
			height: 80vh;
			background: url("@/assets/images/login/login-bg-02.webp") no-repeat center center;
			background-size: cover;
			background-attachment: fixed;
		}
		.login_bg_03 {
			position: absolute;
			width: 100%;
			height: 100%;
			background: url("@/assets/images/login/login-bg-03.webp") no-repeat center center;
			background-size: cover;
			background-attachment: fixed;
			transform: scale(0.8);
			opacity: 0.5;
		}
		.login_bg_01 {
			position: absolute;
			width: 100%;
			height: 100%;
			background: url("@/assets/images/login/login-bg-01.png") no-repeat center center;
			background-size: cover;
			background-attachment: fixed;
			transform: scale(0.8);
			opacity: 0.9;
		}
		.login_container {
			position: relative;
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			.login_icon {
				position: absolute;
				top: 20px;
				left: 20px;
				display: flex;
				align-items: center;
				justify-content: center;
				.site_name {
					font-size: 24px;
					font-weight: bold;
					color: #fff;
					margin-left: 12px;
				}
			}
			.login_card {
				width: 480px;
				min-height: 420px;
				padding: 16px 12px;
				background: rgba(12, 34, 54, 0.3);
				backdrop-filter: blur(4px);
				border: 1px solid rgb(45, 214, 236);
				border-radius: 16px;
				box-shadow: 0 0 2px 2px rgb(45, 214, 236);
				.login_title {
					font-size: 24px;
					font-weight: bold;
					color: #fff;
					text-align: center;
					margin: 20px 0;
				}
				.login_form {
					width: 380px;
					margin: 0 auto;
					::v-deep(.n-input) {
						background-color: transparent;
						border: none;
					}
					::v-deep(.n-input__border) {
						border-color: rgb(78, 224, 244);
					}
					::v-deep(.n-input:not(.n-input--disabled):hover .n-input__state-border),
					::v-deep(.n-input:not(.n-input--disabled).n-input--focus .n-input__state-border) {
						border-color: rgb(10, 223, 251);
					}
					::v-deep(.n-input.n-input--error-status:not(.n-input--disabled) .n-input__state-border) {
						border-color: #ec4561;
					}
					::v-deep(.n-input__input-el) {
						color: #fff;
					}
					.login_btn {
						width: 100%;
						height: 48px;
						font-size: 16px;
						font-weight: bold;
						background-color: rgb(5, 187, 84);
						color: #fff;
						border-radius: 8px;
						border: none;
						margin-top: 20px;
					}
				}
			}
		}
	}
</style>
