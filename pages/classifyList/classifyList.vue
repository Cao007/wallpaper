<template>
	<view class="classify-list-container">
		<view class="list">
			<navigator class="list-item" url="/pages/preview/preview" v-for="item in classifyList" :key="item._id">
				<image :src="item.smallPicurl" mode="aspectFill"></image>
			</navigator>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { getClassifyListApi } from '@/api/apis.js';

// 获取当前分类列表数据
const classifyList = ref([]);
onLoad(async ({ _id, name }) => {
	try {
		// 修改页面标题
		uni.setNavigationBarTitle({
			title: name
		});
		
		const res = await getClassifyListApi({
			classid: _id
		});
		classifyList.value = res.data;
	} catch (error) {
		console.log('请求错误：', error);
	}
});
</script>

<style scoped lang="scss">
.classify-list-container {
	padding: 4rpx;

	.list {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.list-item {
			width: 244rpx;
			height: 544rpx;
			border-radius: 10rpx;
			overflow: hidden;
			margin-bottom: 4rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>
