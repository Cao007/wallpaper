<template>
	<view class="user-container common-bg-color">
		<view class="navbar" :style="{ height: getNavBarHeight() + 'px' }"></view>
		<view class="user-info">
			<image class="avatar" src="/static/images/logo.png"></image>
			<view class="nickname">{{ userInfo.IP }}</view>
			<view class="address">来自：{{ userInfo?.address?.city }}</view>
		</view>

		<!-- ttop-list -->
		<view class="list">
			<view class="list-item" @click="handleDownload">
				<view class="left">
					<uni-icons type="cloud-download-filled" size="30"></uni-icons>
					<text class="text">我的下载</text>
				</view>
				<view class="right-content">
					<text>{{ userInfo?.downloadSize }}个</text>
					<uni-icons type="right" size="30"></uni-icons>
				</view>
			</view>
			<view class="list-item" @click="handleRateScore">
				<view class="left">
					<uni-icons type="cloud-download-filled" size="30"></uni-icons>
					<text class="text">我的评分</text>
				</view>
				<view class="right-content">
					<text>{{ userInfo?.scoreSize }}个</text>
					<uni-icons type="right" size="30"></uni-icons>
				</view>
			</view>
		</view>

		<!-- bottom-list -->
		<view class="list">
			<view class="list-item">
				<view class="left">
					<uni-icons type="cloud-download-filled" size="30"></uni-icons>
					<text class="text">订阅更新</text>
				</view>
				<uni-icons type="right" size="30"></uni-icons>
			</view>
			<view class="list-item">
				<view class="left">
					<uni-icons type="cloud-download-filled" size="30"></uni-icons>
					<text class="text">常见问题</text>
				</view>
				<uni-icons type="right" size="30"></uni-icons>
			</view>
			<view class="list-item">
				<view class="left">
					<uni-icons type="cloud-download-filled" size="30"></uni-icons>
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
					<uni-icons type="cloud-download-filled" size="30"></uni-icons>
					<text class="text">反馈建议</text>
				</view>
				<uni-icons type="right" size="30"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { getNavBarHeight } from '@/utils/system.js';
import { getUserInfoApi } from '@/api/apis.js';

// 用户信息
const userInfo = ref({});

// 获取用户信息
const getUserInfo = async () => {
	try {
		const res = await getUserInfoApi();
		userInfo.value = res.data;
	} catch (err) {
		console.log(err);
	}
};
getUserInfo();

// 我的下载
const handleDownload = () => {
	uni.navigateTo({
		url: `/pages/classifyList/classifyList?type=download&name=我的下载`
	});
};

// 我的评分
const handleRateScore = () => {
	uni.navigateTo({
		url: `/pages/classifyList/classifyList?type=score&name=我的评分`
	});
};

// 联系客服
// #ifndef MP
const handleConcat = () => {
	uni.makePhoneCall({
		phoneNumber: '19045623199'
	});
};
// #endif
</script>

<style scoped lang="scss">
.user-container {
	padding: 0 30rpx;

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
			background-color: #fff;

			&:last-child {
				border-bottom: none;
			}

			.left {
				display: flex;
				align-items: center;

				.text {
					margin-left: 20rpx;
				}

				:deep(.uni-icons) {
					color: $primary-color !important;
				}
			}

			.right-content {
				display: flex;
				align-items: center;
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
