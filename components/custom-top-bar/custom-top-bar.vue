<template>
	<view class="custom-top-bar-container">
		<view class="top-bar common-bg-color">
			<!-- 状态栏（电量、时间等） -->
			<view class="status-bar" :style="{ height: getStatusBarHeight() + 'px' }"></view>
			<!-- 标题栏（和胶囊按钮在同一行） -->
			<view class="title-bar" :style="{ height: getTitleBarHeight() + 'px' }">
				<view class="title">{{ title }}</view>
				<view class="search">
					<uni-icons type="search" size="20" color="#888"></uni-icons>
					<text class="text">搜索</text>
				</view>
			</view>
		</view>

		<!-- 填充区域，防止top-bar盖住banner等下面的元素 -->
		<view class="fill" :style="{ height: getNavBarHeight() + 'px' }"></view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { getStatusBarHeight, getTitleBarHeight, getNavBarHeight } from '@/utils/system.js';

const props = defineProps({
	title: {
		type: String,
		default: 'ccc壁纸'
	}
});
</script>

<style scoped lang="scss">
.custom-top-bar-container {
	.top-bar {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		z-index: 999;

		// 标题栏
		.title-bar {
			display: flex;
			align-items: center;

			.title {
				font-size: 40rpx;
				line-height: 40rpx;
				font-weight: 500;
				margin-right: 20rpx;
			}
			.search {
				display: flex;
				align-items: center;
				width: 224rpx;
				height: 40rpx;
				padding: 0 10rpx;
				font-size: 30rpx;
				border: 1rpx solid #fff;
				background-color: #eaf5ef;
				border-radius: 40rpx;
				color: #9ba9a2;

				.text {
					margin-left: 10rpx;
				}
			}
		}
	}
}
</style>
