<template>
	<view class="notice-detail-container">
		{{ title }}
	</view>
</template>

<script setup>
import {ref} from 'vue'
const title = ref('notice-detail')

</script>

<style scoped lang="scss">
.notice-detail-container {
	background-color: pink;
}
</style>
