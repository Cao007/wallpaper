<template>
	<view class="search-container box-shadow">
		<!-- 顶部搜索框 -->
		<uni-search-bar class="uni-searchbar" v-model="searchVal" placeholder="输入..." @confirm="handleConfirm" @input="handleInput" @cancel="handleCancel"></uni-search-bar>
		<text>{{ searchVal }}</text>

		<!-- 最近搜索 -->
		<view class="last-search" v-if="lastSearchList.length">
			<view class="top-title-content">
				<text class="left-title">最近搜索</text>
				<text class="right-icon">
					<uni-icons class="uni-icons" type="trash" size="48"></uni-icons>
				</text>
			</view>
			<view class="tag-content">
				<view class="tag" v-for="item in lastSearchList" :key="item" @longpress="handleDeleteTag(item)">{{ item }}</view>
			</view>
		</view>

		<!-- 热门搜索 -->
		<view class="hot-search">
			<view class="top-title-content">
				<text class="left-title">热门搜索</text>
			</view>
			<view class="tag-content">
				<view class="tag" v-for="item in hotSearchList" :key="item">{{ item }}</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { searchApi } from '@/api/apis.js';

// 输入内容
const searchVal = ref('');
// 最近搜索列表
const lastSearchList = ref(uni.getStorageSync('last_searchList_key') || []);
// 热门搜索列表
const hotSearchList = ref(['帅哥', '美女', '宠物', '卡通']);

// 确认函数
const handleConfirm = async (e) => {
	try {
		const res = await searchApi({
			keyword: e.value
		});
		console.log('handleConfirm res:', res);
		searchVal.value = '';
		lastSearchList.value.unshift(e.value);
		// 去重
		lastSearchList.value = [...new Set(lastSearchList.value)];
		// 存储到local
		uni.setStorageSync('last_searchList_key', lastSearchList.value);
	} catch (error) {
		console.log('handleConfirm error:', error);
	}
};

// 删除标签
const handleDeleteTag = (target) => {
	uni.showModal({
		title: '确认删除',
		content: `确定删除 ${target} 吗？`,
		success: (res) => {
			if (res.confirm) {
				lastSearchList.value = lastSearchList.value.filter((item) => item !== target);
				uni.setStorageSync('last_searchList_key', lastSearchList.value);
			}
		}
	});
};

// 输入函数
const handleInput = (e) => {
	console.log('handleInput e:', e);
};

// 取消函数
const handleCancel = (e) => {
	console.log('handleCancel e:', e);
};
</script>

<style scoped lang="scss">
.search-container {
	padding: 30rpx;

	// 顶部搜索框
	.uni-searchbar {
		padding: 0;
	}

	// 最近搜索、热门搜索
	.last-search,
	.hot-search {
		margin: 30rpx 0;
		.top-title-content {
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 32rpx;
			color: #949494;
			margin-bottom: 20rpx;

			.right-icon {
				width: 48rpx;
				height: 48rpx;
				:deep(.uni-icons) {
					font-size: 48rpx !important;
				}
			}
		}

		.tag-content {
			display: flex;
			flex-wrap: wrap;
			.tag {
				font-size: 30rpx;
				padding: 10rpx 20rpx;
				margin: 0 20rpx 20rpx 0;
				border-radius: 30rpx;
				background-color: #f4f4f4;
				color: #2f2f2f;
			}
		}
	}
}
</style>
