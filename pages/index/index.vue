<template>
	<view class="index-container">
		<!-- 顶部轮播图 -->
		<div class="top-banner">
			<swiper class="swiper" circular :indicator-dots="true" :autoplay="true">
				<swiper-item class="swiper-item">
					<image src="/common/images/banner1.jpg" mode="aspectFill"></image>
				</swiper-item>
				<swiper-item class="swiper-item">
					<image src="/common/images/banner2.jpg" mode="aspectFill"></image>
				</swiper-item>
				<swiper-item class="swiper-item">
					<image src="/common/images/banner3.jpg" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</div>
	</view>
</template>

<script setup>
const title = 'Hello';
</script>

<style scoped lang="scss">
.index-container {	
	// 顶部轮播图
	.top-banner {
		.swiper {
			width: 100%;
			height: 480rpx;

			&-item {
				width: 100%;
				height: 100%;
				padding: 30rpx;
				
				image {
					width: 100%;
					height: 100%;
					border-radius: 20rpx;
					overflow: hidden;
				}
			}
		}
	}
}
</style>
