<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
		this.setCartBadgeNum();
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	},
	methods: {
		setCartBadgeNum() {
			this.$http.get('/cart/getCartNum').then(res => {
				this.$mHelper.setCartNum(res.data.count);
			});
		}
	}
};
</script>

<style lang="scss">
/*每个页面公共css uParse为优化版本*/
@import './common/app.css';
/* #ifndef APP-NVUE */
@import './components/uni/uParse/src/wxParse.css';
/* #endif */
</style>
