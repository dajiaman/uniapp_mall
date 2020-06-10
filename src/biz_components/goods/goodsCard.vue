<template>
	<view class="tui-pro-item" hover-class="hover" :hover-start-time="150" @tap="cardTap">
		<image :src="imgUrl" class="tui-pro-img" mode="widthFix" />
		<view class="tui-pro-content">
			<view class="tui-pro-tit">{{ title }}</view>
			<view>
				<view class="tui-pro-price">
					<text class="tui-sale-price">￥{{ price}}</text>
					<text class="tui-factory-price" v-if="constPrice">￥{{ constPrice }}</text>
				</view>
				<view class="tui-pro-pay" v-if="payNum">{{ payNum }}人付款</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'goodsCard',
	props:{
			goodsId: {
				type: [Number, String],
				required: true
			},
			title: String,
			imgUrl: String,
			price: Number,
			constPrice: Number,
			payNum: Number
	},
	data () {
		return {}
	},
	methods: {
		cardTap(){
			this.$emit('goodscard-click', this.goodsId);
		}
	}
};
</script>

<style scoped>
.tui-pro-item {
	width: 100%;
	margin-bottom: 4%;
	background: #fff;
	box-sizing: border-box;
	border-radius: 12rpx;
	overflow: hidden;
}

.tui-pro-img {
	width: 100%;
	display: block;
}

.tui-pro-content {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 20rpx;
}

.tui-pro-tit {
	color: #2e2e2e;
	font-size: 26rpx;
	word-break: break-all;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
}

.tui-pro-price {
	padding-top: 18rpx;
}

.tui-sale-price {
	font-size: 34rpx;
	font-weight: 500;
	color: #e41f19;
}

.tui-factory-price {
	font-size: 24rpx;
	color: #a0a0a0;
	text-decoration: line-through;
	padding-left: 12rpx;
}

.tui-pro-pay {
	padding-top: 10rpx;
	font-size: 24rpx;
	color: #656565;
}
</style>
