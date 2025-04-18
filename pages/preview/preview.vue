<template>
	<view class="preview-container">
		<!-- 轮播图 -->
		<swiper class="swiper" circular :current="currentIndex" @change="handleSwiperChange">
			<swiper-item v-for="(item, index) in currentClassList" :key="item._id" class="swiper-item">
				<image v-if="isNear(index)" lazy-load :src="item.smallPicurl" mode="aspectFill" @click.stop="isShowMask = true"></image>
			</swiper-item>
		</swiper>

		<!-- 遮罩层 -->
		<view class="mask" v-if="isShowMask" @click="isShowMask = false">
			<view class="top-toool">
				<view class="left-button" @click="handleGoBack">
					<uni-icons type="left"></uni-icons>
				</view>
			</view>
			<view class="pages">{{ currentIndex + 1 }} / {{ currentClassList.length }}</view>
			<view class="time">
				<uni-dateformat :date="Date.now()" format="hh:mm"></uni-dateformat>
			</view>
			<view class="date">
				<uni-dateformat :date="Date.now()" format="MM月dd日"></uni-dateformat>
			</view>
			<view class="more-info">
				<view class="icon-box info" @click.stop="handleInfo">
					<uni-icons type="info"></uni-icons>
					<text>信息</text>
				</view>
				<view class="icon-box star" @click.stop="handleStar">
					<uni-icons type="star"></uni-icons>
					<text>5分</text>
				</view>
				<view class="icon-box download" @click.stop="handleDownload">
					<uni-icons type="download"></uni-icons>
					<text>下载</text>
				</view>
			</view>
		</view>

		<!-- info弹出层 -->
		<uni-popup ref="infoPopup" type="bottom">
			<view class="infoPopup">
				<!-- info顶部标题 -->
				<view class="top-title">
					<text class="title">壁纸信息</text>
					<uni-icons type="closeempty" class="close-btn" @click="handleInfoClose"></uni-icons>
				</view>
				<!-- info主体信息 -->
				<scroll-view class="main-info" scroll-y>
					<view class="row">
						<view class="left-title">壁纸ID：</view>
						<view class="right-content">1231231231231312312313123213</view>
					</view>
					<view class="row">
						<view class="left-title">发布者：</view>
						<view class="right-content">本图片来用户投稿，非商业使用</view>
					</view>
					<view class="row">
						<view class="left-title">评分：</view>
						<view class="right-content">
							<uni-rate allow-half :readonly="true" :size="20" :value="3.5" />
						</view>
					</view>
					<view class="row">
						<view class="left-title">摘要：</view>
						<view class="right-content">
							本图片来用户投稿，非商业使用本图片来用户投稿，非商业使用本图片来用户投稿，非商业使用本图片来用户投稿，非商业使用本图片来用户投稿，非商业使用
						</view>
					</view>
					<view class="row">
						<view class="left-title">标签：</view>
						<view class="right-content">
							<view class="tag">唱歌123</view>
							<view class="tag">跳舞</view>
							<view class="tag">rap</view>
							<view class="tag">唱歌123</view>
							<view class="tag">跳舞</view>
							<view class="tag">rap</view>
							<view class="tag">唱歌123</view>
							<view class="tag">跳舞</view>
							<view class="tag">rap</view>
							<view class="tag">唱歌123</view>
							<view class="tag">跳舞</view>
							<view class="tag">rap</view>
						</view>
					</view>

					<!-- info底部声明 -->
					<view class="copyright">
						声明：本图片来用户投稿，非商业使用，用于免费学习 交流，如侵犯了您的权益，您可以拷贝壁纸ID举报至平 台，邮箱513894357@qq.com，管理将删除侵权壁纸， 维护您的权益。
					</view>
				</scroll-view>
			</view>
		</uni-popup>

		<!-- star弹出层 -->
		<uni-popup ref="starPopup" type="center">
			<view class="starPopup">
				<!-- star顶部标题 -->
				<view class="top-title">
					<text class="title">{{ isRateScore ? '已经评分' : '壁纸评分' }}</text>
					<uni-icons type="closeempty" class="close-btn" @click="handleStarClose"></uni-icons>
				</view>
				<!-- star主体信息 -->
				<view class="main-star">
					<uni-rate :readonly="isRateScore" allow-half touchable :size="40" v-model="rateScore" />
					<text class="text">{{ rateScore }}分</text>
				</view>
				<!-- star底部按钮 -->
				<view class="bottom-btn" @click="handleStarConfirm">
					<button class="button" plain :disabled="isRateScore">确认</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { getStatusBarHeight } from '@/utils/system.js';

// 当前索引
const currentIndex = ref(0);

// 获取路由参数
onLoad(({ classid, index }) => {
	currentIndex.value = Number(index);
});

// 获取相邻图片
const isNear = (index) => {
	const len = currentClassList.value.length;
	// 前一个、当前、后一个，以及首尾循环时
	return index === currentIndex.value || index === (currentIndex.value + 1) % len || index === (currentIndex.value - 1 + len) % len;
};

// 轮播图切换事件
const handleSwiperChange = (e) => {
	currentIndex.value = e.detail.current;
};

// 当前分类列表
const currentClassList = ref(uni.getStorageSync('CLASSIFY_LIST') || []);
// 替换图片格式
currentClassList.value = currentClassList.value.map((item) => {
	item.smallPicurl = item.smallPicurl.replace('_small.webp', '.jpg');
	return item;
});

// 获取自定义顶部导航栏高度
const statusBarHeight = getStatusBarHeight() + 'px';

// 控制遮罩层显示
const isShowMask = ref(false);

// goBack点击事件
const handleGoBack = () => {
	uni.navigateBack();
};

// info弹出层组件实例
const infoPopup = ref(null);

// info弹出层点击事件
const handleInfo = () => {
	infoPopup.value.open();
};

// info弹出层关闭事件
const handleInfoClose = () => {
	infoPopup.value.close();
};

// star弹出层组件实例
const starPopup = ref(null);
// star评分
const rateScore = ref(1);
// star是否已经评分
const isRateScore = ref(false);

// star弹出层点击事件
const handleStar = () => {
	starPopup.value.open();
};

// star弹出层关闭事件
const handleStarClose = () => {
	starPopup.value.close();
};

// star弹出层确认事件
const handleStarConfirm = () => {
	isRateScore.value = true;
	starPopup.value.close();
};

// download点击事件
const handleDownload = () => {
	console.log(3);
};
</script>

<style scoped lang="scss">
.preview-container {
	position: relative;
	width: 100%;
	height: 100vh;

	// 轮播图
	.swiper {
		width: 100%;
		height: 100%;
		.swiper-item {
			width: 100%;
			height: 100%;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}

	// 遮罩层
	.mask {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		padding: 0 30rpx;

		// 顶部工具栏
		.top-toool {
			width: 100%;
			margin-top: v-bind(statusBarHeight);

			// 返回按钮
			.left-button {
				width: 60rpx;
				height: 60rpx;
				background-color: #fff;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				:deep(.uni-icons) {
					font-size: 40rpx !important;
				}
			}
		}

		// 页数
		.pages {
			height: 38rpx;
			line-height: 38rpx;
			text-align: center;
			background-color: rgba(0, 0, 0, 0.3);
			padding: 0 20rpx;
			border-radius: 19rpx;
			color: #fff;
		}

		// 时间
		.time {
			width: 341rpx;
			height: 110rpx;
			line-height: 110rpx;
			text-align: center;
			font-size: 110rpx;
			color: #fff;
		}

		// 日期
		.date {
			font-size: 34rpx;
			color: #fff;
		}

		// 更多信息
		.more-info {
			background-color: #eee5e0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: absolute;
			bottom: 154rpx;
			width: 490rpx;
			height: 120rpx;
			border-radius: 60rpx;
			padding: 16rpx 60rpx;

			:deep(.uni-icons) {
				font-size: 40rpx !important;
			}

			.icon-box {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-between;
				height: 100%;
				padding: 0 30rpx; // 扩大可点击的范围
			}
		}
	}

	// infoPopup弹出层
	.infoPopup {
		background-color: #fff;
		height: 60vh;
		width: 100%;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;

		// info顶部标题
		.top-title {
			position: relative;
			width: 100%;
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
			font-size: 40rpx;
			border-bottom: 1rpx solid #ccc;

			:deep(.uni-icons) {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				right: 20rpx;
				width: 50rpx;
				height: 50rpx;
				line-height: 50rpx;
				font-size: 50rpx !important;
			}
		}

		// info主体信息
		.main-info {
			box-sizing: border-box;
			padding: 30rpx 30rpx 0;
			width: 100%;
			height: calc(100% - 100rpx);

			.row {
				width: 100%;
				display: flex;
				align-items: flex-start;
				margin-bottom: 20rpx;

				.left-title {
					width: 132rpx;
					height: 50rpx;
					line-height: 50rpx;
					text-align: right;
					font-size: 24rpx;
					color: #ccc;
				}

				.right-content {
					line-height: 50rpx;
					font-size: 30rpx;
					display: flex;
					flex-wrap: wrap;
					flex: 1;

					// 评分
					:deep(.uni-rate) {
						height: 50rpx;
						align-items: center;
					}

					// 标签
					.tag {
						font-size: 24rpx;
						border: 1px solid $primary-color;
						padding: 0 20rpx;
						color: $primary-color;
						border-radius: 24rpx;
						margin: 0 10rpx 10rpx 0;
					}
				}
			}

			// info底部声明
			.copyright {
				margin-top: 30rpx;
				width: 100%;
				font-size: 24rpx;
				color: #777777;
				background-color: #f6f6f6;
				padding: 10rpx;
				border-radius: 10rpx;
			}
		}
	}

	// starPopup弹出层
	.starPopup {
		background-color: #fff;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 25vh;
		width: 80vw;
		border-radius: 20rpx;

		// star顶部标题
		.top-title {
			position: relative;
			width: 100%;
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
			font-size: 40rpx;
			border-bottom: 1rpx solid #ccc;

			:deep(.uni-icons) {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				right: 20rpx;
				width: 50rpx;
				height: 50rpx;
				line-height: 50rpx;
				font-size: 50rpx !important;
			}
		}

		// star主体
		.main-star {
			display: flex;
			align-items: center;
			margin: 40rpx 0;

			.text {
				color: #ffca3e;
			}
		}

		// star底部
		.bottom-btn {
			.button {
				padding: 0 36rpx;
				border-radius: 36rpx;
				border-color: #ccc;
			}
		}
	}
}
</style>
