<template>
	<view class="preview-container">
		<!-- 轮播图 -->
		<swiper class="swiper" circular>
			<swiper-item v-for="item in 5" :key="item" class="swiper-item">
				<image src="/common/images/preview1.jpg" mode="aspectFill" @click.stop="isShowMask = true"></image>
			</swiper-item>
		</swiper>

		<!-- 遮罩层 -->
		<view class="mask" v-if="isShowMask" @click="isShowMask = false">
			<view class="top-toool">
				<view class="left-button">
					<uni-icons type="left"></uni-icons>
				</view>
			</view>
			<view class="pages">7 / 12</view>
			<view class="time">
				<uni-dateformat :date="Date.now()" format="hh:mm"></uni-dateformat>
			</view>
			<view class="date">
				<uni-dateformat :date="Date.now()" format="MM月dd日"></uni-dateformat>
			</view>
			<view class="more-info">
				<view class="icon-box info" @click.stop="handleInfo">
					<uni-icons type="info"></uni-icons>
					<text>信息</text>
				</view>
				<view class="icon-box star" @click.stop="handleStar">
					<uni-icons type="star"></uni-icons>
					<text>5分</text>
				</view>
				<view class="icon-box download" @click.stop="handleDownload">
					<uni-icons type="download"></uni-icons>
					<text>下载</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

// 控制遮罩层显示
const isShowMask = ref(false);

const handleInfo = () => {
	console.log(1);
};

const handleStar = () => {
	console.log(2);
};

const handleDownload = () => {
	console.log(3);
};
</script>

<style scoped lang="scss">
.preview-container {
	position: relative;
	width: 100%;
	height: 100vh;

	.swiper {
		width: 100%;
		height: 100%;
		.swiper-item {
			width: 100%;
			height: 100%;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}

	// 遮罩层
	.mask {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		padding: 30rpx;

		// 顶部工具栏
		.top-toool {
			width: 100%;
			background-color: pink;

			// 返回按钮
			.left-button {
				width: 60rpx;
				height: 60rpx;
				background-color: #fff;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				:deep(.uni-icons) {
					font-size: 40rpx !important;
				}
			}
		}

		// 页数
		.pages {
			height: 38rpx;
			line-height: 38rpx;
			text-align: center;
			background-color: rgba(0, 0, 0, 0.3);
			padding: 0 20rpx;
			border-radius: 19rpx;
			color: #fff;
		}

		// 时间
		.time {
			width: 341rpx;
			height: 110rpx;
			line-height: 110rpx;
			text-align: center;
			font-size: 110rpx;
			color: #fff;
		}

		// 日期
		.date {
			font-size: 34rpx;
			color: #fff;
		}

		// 更多信息
		.more-info {
			background-color: #eee5e0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: absolute;
			bottom: 154rpx;
			width: 490rpx;
			height: 120rpx;
			border-radius: 60rpx;
			padding: 16rpx 60rpx;

			:deep(.uni-icons) {
				font-size: 40rpx !important;
			}

			.icon-box {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-between;
				height: 100%;
				background-color: pink;
				padding: 0 30rpx; // 扩大可点击的范围
			}
		}
	}
}
</style>
