<template>
	<view class="tui-address-flex">
		<view class="tui-address-left">
			<view class="tui-address-main">
				<view class="tui-address-name tui-ellipsis">{{ addressInfo.userName }}</view>
				<view class="tui-address-tel">{{ addressInfo.telNumber }}</view>
			</view>
			<view class="tui-address-detail">
				<view class="tui-address-label" v-if="addressInfo.isDefault">默认</view>
				<view class="tui-address-label" v-if="addressInfo.tagName">{{ addressInfo.tagName }}</view>
				<text>{{ addressInfo.detailInfo }}</text>
			</view>
		</view>
		<view class="tui-address-imgbox"><image class="tui-address-img" src="/static/images/mall/my/icon_addr_edit.png" /></view>
	</view>
</template>

<script>
import tuiListCell from '@/components/thorui/tui-list-cell/tui-list-cell.vue';

export default {
	name: 'addressItem',
	components: {
		tuiListCell
	},
	props: {
		addressInfo: {
			type: Object,
			default: {},
			required: true
		}
	}
};
</script>

<style>
.tui-address-flex {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.tui-address-main {
	width: 600rpx;
	height: 70rpx;
	display: flex;
	font-size: 30rpx;
	line-height: 86rpx;
	padding-left: 30rpx;
}

.tui-address-name {
	width: 120rpx;
	height: 60rpx;
}

.tui-address-tel {
	margin-left: 10rpx;
}

.tui-address-detail {
	font-size: 24rpx;
	word-break: break-all;
	padding-bottom: 25rpx;
	padding-left: 25rpx;
	padding-right: 120rpx;
}

.tui-address-label {
	padding: 5rpx 8rpx;
	flex-shrink: 0;
	background: #e41f19;
	border-radius: 6rpx;
	color: #fff;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	font-size: 25rpx;
	line-height: 25rpx;
	transform: scale(0.8);
	transform-origin: center center;
	margin-right: 6rpx;
}

.tui-address-imgbox {
	width: 80rpx;
	height: 100rpx;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	right: 10rpx;
}

.tui-address-img {
	width: 36rpx;
	height: 36rpx;
}
</style>
