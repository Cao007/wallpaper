<template>
	<view class="common-title-container">
		<view class="left-title">
			<slot name="left-title"></slot>
		</view>
		<view class="more-info">
			<slot name="more-info"></slot>
		</view>
	</view>
</template>

<script setup></script>

<style lang="scss" scoped>
.common-title-container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80rpx;

	.left-title {
		font-size: 36rpx;
		font-weight: 600;
	}
	
	.more-info {
		height: 100%;
		display: flex;
		align-items: center;
		font-size: 24rpx;
		color: #27B48F;
	}
}
</style>
