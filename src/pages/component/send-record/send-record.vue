<template>
  <view class="send-record-wrap">
    <view class="jlb-send-item" v-for="(i,index) in data" :key="index">
      <view class="list">
        <view class="title">发件邮件</view>
        <view class="value">{{i.postMailbox}}</view>
      </view>
      <view class="list">
        <view class="title">收件邮箱</view>
        <view class="value">{{i.receiveMailbox}}</view>
      </view>
      <view class="list">
        <view class="title">邮件主题</view>
        <view class="value">{{i.theme}}</view>
      </view>
      <view class="uni-list-cell uni-collapse">
        <view
          class="uni-list-cell-navigate uni-navigate-bottom"
          :class="i.show ? 'uni-active' : ''"
          @click="trigerCollapse(index)"
        >
          {{i.time}}
          <view class="detail">详情</view>
        </view>
        <view class="uni-collapse-content" :class="i.show ? 'uni-active' : ''">
          <view class="content">
            尊敬的招聘负责人，您好！
            <br>
            <br>我叫简小丽，用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同uni.getUserInfo用户点击该按钮时，会返回获取到的
            用户信息，从返回参数的detail中获取到的值同uni.getUserInfo用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同uni.getUserInfo
            <br>
            <br>我叫简小丽，用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中
            <br>
          </view>
          <view class="my-resume">我的简历：{{i.resumeUrl}}</view>
          <view class="file">附件：{{i.fileName}}</view>
        </view>
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
            postMailbox: "12345596607@qq.com",
            receiveMailbox: "76235487382@qq.com",
            theme: "小仙女的简历" + i,
            resumeUrl:
              "http://192.168.43.193:8082/#/pages/component/load-record/load-record",
            fileName: "小仙女的简历" + i,
            time: "2019-07-29 12:09",
            show: false
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
          postMailbox: "12345596607@qq.com",
          receiveMailbox: "76235487382@qq.com",
          theme: "小仙女的简历" + i,
          resumeUrl:
            "http://192.168.43.193:8082/#/pages/component/load-record/load-record",
          fileName: "小仙女的简历" + i,
          time: "2019-07-29 12:09",
          show: false
        });
      }
      this.data = this.data.concat(data);
    },
    trigerCollapse(index) {
      this.data[index].show = !this.data[index].show;
    }
  }
};
</script>
<style>
.send-record-wrap .jlb-send-item {
  background: #fff;
  margin-bottom: 20upx;
  padding: 16upx 30upx;
}
.send-record-wrap .jlb-send-item .list {
  display: flex;
}
.send-record-wrap .jlb-send-item .list .title {
  width: 20%;
  line-height: 1.6;
  color: #333;
  font-size: 24upx;
}
.send-record-wrap .jlb-send-item .list .value {
  width: 80%;
  text-align: right;
  line-height: 1.6;
  color: #999;
  font-size: 24upx;
}
.send-record-wrap .uni-list-cell-navigate {
  padding: 10upx 0;
  margin-top: 10upx;
  font-size: 24upx;
  border-top: 1upx solid #f0f0f0;
  color: #555;
}
.send-record-wrap .uni-list-cell::after {
  height: 0;
}
.send-record-wrap .uni-list-cell-navigate .detail {
  font-size: 12px;
  color: #007aff;
  padding-right: 50upx;
}

.send-record-wrap .uni-collapse-content .content,
.send-record-wrap .uni-collapse-content .my-resume,
.send-record-wrap .uni-collapse-content .file {
  font-size: 24upx;
  color: #666;
  padding: 20upx 0;

  border-top: 1upx solid #f0f0f0;
}
.send-record-wrap .uni-collapse-content .my-resume,
.send-record-wrap .uni-collapse-content .file {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.send-record-wrap .jlb-loadmore {
  text-align: center;
  line-height: 120upx;
  color: #999999;
}
</style>
