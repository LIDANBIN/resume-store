<template>
  <view class="load-record-wrap">
    <view class="jlb-load-item" v-for="(i,index) in data" :key="index">
      <view class="load-title">
        <view class="title">下载{{i.name}}</view>
        <view class="level">{{i.level}}</view>
      </view>
      <view class="load-time">
        <view class="time">下载{{i.time}}</view>
        <!-- <view class="download">重新下载</view> -->
      </view>
    </view>
    <!-- 加载更多文字提示 -->
    <view class="jlb-loadmore" v-if="showLoadMore">{{loadMoreText}}</view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      data: [], // 下载列表
      loadMoreText: "加载中...",
      showLoadMore: false,
      max: 0
    };
  },
  onLoad() {
    this.initData();
  },
  onUnload() {
    this.max = 0;
    this.data = [];
    this.loadMoreText = "加载更多";
    this.showLoadMore = false;
  },
  onReachBottom() {
    if (this.max > 40) {
      this.loadMoreText = "没有更多数据了!";
      return;
    }
    this.showLoadMore = true;
    setTimeout(() => {
      this.setDate();
    }, 300);
  },
  onPullDownRefresh() {
    this.initData();
  },
  methods: {
    // 初始化数据
    initData() {
      setTimeout(() => {
        this.max = 0;
        this.data = [];
        let data = [];
        this.max += 20;
        for (var i = this.max - 19; i < this.max + 1; i++) {
          data.push({
            name: "小仙女的简历" + i,
            time: i + "个月",
            level: "免费"
          });
        }
        this.data = this.data.concat(data);
        uni.stopPullDownRefresh();
      }, 300);
    },
    // 上拉刷新数据
    setDate() {
      let data = [];
      this.max += 20;
      for (var i = this.max - 19; i < this.max + 1; i++) {
        data.push({
          name: "小仙女的简历" + i,
          time: i + "个月",
          level: "VIP"
        });
      }
      this.data = this.data.concat(data);
    }
  }
};
</script>
<style>
.load-record-wrap .jlb-loadmore {
  text-align: center;
  line-height: 120upx;
  color: #999999;
}
.load-record-wrap .jlb-load-item {
  border-bottom: 1upx solid #f0f0f0;
  padding: 20upx 30upx;
  background: #fff;
  color: #555;
}
.load-record-wrap .load-title,
.load-record-wrap .load-time {
  display: flex;
}
.load-record-wrap .load-title view,
.load-record-wrap .load-time view {
  flex: 1;
  font-size: 26upx;
  line-height: 2;
}
.load-record-wrap .level,
.load-record-wrap .download {
  text-align: right;
}
.load-record-wrap .download {
  color: #409eff;
}
.load-record-wrap .level {
  /* color: #e6a23c; */
  font-weight: 500;
}
.load-record-wrap .title {
  font-weight: 500;
}
.load-record-wrap .time {
  color: #999;
  font-size: 22upx;
}
</style>
