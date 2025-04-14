<template>
	<view class="classify-container">
		<theme-list :isShowMore="false"></theme-list>
	</view>
</template>

<script setup>
import {ref} from 'vue'
const title = ref('hi')

</script>

<style scoped lang="scss">
.classify-container {
	padding: 30rpx;
}
</style>
