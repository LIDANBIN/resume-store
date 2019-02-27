<template>
  <view class="work-experience-wrap">
    <view class="list-last">
      <view class="title">技能特长</view>
      <textarea class="content" placeholder="请填写技能特长"/>
    </view>
    <view class="bottom-btns">
      <!-- <view class="uni-icon uni-icon-closeempty">删除此项</view> -->
      <view class="uni-icon uni-icon-checkmarkempty">保存</view>
    </view>
  </view>
</template>
<script>
export default {};
</script>
<style>
.work-experience-wrap .list-last {
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
}
.work-experience-wrap .list-last .title {
  color: #333;
  font-size: 28upx;
  padding-left: 20upx;
  line-height: 100upx;
}
.work-experience-wrap .list-last .content {
  width: 100%;
  color: #555;
  box-sizing: border-box;
  font-size: 28upx;
  padding: 0 20upx 16upx;
}

.work-experience-wrap .bottom-btns {
  text-align: center;
  background: #fff;
  display: flex;
}
.work-experience-wrap .bottom-btns view {
  flex: 1;
  line-height: 100upx;
  font-size: 34upx;
}
.work-experience-wrap .uni-icon-closeempty {
  border-right: 1upx solid #f0f0f0;
  background: #f56c6c;
  color: #fff;
}
.work-experience-wrap .uni-icon-checkmarkempty {
  /* border-right: 1upx solid #f0f0f0; */
  background: #409eff;
  color: #fff;
}
</style>
