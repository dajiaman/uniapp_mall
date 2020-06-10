<template>
	<view class="tui-cmt-content tui-padding">
		<view class="tui-cmt-user">
			<image src="/static/images/news/avatar_2.jpg" class="tui-avatar"></image>
			<view>z***9</view>
		</view>
		<view class="tui-cmt">物流很快，很适合我的风格❤</view>
		<view class="tui-attr">颜色：叠层钛钢流苏耳环（A74）</view>
	</view>
</template>

<script>
export default {
	name: 'commentItem'
};
</script>

<style>
.tui-padding {
	padding: 24rpx 30rpx;
	box-sizing: border-box;
}

.tui-cmt-content {
	font-size: 26rpx;
	background-color: #ffffff;
	border-bottom: 1px solid #eaeef1;
}

.tui-cmt-user {
	display: flex;
	align-items: center;
}

.tui-avatar {
	width: 60rpx;
	height: 60rpx;
	border-radius: 30rpx;
	display: block;
	margin-right: 16rpx;
}

.tui-cmt {
	padding: 14rpx 0;
}

.tui-attr {
	font-size: 24rpx;
	color: #999;
	padding: 6rpx 0;
}
</style>
