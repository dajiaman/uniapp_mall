<template>
	<view><button @tap="login">登录</button></view>
</template>

<script>
export default {
	data() {
		return {
			redirectTo: '/pages/index/index'
		};
	},
	onLoad(options) {
		if (options.redirectTo) {
			this.redirectTo = options.redirectTo;
		}
	},
	methods: {
		login() {
			this.loginSuccessCallback();
		},

		// 登录成功回调
		loginSuccessCallback() {
			this.$mRouter.redirectTo({
				route: this.redirectTo
			});
		}
	}
};
</script>

<style></style>
