<template>
	<view class="index-container common-bg-color">
		<!-- 自定义顶部 -->
		<custom-top-bar></custom-top-bar>

		<!-- 顶部轮播图 -->
		<view class="top-banner">
			<swiper class="swiper" circular :indicator-dots="true" :autoplay="false">
				<swiper-item class="swiper-item" v-for="item in bannerList" :key="item._id">
					<navigator url="/pages/classifyList/classifyList">
						<image :src="item.picurl" mode="widthFix"></image>
					</navigator>
				</swiper-item>
			</swiper>
		</view>

		<!-- 公告 -->
		<view class="notice" @click="handleGoToNotice">
			<view class="left">
				<uni-icons type="sound" size="20"></uni-icons>
				<text>公告</text>
			</view>

			<swiper class="middle swiper" circular vertical :autoplay="true">
				<swiper-item class="swiper-item" v-for="item in noticeList" :key="item._id">
					<text class="ellipsis">{{ item.title }}</text>
				</swiper-item>
			</swiper>

			<view class="right">
				<uni-icons type="right" size="20" color="#A8A8A8"></uni-icons>
			</view>
		</view>

		<!-- 每日推荐 -->
		<view class="recommend">
			<common-title>
				<template #left-title>
					<text>每日推荐</text>
				</template>
				<template #more-info>
					<uni-icons type="calendar" size="20"></uni-icons>
					<uni-dateformat :date="Date.now()" format="yyyy年MM月dd日"></uni-dateformat>
				</template>
			</common-title>

			<scroll-view class="recommend-list" scroll-x="true">
				<navigator :url="`/pages/preview/preview?classid=${item.classid}&index=${index}`" class="recommend-item" v-for="(item, index) in recommendList" :key="item._id">
					<image :src="item.smallPicurl" mode="aspectFill"></image>
				</navigator>
			</scroll-view>
		</view>

		<!-- 专题精选 -->
		<view class="theme">
			<common-title>
				<template #left-title>
					<text>专题精选</text>
				</template>
				<template #more-info>
					<text>更多+</text>
				</template>
			</common-title>

			<theme-list :showMorePlaceholder="true" :classifyArr="classifyArr"></theme-list>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { getBannerApi, getNoticeListApi, getRecommendListApi, getClassifyApi } from '@/api/apis.js';

// 获取轮播图数据
const bannerList = ref([]);
// 获取公告列表数据
const noticeList = ref([]);
// 获取每日推荐数据
const recommendList = ref([]);
// 获取大分类数据
const classifyArr = ref([]);

onLoad(async () => {
	try {
		// 并行请求优化性能
		const [bannerRes, noticeListRes, recommendListRes, classifyRes] = await Promise.all([
			getBannerApi(),
			getNoticeListApi(),
			getRecommendListApi(),
			getClassifyApi({ pageNum: 1, pageSize: 8 })
		]);

		bannerList.value = bannerRes.data;
		noticeList.value = noticeListRes.data;
		recommendList.value = recommendListRes.data;
		classifyArr.value = classifyRes.data;

		// 缓存数据
		uni.setStorageSync('CLASSIFY_LIST', recommendList.value);
	} catch (error) {
		console.log('请求错误：', error);
	}
});

// 公告跳转
const handleGoToNotice = () => {
	uni.navigateTo({
		url: '/pages/notice/notice-list'
	});
};
</script>

<style scoped lang="scss">
.index-container {
	padding: 0 30rpx;

	// 顶部轮播图
	.top-banner {
		.swiper {
			width: 100%;
			height: 340rpx;

			&-item {
				width: 100%;
				height: 100%;

				image {
					width: 100%;
					height: 100%;
					border-radius: 20rpx;
					overflow: hidden;
				}
			}
		}
	}

	// 公告
	.notice {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #f9f9f9;
		border-radius: 20rpx;
		width: 100%;
		height: 80rpx;
		margin: 30rpx 0;
		padding: 0 10rpx;

		.left {
			display: flex;
			align-items: center;
			color: $primary-color;

			:deep(.uni-icons) {
				color: $primary-color !important;
			}
		}

		.middle {
			flex: 1;
			height: 100%;
			padding: 0 20rpx;

			swiper-item {
				display: flex;
				align-items: center;
				height: 100%;
				font-size: 30rpx;
				color: #666;
			}
		}
	}

	// 每日推荐
	.recommend {
		:deep(.uni-icons) {
			color: $primary-color !important;
		}
		.recommend-list {
			height: 447rpx;
			white-space: nowrap;

			.recommend-item {
				display: inline-block;
				width: 200rpx;
				height: 100%;
				margin-right: 14rpx;
				image {
					width: 100%;
					height: 100%;
					border-radius: 20rpx;
					overflow: hidden;
				}

				&:last-child {
					margin-right: 0;
				}
			}
		}
	}
}
</style>
