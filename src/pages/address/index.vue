<template>
	<view class="tui-safe-area">
		<view class="tui-address">
			<block v-for="(item, index) in addressList" :key="index">
				<tui-list-cell padding="0" @click="editAddr(index)"><addressItem :addressInfo="item"></addressItem></tui-list-cell>
			</block>
		</view>
		<!-- 新增地址 -->
		<view class="tui-address-new">
			<view class="tui-flex">
				<!-- #ifdef MP -->
				<view class="tui-col-6 mr-10">
					<!-- #endif -->

					<tui-button shadow type="danger" height="88rpx" @click="editAddr">+手动添加</tui-button>

					<!-- #ifdef MP -->
				</view>
				<!-- #endif -->

				<!-- #ifdef MP -->
				<view class="tui-col-6 ml-10"><tui-button shadow height="88rpx" type="green" @click="weappImport">微信导入</tui-button></view>
				<!-- #endif -->
			</view>
		</view>
	</view>
</template>

<script>
import tuiListCell from '@/components/thorui/tui-list-cell/tui-list-cell.vue';
import tuiButton from '@/components/thorui/tui-button/tui-button.vue';
import addressItem from '@/biz_components/address/item.vue';

export default {
	components: {
		tuiListCell,
		tuiButton,
		addressItem
	},
	data() {
		return {
			addressList: [
				{
					townName: '',
					address: '黄山路与肥西路交叉口兴科大厦1712',
					incompleteDesc: '该地址需要完善，为便于收货请重新编辑',
					districtName: '蜀山区',
					mobile: '132****1613',
					cityId: 340100,
					completed: false,
					townId: -1,
					provinceId: 340000,
					dft: false,
					districtId: 340104,
					cityName: '合肥市',
					fullAddress: '安徽省合肥市蜀山区黄山路与肥西路交叉口兴科大厦1712',
					name: '夏天',
					id: 14735496,
					provinceName: '安徽省'
				}
			]
		};
	},
	onLoad: function(options) {},
	onShow: function() {},
	methods: {
		editAddr(index, addressType) {
			let data = {};

			if (index != undefined) {
				data = this.addressList[index];
			}

			this.$mRouter.push({
				route: '/pages/address/editAddress',
				query: data
			});

			// uni.navigateTo({
			// 	url: '/pages/address/editAddress?addressInfo=' + JSON.stringify(data)
			// });
		},
		weappImport() {
			var that = this;
			uni.getSetting({
				success: function(result) {
					if (!result.authSetting['scope.address']) {
						uni.openSetting({
							success(res) {
								console.log(res);
								if (!res.authSetting['scope.address']) {
									that.$mHelper.toast('您需要打开通讯地址设置才能使用！');
								} else {
									that.openChooseAddress();
								}
							}
						});
					} else {
						that.openChooseAddress();
					}
				}
			});
		},
		openChooseAddress() {
			let that = this;

			uni.chooseAddress({
				success(res) {
					that.$mRouter.push({
						route: '/pages/address/editAddress',
						query: {
							...res,
							isDefault: 0,
							type: 'weapp'
						}
					});

					// console.log(res.userName);
					// console.log(res.postalCode);
					// console.log(res.provinceName);
					// console.log(res.cityName);
					// console.log(res.countyName);
					// console.log(res.detailInfo);
					// console.log(res.nationalCode);
					// console.log(res.telNumber);
				}
			});
		}
	}
};
</script>

<style>
@import '@/static/style/thorui.css';

.ml-10 {
	margin-left: 10rpx;
}

.mr-10 {
	margin-right: 10rpx;
}

.tui-address {
	width: 100%;
	padding-top: 20rpx;
	padding-bottom: 160rpx;
}

.tui-address-new {
	width: 100%;
	position: fixed;
	left: 0;
	bottom: 0;
	z-index: 999;
	padding: 20rpx 25rpx 30rpx;
	box-sizing: border-box;
	background: #fafafa;
}

.tui-safe-area {
	padding-bottom: env(safe-area-inset-bottom);
}
</style>
