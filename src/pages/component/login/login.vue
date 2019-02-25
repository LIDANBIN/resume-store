<template>
  <view class="login-wrap">
    <view class="login-type" @click="loginByQQ">
      <view class="uni-icon uni-icon-qq"></view>
      <view class="text">QQ登录</view>
    </view>
    <view class="login-type" @click="loginByWexin">
      <view class="uni-icon uni-icon-weixin"></view>
      <view class="text">微信登录</view>
    </view>
    <view class="login-type" @click="loginByWeibo">
      <view class="uni-icon uni-icon-weibo"></view>
      <view class="text">微博登录</view>
    </view>
  </view>
</template>

<script>
export default {
    methods: {
        // qq登录
        loginByQQ() {

        },
        // 微信登录
        loginByWexin() {

        },
        // 微博登录
        loginByWeibo() {

        }
    }
};
</script>

<style>
uni-page-body {
  height: 100%;
}
.login-wrap {
  /* background: #fff; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-wrap .login-type {
  width: 180upx;
  height: 180upx;
  text-align: center;
}
.login-wrap .login-type .text {
  font-size: 24upx;
  color: #666;
}
.login-wrap .login-type .uni-icon {
  font-size: 88upx;
  width: 120upx;
  height: 120upx;
  line-height: 120upx;
  border-radius: 50%;
  background: #fff;
  border: 2upx solid #f0f0f0;
}
.login-wrap .login-type .uni-icon-qq {
      color: #3299dc;
}
.login-wrap .login-type .uni-icon-weixin {
    color: #2ca43a;
    font-size: 98upx;
}
.login-wrap .login-type .uni-icon-weibo {
    color: #da251c;
    font-size: 108upx;
}
</style>
