<template>
	<view class="notice-detail-container">
		<view class="top-title">{{ noticeDetail.title }}</view>
		<view class="top-info">
			<text class="author">{{ noticeDetail.author }}</text>
			<uni-dateformat :date="noticeDetail.publish_date" format="yyyy/MM/dd hh:mm:ss"></uni-dateformat>
		</view>
		<view class="notice-main">
			<mp-html :content="noticeDetail.content" />
		</view>
		<text class="read">阅读 {{ noticeDetail.view_count }}</text>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { getNoticeDetailApi } from '@/api/apis.js';

// 公告列表
const noticeDetail = ref({});

onLoad(async ({ id }) => {
	try {
		const res = await getNoticeDetailApi({
			id: id
		});
		noticeDetail.value = res.data;
	} catch (error) {
		console.log(error);
	}
});
</script>

<style scoped lang="scss">
.notice-detail-container {
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1),
	            0 1px 3px rgba(0, 0, 0, 0.06);
	padding: 30rpx;

	.top-title {
		font-size: 48rpx;
	}

	.top-info {
		color: #ccc;
		margin: 20rpx 0;
		.author {
			margin-right: 20rpx;
		}
	}

	.notice-main {
		margin-bottom: 20rpx;
	}

	.read {
		color: #ccc;
		margin: 20rpx 0;
	}
}
</style>
