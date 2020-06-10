import Vue from 'vue'
import Vuex from 'vuex';

import {
	http
} from '@/utils/request';

import {
	getToken,
	removeToken
} from '@/utils/token';

import {
	getUserInfo,
	removeUserInfo
} from '@/utils/userInfo.js';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		token: getToken(),

		hasLogin: getToken() ? true : false,

		userInfo: getUserInfo(),

		//网络状态，用于下载提醒
		networkState: 'unknown',


		cartNum: 0
	},
	getters: {
		// 获取网络状态
		networkStatus: state => {
			return state.networkState;
		},
		// 判断用户是否登录
		hasLogin: state => {
			if (state.accessToken) {
				return true;
			} else {
				return false
			}
		}
	},
	mutations: {
		setNetworkState(state, provider) {
			state.networkState = provider;
		},
		logout(state) {
			state.token = '';
			state.userInfo = {};
			removeToken();
			removeUserInfo();
		},

		setCartNum(state, num) {
			state.cartNum = num;
		}

	},
	actions: {
		networkStateChange({
			commit
		}, info) {
			commit('setNetworkState', info);
		},
		logout({
			commit
		}) {
			commit('logout');
		},

		syncCartNum({
			commit
		}) {
			http.get('/cart/getCartNum').then(res => {
				let num = res.data.count;
				commit('setCartNum', num);
			})
		}


	}
})


export default store;
