<template>
	<view class="theme-list-container">
		<view class="theme-list">
			<navigator url="" class="theme-item" v-for="(item, index) in themeList" :key="index">
				<image src="/common/images/classify1.jpg" mode="aspectFill"></image>
				<text class="tag">标签</text>
				<view class="mask">明星、美女</view>
			</navigator>

			<navigator url="" class="theme-item" v-if="themeList.length >= 8">
				<image src="/common/images/more.jpg" mode="aspectFill"></image>
				<view class="mask-full">
					<uni-icons type="more-filled" size="30" color="#fff"></uni-icons>
					<text>更多</text>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const themeList = ref([
	'/common/images/classify1.jpg',
	'/common/images/classify1.jpg',
	'/common/images/classify1.jpg',
	'/common/images/classify1.jpg',
	'/common/images/classify1.jpg',
	'/common/images/classify1.jpg',
	'/common/images/classify1.jpg',
	'/common/images/classify1.jpg',
]);

// 截取前8个数据
themeList.value = themeList.value.slice(0, 8);
</script>

<style lang="scss" scoped>
.theme-list-container {
	.theme-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.theme-item {
			position: relative;
			width: 220rpx;
			height: 344rpx;
			margin-bottom: 14rpx;
			border-radius: 20rpx;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}

			.tag {
				position: absolute;
				top: 0;
				left: 0;
				padding: 4rpx 8rpx;
				background-color: rgba(210, 116, 84, 0.2);
				color: #fff;
				font-size: 24rpx;
				border-radius: 0 0 20rpx 0;
			}

			.mask {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 80rpx;
				background-color: rgba(0, 0, 0, 0.5);
				color: #fff;
				font-size: 32rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				backdrop-filter: blur(4rpx);
			}

			.mask-full {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, 0.5);
				color: #fff;
				font-size: 32rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				backdrop-filter: blur(4rpx);
			}
		}

		// 解决flex布局最后一行元素对齐问题
		&::after {
			content: '';
			display: block;
			width: 220rpx;
			height: 0;
		}
	}
}
</style>
