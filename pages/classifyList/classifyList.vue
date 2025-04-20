<template>
	<z-paging ref="paging" v-model="classifyList" @query="queryList">
		<view class="classify-list-container">
			<view class="list">
				<navigator class="list-item" :url="`/pages/preview/preview?_id=${item._id}&index=${index}`" v-for="(item, index) in classifyList" :key="item._id">
					<image :src="item.smallPicurl" mode="aspectFill"></image>
				</navigator>
			</view>
		</view>
	</z-paging>
</template>

<script setup>
import { ref, watch } from 'vue';
import { onLoad, onReady, onUnload, onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app';
import { getClassifyListApi, getUserWallListApi } from '@/api/apis.js';

// 获取当前分类列表数据，不用赋值
const classifyList = ref([]);
// 获取paging组件实例
const paging = ref(null);
const classid = ref('');
const pageName = ref('');
const pageType = ref('');

// 接受页面参数
onLoad(async ({ _id, name, type }) => {
	classid.value = _id;
	pageName.value = name;
	pageType.value = type;
});

onReady(() => {
	uni.setNavigationBarTitle({
		title: pageName.value
	});
});

onUnload(() => {
	// 清除本地存储的分类列表数据
	uni.removeStorageSync('CLASSIFY_LIST');
});

const queryList = async (pageNo, pageSize) => {
	try {
		// 从我的下载或者我的评分跳转过来
		if (pageType.value === 'download' || pageType.value === 'score') {
			const res = await getUserWallListApi({
				type: pageType.value,
				pageNum: pageNo,
				pageSize: pageSize
			});
			paging.value.complete(res.data);
		} else {
			// 从分类跳转过来
			const res = await getClassifyListApi({
				classid: classid.value,
				pageNum: pageNo,
				pageSize: pageSize
			});
			paging.value.complete(res.data);
		}
	} catch (error) {
		console.log('请求错误：', error);
		paging.value.complete(false);
	}
};

// 监听classifyList变化，并存储到本地
watch(
	classifyList,
	(newVal) => {
		uni.setStorageSync('CLASSIFY_LIST', newVal);
	},
	{
		deep: true
	}
);

// 分享给好友
onShareAppMessage(() => {
	return {
		title: `蟑螂侠——${pageName.value}`,
		path: `/pages/classifyList/classifyList?_id=${classid.value}&name=${pageName.value}`
	};
});

// 分享到朋友圈
onShareTimeline(() => {
	return {
		title: `蟑螂侠——${pageName.value}`,
		query: `_id=${classid.value}&name=${pageName.value}`
	};
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
