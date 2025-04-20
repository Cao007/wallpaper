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

// 获取公告详情
export function getNoticeDetailApi(data = {}) {
	return request({
		url: "/wallNewsDetail",
		data
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

// 设置壁纸评分
export function setWallScoreApi(data = {}) {
	return request({
		url: "/setupScore",
		data
	})
}

// 下载
export function downloadImageApi(data = {}) {
	return request({
		url: "/downloadWall",
		data
	})
}

// 单张壁纸详情（主要在分享小程序时预览图片）
export function getWallDetailByShareApi(data = {}) {
	return request({
		url: "/detailWall",
		data
	})
}

// 用户信息
export function getUserInfoApi() {
	return request({
		url: "/userInfo"
	})
}

// 我的评分/下载列表
export function getUserWallListApi(data = {}) {
	return request({
		url: "/userWallList",
		data
	})
}

// 搜索
export function searchApi(data = {}) {
	return request({
		url: "/searchWall",
		data
	})
}