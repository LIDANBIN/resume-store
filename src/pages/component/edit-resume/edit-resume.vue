<template>
  <view class="edit-resume-wrap">
    <view class="uni-padding-wrap uni-common-mt">
      <uni-segmented-control
        :current="webview"
        :values="items"
        v-on:clickItem="onClickItem"
        :styleType="styleType"
        :activeColor="activeColor"
      ></uni-segmented-control>
      <view class="uni-icon uni-icon-more"></view>
    </view>
    <view class="content">
      <!-- 编辑简历 -->
      <view v-show="webview === 0">
        <view class="add-open">
          <button class="mini-btn" type="primary" size="middle">
            <view class="uni-icon uni-icon-plusempty"></view>添加模块
          </button>
          <button class="mini-btn" type="primary" size="middle">
            <view class="uni-icon uni-icon-arrowdown"></view>展开模块
          </button>
        </view>
        <!-- 简历各模块 -->
        <view class="uni-card" v-for="(list,index) in lists" :key="index">
          <view class="uni-list">
            <view class="uni-list-cell uni-collapse">
              <!-- 模块标题 -->
              <view
                class="uni-list-cell-navigate"
                hover-class="uni-list-cell-hover"
                :class="[list.open ? 'uni-active' : '']"
              >
                <!-- 标题部分 -->
                <view class="list-title" @click="triggerCollapse(index)">
                  <view
                    class="title uni-icon"
                    :class="list.open ? 'icon-arrowdown' : 'icon-arrowright'"
                  >{{list.name}}</view>
                </view>
                <!-- 删除按钮 -->
                <view
                  v-if="index !== 0"
                  @click="deleteModule(list, index)"
                  class="uni-icon"
                  :class="[list.open ? 'uni-navigate-bottom' : 'uni-navigate-right']"
                ></view>
              </view>
              <!-- 模块展开内容 -->
              <view class="uni-list uni-collapse" :class="list.open ? 'uni-active' : ''">
                <!-- 已编辑过 -->
                <view class="has-edit" v-if="list.infos"></view>
                <!-- 未编辑过 -->
                <view class="never-edit" v-else>
                  <view class="uni-icon uni-icon-plus-filled"></view>
                  添加{{list.name}}
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
      <!-- 预览简历 -->
      <view v-show="webview === 1">这是一个webview</view>
    </view>
  </view>
</template>

<script>
import uniSegmentedControl from "../../../components/uni-segmented-control.vue";

export default {
  data() {
    return {
      lists: [
        {
          id: "navbar",
          name: "基本信息",
          infos: null,
          open: false
        },
        {
          id: "navbar",
          name: "求职意向",
          infos: null,
          open: false
        },
        {
          id: "navbar",
          name: "教育背景",
          infos: null,
          open: false
        },
        {
          id: "navbar",
          name: "工作经历",
          infos: null,
          open: false
        },
        {
          id: "navbar",
          name: "实践经历",
          infos: null,
          open: false
        },
        {
          id: "navbar",
          name: "项目经历",
          infos: null,
          open: false
        },
        {
          id: "navbar",
          name: "技能特长",
          infos: null,
          open: false
        },
        {
          id: "navbar",
          name: "自我评价",
          infos: null,
          open: false
        }
      ],
      items: ["编辑", "预览"],
      activeColor: "#007aff",
      styleType: "button"
    };
  },
  components: {
    uniSegmentedControl
  },
  methods: {
    // 切换是否预览
    onClickItem(index) {
      if (this.webview !== index) {
        uni.navigateTo({
					url: '/pages/component/edit-resume/edit-resume?resumeId=' + (this.resumeId || '') + '&templateId=' + (this.templateId || '') + '&webview=' + index
				})
      }
    },
    // 展开折叠面板
    triggerCollapse(e) {
      for (var i = 0; i < this.lists.length; ++i) {
        if (e === i) {
          this.lists[i].open = !this.lists[e].open;
        } else {
          this.lists[i].open = false;
        }
      }
    },
    // 删除模块
    deleteModule(i, index) {
      uni.showModal({
        content: "确定要删除" + i.name + "模块吗？",
        success: res => {
          if (res.confirm) {
            this.isDeleting = true;
            setTimeout(() => {
              this.lists.splice(index, 1);
              uni.showToast({
                title: "删除成功",
                icon: "success",
                duration: 2000
              });
              this.isDeleting = false;
              this.visibleDrawer = "";
            }, 300);
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    }
  },
  computed: {
    // 模板Id
    templateId() {
      let pages = getCurrentPages(); //获取加载的页面
      let currentPage = pages[pages.length - 1]; //获取当前页面的对象
      let url = currentPage.route; //当前页面url
      let options = currentPage.options; //如果要获取url中所带的参数可以查看options
      let route = (this.$route && this.$route.query) || options;
      return +route.templateId;
    },
    // 简历Id
    resumeId() {
      let pages = getCurrentPages(); //获取加载的页面
      let currentPage = pages[pages.length - 1]; //获取当前页面的对象
      let url = currentPage.route; //当前页面url
      let options = currentPage.options; //如果要获取url中所带的参数可以查看options
      let route = (this.$route && this.$route.query) || options;
      return +route.resumeId;
    },
    // 是否预览 1是 0不是
    webview() {
      let pages = getCurrentPages(); //获取加载的页面
      let currentPage = pages[pages.length - 1]; //获取当前页面的对象
      let url = currentPage.route; //当前页面url
      let options = currentPage.options; //如果要获取url中所带的参数可以查看options
      let route = (this.$route && this.$route.query) || options;
      return +route.webview;
    }
  }
};
</script>

<style>
.edit-resume-wrap .uni-padding-wrap {
  position: relative;
}

.edit-resume-wrap .uni-padding-wrap .uni-icon {
  position: absolute;
  right: 10upx;
  font-size: 60upx;
  top: 0;
  bottom: 0;
  text-align: center;
  transform: rotate(90deg);
  /* background: #d2e7fd75; */
  color: #007aff;
  /* border-radius: 50%; */
}

.edit-resume-wrap .content .add-open {
  display: flex;
}

.edit-resume-wrap .content .add-open .mini-btn {
  flex: 1;
  background: #f0f0f0;
  color: #666;
  border-radius: 0;
  font-size: 30upx;
  margin-top: 10upx;
}

.edit-resume-wrap .content .add-open .mini-btn::after {
  border: none;
  border-radius: 0;
  border-right: 1px solid #ccc;
}

.edit-resume-wrap .uni-card {
  box-shadow: none;
}

.edit-resume-wrap .uni-list:after {
  height: 0;
}
.edit-resume-wrap .uni-list-cell-navigate {
  line-height: 46upx;
  height: 86upx;
  padding: 20upx 30upx;
}

.edit-resume-wrap .uni-list-cell-navigate .uni-navigate-bottom:after,
.edit-resume-wrap .uni-list-cell-navigate .uni-navigate-right:after {
  content: "\E401";
  font-size: 48upx;
}

.edit-resume-wrap .uni-list-cell-navigate.uni-active {
  background: #fff;
  border-bottom: 1upx solid #eee;
}

.edit-resume-wrap .uni-list-cell-navigate .list-title {
  display: flex;
  color: #666;
}

.edit-resume-wrap .list-title .title {
  font-size: 30upx;
}

.edit-resume-wrap .list-title .icon-arrowdown:after {
  content: "\E581";
  font-size: 30upx;
}

.edit-resume-wrap .list-title .icon-arrowright:after {
  content: "\E583";
  font-size: 30upx;
}

.edit-resume-wrap .uni-list:before {
  height: 0;
}

.edit-resume-wrap .uni-hello-text {
  word-break: break-all;
}

.edit-resume-wrap .uni-collapse .never-edit {
  padding: 40upx;
  color: #007aff;
}
.edit-resume-wrap .uni-collapse .uni-icon-plus-filled {
  font-size: 36upx;
}
</style>
