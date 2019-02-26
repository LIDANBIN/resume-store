<template>
  <view class="upgrade-wrap">
    <view
      class="item"
      @click="type = i.type; price = i.price"
      v-for="(i, index) in data"
      :key="index"
    >
      <view class="left">
        <view class="top">{{i.name}}</view>
        <view class="bottom">{{i.validityPeriod}}</view>
      </view>
      <view class="middle">￥{{i.price}}</view>
      <!-- checkbox-filled -->
      <view
        class="uni-icon right"
        :class="type === i.type ? 'uni-icon-checkbox-filled' : 'uni-icon-circle'"
      ></view>
    </view>
    <view class="privilege">
      <!-- checkmarkempty -->
      <view>
        <view class="uni-icon uni-icon-checkmarkempty"></view>图片下载：不限次
      </view>
      <view>
        <view class="uni-icon uni-icon-checkmarkempty"></view>Word下载：不限次
      </view>
      <view>
        <view class="uni-icon uni-icon-checkmarkempty"></view>PDF下载：不限次
      </view>
      <view>
        <view class="uni-icon uni-icon-checkmarkempty"></view>头像大小：不限制
      </view>
    </view>
    <view class="use-template" @click="toEditResume">
      <button class="mini-btn" type="primary" size="middle">支付{{price}}</button>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          name: "超级VIP",
          validityPeriod: "永久有效",
          price: "39.9",
          type: "super"
        },
        {
          name: "年费VIP",
          validityPeriod: "一年有效",
          price: "19.9",
          type: "year"
        },
        {
          name: "月费VIP",
          validityPeriod: "一月有效",
          price: "9.9",
          type: "month"
        }
      ],
      type: "super", // super year month
      price: 39.9
    };
  }
};
</script>
<style>
.upgrade-wrap .item {
  display: flex;
  height: 140upx;
  background: #fff;
  margin-top: 20upx;
}
.upgrade-wrap .item view {
  line-height: 140upx;
  flex: 1;
  text-align: center;
}
.upgrade-wrap .item .left {
  font-size: 32upx;
  color: #555;
  font-weight: 500;
  padding: 20upx 0;
}
.upgrade-wrap .item .left view {
  line-height: 50upx;
}
.upgrade-wrap .item .left .bottom {
  font-size: 20upx;
  color: #999;
}
.upgrade-wrap .item .middle {
  font-size: 42upx;
  color: #f56c6c;
  font-weight: 500;
  font-style: oblique;
}
.upgrade-wrap .item .right {
  font-size: 38upx;
}
.upgrade-wrap .item .uni-icon-checkbox-filled {
  color: #67c23a;
}
.upgrade-wrap .use-template {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.upgrade-wrap .use-template .mini-btn {
  border-radius: 0;
}
.upgrade-wrap .privilege {
  border: 4upx dashed #409EFF;
  margin: 40upx auto 0;
  width: 400upx;
  height: 300upx;
  padding-top: 60upx;
  position: relative;
  text-align: center;
}
.upgrade-wrap .privilege view {
  line-height: 60upx;
  font-size: 24upx;
  color: #555;
}
.upgrade-wrap .privilege view .uni-icon-checkmarkempty {
    color: #67c23a;
    font-size: 56upx;
}
.upgrade-wrap .privilege::after {
  content: "会员特权";
  position: absolute;
  top: -2upx;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #f4f5f6;
  font-size: 28upx;
  color: #555;
  padding: 0 10upx;
  font-weight: 500;
}
</style>
