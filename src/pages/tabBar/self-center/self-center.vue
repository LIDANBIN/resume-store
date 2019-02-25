<template>
  <view class="self-center-wrap">
    <!-- 未登录 -->
    <view class="self-base-info not-login" v-if="!isLogin">
      <view class="avatar">
        <view class="uni-icon uni-icon-person-filled"></view>
      </view>
      <button class="mini-btn" type="primary" size="mini" @click="toLogin">登录/注册</button>
    </view>
    <!-- 已登录 -->
    <view class="self-base-info is-login" v-else>
      <view class="avatar">
        <image class="pic" mode="widthFix" src="http://pic1.win4000.com/pic/d/b6/0b8b162c13.jpg"></image>
      </view>
      <view class="user-name">{{'小仙女'}}</view>
      <view class="user-level">{{'普通会员'}}|{{'2019-02-25'}}</view>
    </view>
    <!-- 折叠面板 -->
    <view class="detail-info-wrap" v-if="isLogin">折叠</view>
    <!-- 退出登录 -->
  </view>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true // 是否登录
    };
  },
  methods: {
    toLogin() {
      uni.navigateTo({
        url: "/pages/component/login/login"
	  })
    }
  }
};
</script>

<style>
.self-center-wrap .self-base-info {
  padding: 20upx 30upx;
  text-align: center;
}
.self-base-info.is-login {
  background: #fff;
}
.self-base-info.not-login {
  padding-top: 200upx;
}
.self-center-wrap .self-base-info .avatar {
  width: 180upx;
  height: 180upx;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 20upx;
  text-align: center;
  background: #d2e7fd75;
}
.self-base-info .avatar .uni-icon-person-filled {
  line-height: 180upx;
  font-size: 112upx;
  color: #5587d7;
}
.self-base-info .avatar .pic {
  width: 200upx;
}

.self-center-wrap .self-base-info .user-name {
  font-size: 32upx;
  font-weight: 500;
  color: #333;
}
.self-center-wrap .self-base-info .user-level {
  color: #999;
  font-size: 24upx;
}
.self-center-wrap .detail-info-wrap {
  margin-top: 30upx;
  background: #fff;
}
</style>
