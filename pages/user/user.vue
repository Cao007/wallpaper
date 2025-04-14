<template>
	<view class="user-container">
		<view class="user-info">
			<image class="avatar" src="/static/images/logo.png"></image>
			<view class="nickname">你在狗叫什么</view>
			<view class="address">来自：浙江</view>
		</view>

		<!-- ttop-list -->
		<view class="list">
			<view class="list-item">
				<view class="left">
					<uni-icons type="cloud-download-filled" size="30" color="#27B48F"></uni-icons>
					<text class="text">我的下载</text>
				</view>
				<uni-icons type="right" size="30"></uni-icons>
			</view>
			<view class="list-item">
				<view class="left">
					<uni-icons type="cloud-download-filled" size="30" color="#27B48F"></uni-icons>
					<text class="text">我的评分</text>
				</view>
				<uni-icons type="right" size="30"></uni-icons>
			</view>
		</view>

		<!-- bottom-list -->
		<view class="list">
			<view class="list-item">
				<view class="left">
					<uni-icons type="cloud-download-filled" size="30" color="#27B48F"></uni-icons>
					<text class="text">订阅更新</text>
				</view>
				<uni-icons type="right" size="30"></uni-icons>
			</view>
			<view class="list-item">
				<view class="left">
					<uni-icons type="cloud-download-filled" size="30" color="#27B48F"></uni-icons>
					<text class="text">常见问题</text>
				</view>
				<uni-icons type="right" size="30"></uni-icons>
			</view>
			<view class="list-item">
				<view class="left">
					<uni-icons type="cloud-download-filled" size="30" color="#27B48F"></uni-icons>
					<text class="text">联系客服</text>
				</view>
				<uni-icons type="right" size="30"></uni-icons>
				<!-- #ifdef MP -->
				<button class="custom-customer-service" open-type="contact">联系客服按钮</button>
				<!-- #endif -->
				<!-- #ifndef MP -->
					<button class="custom-customer-service" @click="handleConcat">联系客服按钮</button>
				<!-- #endif -->
			</view>
			<view class="list-item">
				<view class="left">
					<uni-icons type="cloud-download-filled" size="30" color="#27B48F"></uni-icons>
					<text class="text">反馈建议</text>
				</view>
				<uni-icons type="right" size="30"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const title = ref('hi');

// #ifndef MP
const handleConcat = () => {
	uni.makePhoneCall({
		phoneNumber: '19045623199',
	})
};
// #endif
</script>

<style scoped lang="scss">
.user-container {
	padding: 30rpx;

	.user-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 420rpx;

		.avatar {
			width: 160rpx;
			height: 160rpx;
			border-radius: 50%;
		}

		.address {
			font-size: 24rpx;
			color: #999;
		}
	}

	.list {
		width: 100%;
		box-shadow: 0 0 10rpx #ccc;
		border-radius: 10rpx;
		margin-top: 30rpx;

		.list-item {
			position: relative;
			width: 100%;
			height: 100rpx;
			border-bottom: 1px solid #ccc;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 20rpx;

			&:last-child {
				border-bottom: none;
			}

			.left {
				display: flex;
				align-items: center;

				.text {
					margin-left: 20rpx;
				}
			}

			// 客服
			.custom-customer-service {
				position: absolute;
				left: 0;
				right: 0;
				width: 100%;
				height: 100%;
				opacity: 0;
			}
		}
	}
}
</style>
