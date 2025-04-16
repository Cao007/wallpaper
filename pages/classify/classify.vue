<template>
	<view class="classify-container common-bg-color">
		<!-- 自定义顶部 -->
		<custom-top-bar title="分类"></custom-top-bar>
		
		<!-- 分类列表 -->
		<theme-list :isShowMore="false"></theme-list>
	</view>
</template>

<script setup>
import {ref} from 'vue'
const title = ref('hi')

</script>

<style scoped lang="scss">
.classify-container {
	padding: 0 30rpx;
}
</style>
