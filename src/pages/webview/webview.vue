<template>
	<web-view :src="src" :webview-styles="webviewStyles"></web-view>
</template>

<script>
export default {
	data() {
		return {
			src: '',
			webviewStyles: {
				progress: {
					color: '#FF3333'
				}
			}
		};
	},
	onLoad(options) {
		this.src = options.url;
	}
};
</script>

<style></style>
