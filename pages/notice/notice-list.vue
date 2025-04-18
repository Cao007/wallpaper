<template>
	<view class="notice-list-container">
		<view class="notice-list">
			<view class="notice-item" v-for="item in noticeList" :key="item._id" @click="gotoDetail(item._id)">
				<view class="left-img">
					<image class="image" src="/static/images/logo.png" mode="aspectFill"></image>
				</view>

				<view class="right-content">
					<view class="top-title ellipsis-2">{{ item.title }}</view>

					<view class="bottom-content">
						<view class="icon-info date">
							<uni-icons type="camera"></uni-icons>
							<uni-dateformat :date="item.publish_date" format="yyyy/MM/dd"></uni-dateformat>
						</view>

						<view class="icon-info read">
							<uni-icons type="eye"></uni-icons>
							<text>{{ item.view_count }}</text>
						</view>

						<view class="icon-info author">
							<uni-icons type="auth"></uni-icons>
							<text>{{ item.author }}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { getNoticeListApi } from '@/api/apis.js';

// 公告列表
const noticeList = ref([]);

onLoad(async () => {
	try {
		const res = await getNoticeListApi();
		noticeList.value = res.data;
	} catch (error) {
		console.log(error);
	}
});

// 跳转到公共详情
const gotoDetail = (_id) => {
	uni.navigateTo({
		url: `/pages/notice/notice-detail?id=${_id}`
	});
};
</script>

<style scoped lang="scss">
.notice-list-container {
	.notice-item {
		display: flex;
		margin-bottom: 30rpx;
		box-shadow: 0 0 20rpx #ccc;
		.left-img {
			width: 200rpx;
			height: 150rpx;
			margin-right: 20rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.right-content {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.bottom-content {
				display: flex;
				justify-content: space-between;
				color: #ccc;

				:deep(.uni-icons) {
					font-size: 40rpx !important;
					color: #ccc !important;
				}

				.icon-info {
					display: flex;
					align-items: center;
				}
			}
		}
	}
}
</style>
