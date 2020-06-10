<template>
	<view class="container">
		<view></view>
		<comment-item v-for="(item, index) in list" :key="item.id"></comment-item>

		<!--加载loadding-->
		<tui-loadmore v-if="loadding" :index="3" type="red"></tui-loadmore>
		<tui-nomore v-if="!pullUpOn" backgroundColor="#fafafa"></tui-nomore>
		<!--加载loadding-->
	</view>
</template>

<script>
import commentItem from '@/biz_components/goods/commentItem.vue';
import tuiLoadmore from '@/components/thorui/tui-loadmore/tui-loadmore.vue';
import tuiNomore from '@/components/thorui/tui-nomore/tui-nomore.vue';

export default {
	components: {
		commentItem,
		tuiLoadmore,
		tuiNomore
	},
	data() {
		return {
			list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

			pageIndex: 1,
			loadding: false,
			pullUpOn: true
		};
	},
	onLoad() {},
	onPullDownRefresh() {
		setTimeout(() => {
			uni.stopPullDownRefresh();
		}, 200);
	},
	onReachBottom() {
		this.loadding = true;
		this.pullUpOn = true;
		setTimeout(() => {
			this.loadding = false;
			this.pullUpOn = false;
		}, 1000);
	},
	methods: {
		initData() {}
	}
};
</script>

<style></style>
