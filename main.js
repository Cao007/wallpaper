import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif

// z-paging全局配置
uni.$zp = {
	config: {
		// 分页
		'default-page-no': 1,
		'default-page-size': 10,
		
		// 空数据
		'empty-view-text': '空空如也~~',
		
		// 下拉刷新
		'refresher-default-text': '继续下拉刷新',
		'refresher-pulling-text': '松开立即刷新',
		'refresher-refreshing-text': '正在刷新...',
		'refresher-complete-text': '刷新成功',
		
		// 触底加载
		'loading-more-default-text': '点击加载更多',
		'loading-more-loading-text': '正在加载...',
		'loading-more-no-more-text': '没有更多了',
		'loading-more-fail-text': '加载失败，点击重新加载',
		
		// 返回顶部按钮
		'auto-show-back-to-top': true,
	}
}