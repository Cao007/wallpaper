
<template>
  <view class="container">
    <!-- 头部导航 -->
    <view class="header">
      <view class="title">推荐</view>
      <view class="search-box">
        <uni-icons type="search" size="16" color="#999"></uni-icons>
        <input type="text" placeholder="搜索" placeholder-class="placeholder" />
      </view>
      <view class="header-right">
        <uni-icons type="more-filled" size="20" color="#333"></uni-icons>
        <uni-icons type="scan" size="20" color="#333"></uni-icons>
      </view>
    </view>

    <!-- 顶部banner -->
    <view class="banner">
      <image class="banner-img" :src="bannerUrl" mode="widthFix"></image>
    </view>

    <!-- 公告栏 -->
    <view class="notice">
      <view class="notice-left">
        <uni-icons type="notification" size="16" color="#333"></uni-icons>
        <text class="notice-text">公告</text>
      </view>
      <view class="notice-content">
        <text class="notice-msg">欢迎关注威米图文公众号，获取更多精彩内容</text>
      </view>
      <uni-icons type="right" size="14" color="#999"></uni-icons>
    </view>

    <!-- 每日推荐 -->
    <view class="daily">
      <view class="section-header">
        <text class="section-title">每日推荐</text>
        <text class="date">12号</text>
      </view>
      <scroll-view class="daily-scroll" scroll-x>
        <view class="daily-list">
          <view class="daily-item" v-for="(item, index) in dailyList" :key="index">
            <image class="daily-img" :src="item.url" mode="aspectFill"></image>
          </view>
        </view>
      </scroll-view>
    </view>

    <!-- 专题精选 -->
    <view class="special">
      <view class="section-header">
        <text class="section-title">专题精选</text>
        <text class="more">More+</text>
      </view>
      <view class="special-grid">
        <view class="special-item" v-for="(item, index) in specialList" :key="index">
          <image class="special-img" :src="item.url" mode="aspectFill"></image>
          <view class="special-info">
            <text class="special-title">{{item.title}}</text>
            <text class="special-tag">{{item.updateTime}}</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 底部导航 -->
    <view class="tab-bar">
      <view class="tab-item active">
        <uni-icons type="home" size="20" color="#07c160"></uni-icons>
        <text>推荐</text>
      </view>
      <view class="tab-item">
        <uni-icons type="grid" size="20" color="#999"></uni-icons>
        <text>分类</text>
      </view>
      <view class="tab-item">
        <uni-icons type="person" size="20" color="#999"></uni-icons>
        <text>我的</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const bannerUrl = 'https://ai-public.mastergo.com/ai/img_res/25fb2b585f238e9fa6c6a85f6a543833.jpg';

const dailyList = ref([
  {
    url: 'https://ai-public.mastergo.com/ai/img_res/d555d25c3768ad690e00818008b9c03b.jpg'
  },
  {
    url: 'https://ai-public.mastergo.com/ai/img_res/f0f6d01a8fd575a3aaab6ab4bc086387.jpg'
  },
  {
    url: 'https://ai-public.mastergo.com/ai/img_res/c47b3f70789397bfe314df5bd4adcba3.jpg'
  }
]);

const specialList = ref([
  {
    url: 'https://ai-public.mastergo.com/ai/img_res/64403fafa75c98f158aafb6d1de8edfe.jpg',
    title: '可爱萌宠',
    updateTime: '2月前更新'
  },
  {
    url: 'https://ai-public.mastergo.com/ai/img_res/5ec50d944780870a11ba2cd03dae834c.jpg',
    title: '自然风光',
    updateTime: '2月前更新'
  },
  {
    url: 'https://ai-public.mastergo.com/ai/img_res/790b6a1ec7da5923f3f732d2acef4beb.jpg',
    title: '独特建筑',
    updateTime: '2月前更新'
  },
  {
    url: 'https://ai-public.mastergo.com/ai/img_res/41cee37caf587c6db9682c863d1e0efc.jpg',
    title: '创意色彩',
    updateTime: '25天前更新'
  },
  {
    url: 'https://ai-public.mastergo.com/ai/img_res/e9c607b904e85bc84e3a08dfc235aae6.jpg',
    title: '动漫二次元',
    updateTime: '1月前更新'
  },
  {
    url: 'https://ai-public.mastergo.com/ai/img_res/41009190a08910c50339db18f50bebfc.jpg',
    title: '深色系',
    updateTime: '1月前更新'
  }
]);
</script>

<style lang="scss" scoped>
page {
  height: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background-color: #f5f5f5;
}

.header {
  display: flex;
  align-items: center;
  padding: 20rpx 30rpx;
  background-color: #ffffff;
}

.title {
  font-size: 16px;
  font-weight: bold;
  margin-right: 20rpx;
}

.search-box {
  flex: 1;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 32rpx;
  padding: 12rpx 24rpx;
}

.search-box input {
  flex: 1;
  font-size: 14px;
  margin-left: 12rpx;
}

.placeholder {
  color: #999999;
}

.header-right {
  display: flex;
  align-items: center;
  margin-left: 20rpx;
  gap: 20rpx;
}

.banner {
  width: 100%;
  background-color: #ffffff;
}

.banner-img {
  width: 100%;
}

.notice {
  display: flex;
  align-items: center;
  padding: 20rpx 30rpx;
  background-color: #ffffff;
  margin-top: 20rpx;
}

.notice-left {
  display: flex;
  align-items: center;
  margin-right: 20rpx;
}

.notice-text {
  font-size: 14px;
  margin-left: 8rpx;
}

.notice-content {
  flex: 1;
  overflow: hidden;
}

.notice-msg {
  font-size: 14px;
  color: #666666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.daily {
  margin-top: 20rpx;
  background-color: #ffffff;
  padding: 30rpx;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20rpx;
}

.section-title {
  font-size: 16px;
  font-weight: bold;
}

.date {
  font-size: 14px;
  color: #07c160;
}

.daily-scroll {
  width: 100%;
  white-space: nowrap;
}

.daily-list {
  display: inline-flex;
  gap: 20rpx;
}

.daily-item {
  width: 200rpx;
  height: 300rpx;
  border-radius: 12rpx;
  overflow: hidden;
}

.daily-img {
  width: 100%;
  height: 100%;
}

.special {
  margin-top: 20rpx;
  background-color: #ffffff;
  padding: 30rpx;
  margin-bottom: 100rpx;
}

.more {
  font-size: 14px;
  color: #999999;
}

.special-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20rpx;
}

.special-item {
  position: relative;
  border-radius: 12rpx;
  overflow: hidden;
}

.special-img {
  width: 100%;
  height: 200rpx;
}

.special-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16rpx;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
}

.special-title {
  display: block;
  font-size: 14px;
  color: #ffffff;
  margin-bottom: 8rpx;
}

.special-tag {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
}

.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100rpx;
  background-color: #ffffff;
  border-top: 1px solid #f0f0f0;
}

.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.tab-item text {
  font-size: 12px;
  color: #999999;
  margin-top: 6rpx;
}

.tab-item.active text {
  color: #07c160;
}
</style>

