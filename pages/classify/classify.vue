<template>
	<view class="classify-container common-bg-color">
		<!-- 自定义顶部 -->
		<custom-top-bar title="分类"></custom-top-bar>

		<!-- 分类列表 -->
		<theme-list :showMorePlaceholder="false" :classifyArr="classifyArr"></theme-list>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { getClassifyApi } from '@/api/apis.js';
// 获取大分类数据
const classifyArr = ref([]);

onLoad(async () => {
	try {
		const classifyRes = await getClassifyApi({ pageNum: 1, pageSize: 15 });
		classifyArr.value = classifyRes.data;
	} catch (error) {
		console.log('请求错误：', error);
	}
});
</script>

<style scoped lang="scss">
.classify-container {
	padding: 0 30rpx;
}
</style>
