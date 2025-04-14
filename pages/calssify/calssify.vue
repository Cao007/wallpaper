<template>
	<view class="classify-container">
		<theme-list></theme-list>
	</view>
</template>

<script setup>
import {ref} from 'vue'
const title = ref('hi')

</script>

<style scoped lang="scss">
.classify-container {
	background-color: pink;
	padding: 30rpx;
}
</style>
