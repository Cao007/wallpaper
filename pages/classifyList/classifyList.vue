<template>
	<view class="classify-list-container">
		<view class="list">
			<navigator class="list-item" url="/pages/preview/preview" v-for="item in 10" :key="item">
				<image src="/common/images/preview2.jpg" mode="aspectFill"></image>
			</navigator>
		</view>
	</view>
</template>

<script setup></script>

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
