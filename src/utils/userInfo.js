
const KEY = 'user_info';

export function getUserInfo(){
	return uni.getStorageSync(KEY) || {};
}

export function setUserInfo(object) {
	return uni.setStorageSync(KEY, object);
}

export function removeUserInfo(){
	return uni.removeStorageSync(KEY);
}