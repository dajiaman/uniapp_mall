
const util = require("@/utils/util.js")

const KEY = 'search_history';

export function getSearchHistoryFromStorage(){
	return uni.getStorageSync(KEY) || [];
}

/**
 *  写入搜索词
 * @param {string} word
 * 
 */
export function writeSearchWordToHistory(word){
	let list = getSearchHistoryFromStorage();
	// 把搜索词放入搜索记录数组
	list.unshift(word);
	// 去重
	list = util.unique(list);
	// 切割，保证长度
	uni.setStorageSync(KEY, list.slice(0, 10));
	return true;
}

export function clearSearchHistory(){
	uni.removeStorageSync(KEY);
}