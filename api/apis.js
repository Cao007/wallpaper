import {
	request
} from "@/utils/request.js"

// 获取首页轮播图
export function getBannerApi() {
	return request({
		url: "/homeBanner"
	})
}

// 获取公告列表
export function getNoticeListApi() {
	return request({
		url: "/wallNewsList"
	})
}

// 每日推荐
export function getRecommendListApi() {
	return request({
		url: "/randomWall"
	})
}

// 大分类
export function getClassifyApi(data = {}) {
	return request({
		url: "/classify",
		data
	})
}

// 当前分类列表
export function getClassifyListApi(data = {}) {
	return request({
		url: "/wallList",
		data
	})
}