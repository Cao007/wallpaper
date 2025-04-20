<template>
	<z-paging ref="paging" v-model="classifyArr" @query="queryList">
		<view class="classify-container common-bg-color">
			<!-- 自定义顶部 -->
			<custom-top-bar title="分类"></custom-top-bar>

			<!-- 分类列表 -->
			<theme-list :showMorePlaceholder="false" :classifyArr="classifyArr"></theme-list>
		</view>
	</z-paging>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad, onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app';
import { getClassifyApi } from '@/api/apis.js';
// 获取大分类数据，不用赋值，直接使用即可
const classifyArr = ref([]);
// 获取paging组件实例
const paging = ref(null);

// 分页请求数据
const queryList = async (pageNo, pageSize) => {
	try {
		const res = await getClassifyApi({ pageNum: pageNo, pageSize: pageSize });
		paging.value.complete(res.data);
	} catch (error) {
		console.log('请求错误：', error);
		paging.value.complete(false);
	}
};

// 分享给好友
onShareAppMessage(() => {
	return {
		title: '蟑螂侠——分类',
		path: '/pages/classify/classify'
	};
});

// 分享到朋友圈
onShareTimeline(() => {
	return {
		title: '蟑螂侠——分类',
	};
});
</script>

<style scoped lang="scss">
.classify-container {
	padding: 0 30rpx;
}
</style>
