<template>
	<z-paging ref="paging" v-model="classifyList" @query="queryList">
		<view class="classify-list-container">
			<view class="list">
				<navigator class="list-item" url="/pages/preview/preview" v-for="item in classifyList" :key="item._id">
					<image :src="item.smallPicurl" mode="aspectFill"></image>
				</navigator>
			</view>
		</view>
	</z-paging>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { getClassifyListApi } from '@/api/apis.js';

// 获取当前分类列表数据，不用赋值
const classifyList = ref([]);
// 获取paging组件实例
const paging = ref(null);
const classid = ref('');

onLoad(async ({ _id, name }) => {
	// 获取分类id
	classid.value = _id;

	// 修改页面标题
	uni.setNavigationBarTitle({
		title: name
	});
});

const queryList = async (pageNo, pageSize) => {
	try {
		const res = await getClassifyListApi({
			classid: classid.value,
			pageNum: pageNo,
			pageSize: pageSize
		});
		paging.value.complete(res.data);
	} catch (error) {
		console.log('请求错误：', error);
		paging.value.complete(false);
	}
};
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
