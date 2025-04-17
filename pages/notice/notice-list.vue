<template>
	<view class="notice-list-container">
		{{ title }}
	</view>
</template>

<script setup>
import {ref} from 'vue'
const title = ref('notice-list')

</script>

<style scoped lang="scss">
.notice-list-container {
	background-color: pink;
}
</style>
