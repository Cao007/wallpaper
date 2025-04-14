<template>
	<view class="index-container">
		<!-- 顶部轮播图 -->
		<view class="top-banner">
			<swiper class="swiper" circular :indicator-dots="true" :autoplay="false">
				<swiper-item class="swiper-item">
					<image src="/common/images/banner1.jpg" mode="widthFix"></image>
				</swiper-item>
				<swiper-item class="swiper-item">
					<image src="/common/images/banner2.jpg" mode="widthFix"></image>
				</swiper-item>
				<swiper-item class="swiper-item">
					<image src="/common/images/banner3.jpg" mode="widthFix"></image>
				</swiper-item>
			</swiper>
		</view>

		<!-- 公告 -->
		<view class="notice">
			<view class="left">
				<uni-icons type="sound" size="20" color="#27B48F"></uni-icons>
				<text>公告</text>
			</view>

			<swiper class="middle swiper" circular vertical :autoplay="true">
				<swiper-item class="swiper-item">
					<text class="ellipsis">123</text>
				</swiper-item>
				<swiper-item class="swiper-item">
					<text class="ellipsis">222</text>
				</swiper-item>
				<swiper-item class="swiper-item">
					<text class="ellipsis">333333333333333333333333333333333333333333333333333333333333333</text>
				</swiper-item>
			</swiper>

			<view class="right">
				<uni-icons type="right" size="20" color="#A8A8A8"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script setup>
const title = 'Hello';
</script>

<style scoped lang="scss">
.index-container {
	padding: 30rpx;

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
			color: #2ab28e;
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
}
</style>