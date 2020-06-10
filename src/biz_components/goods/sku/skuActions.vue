<template>
	<view class="tui-operation tui-operation-right tui-right-flex tui-popup-btn">
		<view class="tui-flex-1"><tui-button height="72rpx" :size="28" type="danger" shape="circle" @tap="createEmitter('sku:addCart')">加入购物车</tui-button></view>
		<view class="tui-flex-1"><tui-button height="72rpx" :size="28" type="warning" shape="circle" @tap="createEmitter('sku:buy')">立即购买</tui-button></view>
	</view>
</template>

<script>
	import tuiButton from '@/components/thorui/tui-button/tui-button.vue';

	export default {
		components: {
			tuiButton
		},
		props: {
			// skuEventBus: null
		},
		methods: {
			createEmitter(name) {
				uni.$emit(name);
			}
		}
	}
</script>

<style scoped>
	
	
	
.tui-operation {
	width: 100%;
	height: 100rpx;
	background: rgba(255, 255, 255, 0.98);
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	z-index: 10;
	bottom: 0;
	left: 0;
	padding-bottom: env(safe-area-inset-bottom);
}

.tui-safearea-bottom {
	width: 100%;
	height: env(safe-area-inset-bottom);
}

.tui-operation::before {
	content: '';
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	border-top: 1rpx solid #eaeef1;
	-webkit-transform: scaleY(0.5);
	transform: scaleY(0.5);
}

.tui-operation-left {
	display: flex;
	align-items: center;
}

.tui-operation-item {
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	position: relative;
}

.tui-operation-text {
	font-size: 22rpx;
	color: #333;
}

.tui-opacity {
	opacity: 0.5;
}

.tui-scale-small {
	transform: scale(0.9);
	transform-origin: center center;
}

.tui-operation-right {
	height: 100rpx;
	padding-top: 0;
}

.tui-right-flex {
	display: flex;
	align-items: center;
	justify-content: center;
}

.tui-flex-1 {
	flex: 1;
	padding: 16rpx;
}
</style>
