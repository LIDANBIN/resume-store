<template>
	<view class="edit-resume-wrap">
		<view class="uni-padding-wrap uni-common-mt">
			<uni-segmented-control :current="webview"  v-on:clickItem="onClickItem" :styleType="styleType"
			 :activeColor="activeColor"></uni-segmented-control>
			<!-- <view class="uni-icon uni-icon-more"></view> -->
			<uni-fab :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical" :direction="direction"
			 @trigger="trigger"></uni-fab>
		</view>
		<view class="content">
			<!-- 编辑简历 -->
			<view v-show="webview === 0">
				<view class="add-open">
					<button class="mini-btn" type="primary" size="middle" @click="addModule()">
						<view class="uni-icon uni-icon-plusempty"></view>添加模块
					</button>
					<button class="mini-btn" type="primary" size="middle" @click="openModule()">
						<view class="uni-icon" :class="isAllModuleOpen ? 'uni-icon-arrowup' : 'uni-icon-arrowdown'"></view>
						{{isAllModuleOpen ? '收起模块' : '展开模块'}}
					</button>
				</view>
				<!-- 简历各模块 -->
				<view class="uni-card" v-for="list in lists" :key="list.id">
					<view class="uni-list">
						<view class="uni-list-cell uni-collapse">
							<!-- 模块标题 -->
							<view class="uni-list-cell-navigate" hover-class="uni-list-cell-hover" :class="list.open ? 'uni-active' : ''">
								<!-- 标题部分 -->
								<view class="list-title" @click="triggerCollapse(mindex)">
									<view class="title uni-icon" :class="list.open ? 'icon-arrowdown' : 'icon-arrowright'">{{list.name}}</view>
								</view>
								<!-- 删除按钮 -->
								<view v-if="mindex !== 0" @click="deleteModule(list, mindex)" class="uni-icon" :class="list.open ? 'uni-navigate-bottom' : 'uni-navigate-right'"></view>
							</view>
							<!-- 模块展开内容 -->
							<view class="uni-list uni-collapse" :class="list.open ? 'uni-active' : ''">
								<!-- 已编辑过 -->
								<view class="has-edit" v-if="list.infos">
									<!-- 基本信息 -->
									<view class="base-info" v-if="list.id == 'baseInfo'">
										<view class>
											<text class="name">{{'小仙女'}}</text>
											<text class="sex">{{'女'}}</text>|
											<text class="old">{{18}}岁</text>|
											<text class="work-experience">{{10}}年经验</text>
										</view>
										<view class>手机号码：{{'14690948765'}}</view>
										<view class>邮箱地址：{{'14690948765@qq.com'}}</view>
										<view class>婚姻状况：{{'未婚'}}</view>
										<view class>政治面貌：{{'群众'}}</view>
										<view class>籍贯地址：{{'山西'}}</view>
										<view class="front-edit-line">求职意向：{{'UI设计师'}}</view>
										<view class="bottom-button" @click="toEdit('baseInfo')">
											<view class="uni-icon uni-icon uni-icon-compose"></view>修改
										</view>
									</view>
									<!-- 求职意向 -->
									<view class="base-info" v-if="list.id == 'objective'">
										<view class>意向岗位：{{'前端开发工程师'}}</view>
										<view class>期望薪酬：{{'50k-100k'}}</view>

										<view class>期望地点：{{'深圳'}}</view>
										<view class="front-edit-line">到岗时间：{{'随时'}}</view>

										<view class="bottom-button" @click="toEdit('objective')">
											<view class="uni-icon uni-icon uni-icon-compose"></view>修改
										</view>
									</view>
									<!-- 工作经验 -->
									<view class="base-info" v-if="list.id == 'experience'">
										<view v-for="(i) in arr" :key="i" class="experience-item">
											<view class="company-name">
												<view>华为公司</view>
												<view class="time" @click="toEditExperience('work-experience')">2015.09 - 2017.08
													<view class="uni-icon uni-icon-arrowright"></view>
												</view>
											</view>
											<view class="job">软件开发工程师</view>
											<view class="main">
												1. 本插件需要申请的手机端权限列表： 无
												2. 本插件采集的手机端数据、发送的服务器地址、以及数据用途说明： 无
												3. 本插件是否包含广告，如包含需详细说明广告表达方式、展示频率： 无
											</view>
										</view>
										<view class="bottom-button" @click="toEditExperience('work-experience')">
											<view class="uni-icon uni-icon-plus-filled"></view>新增一项
										</view>
									</view>
									<!-- 教育背景 -->
									<view class="base-info" v-if="list.id == 'education'">
										<view v-for="(i) in arr" :key="i" class="experience-item">
											<view class="company-name">
												<view>深圳大学</view>
												<view class="time" @click="toEdit('education')">2015.09 - 2017.08
													<view class="uni-icon uni-icon-arrowright"></view>
												</view>
											</view>
											<view class="job">信息与计算科学|本科</view>
										</view>
										<view class="bottom-button" @click="toEdit('education')">
											<view class="uni-icon uni-icon-plus-filled"></view>新增一项
										</view>
									</view>
									<!-- 实习经历 -->
									<view class="base-info" v-if="list.id == 'practice'">
										<view v-for="(i) in arr" :key="i" class="experience-item">
											<view class="company-name">
												<view>华为公司</view>
												<view class="time" @click="toEditExperience('practice-experience')">2015.09 - 2017.08
													<view class="uni-icon uni-icon-arrowright"></view>
												</view>
											</view>
											<view class="job">软件开发工程师</view>
											<view class="main">
												1. 本插件需要申请的手机端权限列表： 无
												2. 本插件采集的手机端数据、发送的服务器地址、以及数据用途说明： 无
												3. 本插件是否包含广告，如包含需详细说明广告表达方式、展示频率： 无
											</view>
										</view>
										<view class="bottom-button" @click="toEditExperience('practice-experience')">
											<view class="uni-icon uni-icon-plus-filled"></view>新增一项
										</view>
									</view>
									<!-- 项目经验 -->
									<view class="base-info" v-if="list.id == 'project'">
										<view v-for="(i) in arr" :key="i" class="experience-item">
											<view class="company-name">
												<view>移动端常见的图标展示</view>
												<view class="time" @click="toEditExperience('project-experience')">2015.09 - 2017.08
													<view class="uni-icon uni-icon-arrowright"></view>
												</view>
											</view>
											<view class="job">软件开发工程师</view>
											<view class="main">
												1. 本插件需要申请的手机端权限列表： 无
												2. 本插件采集的手机端数据、发送的服务器地址、以及数据用途说明： 无
												3. 本插件是否包含广告，如包含需详细说明广告表达方式、展示频率： 无
											</view>
										</view>
										<view class="bottom-button" @click="toEditExperience('project-experience')">
											<view class="uni-icon uni-icon-plus-filled"></view>新增一项
										</view>
									</view>
									<!-- 技能特长 -->
									<view class="base-info" v-if="list.id == 'specialty'">
										<view class="front-edit-line">
											美术、武术、吉他、钓鱼
										</view>
										<view class="bottom-button" @click="toEdit('specialty')">
											<view class="uni-icon uni-icon uni-icon-compose"></view>修改
										</view>
									</view>
									<!-- 自我评价 -->
									<view class="base-info" v-if="list.id == 'selfEvaluation'">
										<view class="front-edit-line">
											本人是设计专业毕业生，熟练手绘，熟练cad,3dmax,vray,photoshop等设计软件，熟练办公软件。懂画施工图，懂一定的对装饰材料和施工方法。本人乐观开朗,积极好学,健谈,有自信,具有设计的创新思想;对待工作认真负责,细心,能够吃苦耐劳,敢于挑战,并且能够很快融于集体。我虽刚刚毕业，但我年轻，有朝气，有能力完成任何工作。尽管我还缺乏一定的经验，但我会用时间和汗水去弥补。请领导放心，我一定会保质保量完成各项工作任务。
											思想上积极要求上进，团结同学，尊敬师长，乐于助人，能吃苦耐劳，为人诚恳老实，性格开朗善于与人交际，工作上有较强的组织管理和动手能力，集体观念强，具有团队协作精神，创新意识。 </view>
										<view class="bottom-button" @click="toEdit('selfEvaluation')">
											<view class="uni-icon uni-icon uni-icon-compose"></view>修改
										</view>
									</view>
								</view>
								<!-- 未编辑过 -->
								<view class="never-edit" v-else @click="toEdit(list.id)">
									<view class="uni-icon uni-icon-plus-filled"></view>
									添加{{list.name}}
								</view>
							</view>
						</view>

					</view>
				</view>



			</view>

			<!-- 预览简历 -->
			<view v-show="webview === 1">
				<!-- <web-view :webview-styles="webviewStyles" src="https://cn.vuejs.org/"></web-view> -->
			</view>
		</view>
		<!-- 底部弹层 -->
		<uni-popup :show="showPopupBottom" :type="popType" v-on:hidePopup="hidePopup">
			<view class="jlb-popup-content" v-show="popContentType === 'sendResume'">
				<view class="login-type" @click="sendTo('qq')">
					<view class="uni-icon uni-icon-qq"></view>
					<view class="text">发送到QQ</view>
				</view>
				<view class="login-type" @click="sendTo('weixin')">
					<view class="uni-icon uni-icon-weixin"></view>
					<view class="text">发送到微信</view>
				</view>
				<view class="login-type" @click="sendTo('mail')">
					<view class="uni-icon uni-icon-email-filled"></view>
					<view class="text">发送到邮箱</view>
				</view>
			</view>
			<view class="jlb-import-resume" v-show="popContentType === 'importResume'">
				<button class="mini-btn" type="primary" size="middle" @click="importResume()">导入简历</button>
				<view class="text">
					支持导入doc/docx/pdf/html/txt格式简历，2MB以内
				</view>
			</view>
			<view class="jlb-send-item" v-show="popContentType === 'writeForm'">
				<view class="list">
					<view class="title">发件邮件</view>
					<input class="uni-input value" focus placeholder="用于接收对方回复">
				</view>
				<view class="list">
					<view class="title">收件邮箱</view>
					<input class="uni-input value" focus placeholder="简历发送到该邮箱">
				</view>
				<view class="list">
					<view class="title">邮件主题</view>
					<input class="uni-input value" focus placeholder="邮件主题">
				</view>
				<view class="list">
					<textarea class="content" placeholder="请填写邮件内容" />
					</view>
        <view class="list">
          <view class="title">简历地址：</view>
          <view class="value">http://www.baidu.com</view>
        </view>
        <view class="list">
          <view class="title">附件：</view>
          <view class="value">
            <checkbox value="cb" checked="true"/>产品经理_郭单刀_5年.pdf
          </view>
        </view>
        <view class="send-button">
          <button class="mini-btn" type="primary" size="middle" @click="(showPopupBottom = false)">发送</button>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
import uniSegmentedControl from "../../../components/uni-segmented-control.vue";
import uniFab from "../../../components/uni-fab.vue";
import uniPopup from "../../../components/uni-popup.vue";

export default {
  data() {
    return {
			list: {
				  id: "baseInfo",
				  name: "基本信息",
				  infos: true,
				  open: false
			},
			mindex: 0,
      webviewStyles: {
        progress: {
          color: "#FF3333"
        }
      },
			arr: ['一','二','三','四'],
      popContentType: "", // popup的内容
      popType: "middle",
      showPopupBottom: false,
      horizontal: "right",
      vertical: "bottom",
      direction: "horizontal",
      pattern: {
        color: "#7A7E83",
        backgroundColor: "#fff",
        selectedColor: "#007AFF",
        buttonColor: "#007AFF"
      },
      content: [
        {
          text: "下载简历",
          active: false
        },
        {
          text: "发送简历",
          active: false
        },
        {
          text: "更换模板",
          active: false
        },
        {
          text: "导入简历",
          active: false
        }
      ],
      lists: [
        {
          id: "baseInfo",
          name: "基本信息",
          infos: true,
          open: false
        },
        {
          id: "objective",
          name: "求职意向",
          infos: true,
          open: false
        },
        {
          id: "education",
          name: "教育背景",
          infos: true,
          open: false
        },
        {
          id: "experience",
          name: "工作经历",
          infos: true,
          open: false
        },
        {
          id: "practice",
          name: "实践经历",
          infos: true,
          open: false
        },
        {
          id: "project",
          name: "项目经历",
          infos: true,
          open: false
        },
        {
          id: "specialty",
          name: "技能特长",
          infos: true,
          open: false
        },
        {
          id: "selfEvaluation",
          name: "自我评价",
          infos: true,
          open: false
        }
      ],
      items: ["编辑", "预览"],
      activeColor: "#007aff",
      styleType: "button",
      isAllModuleOpen: false
    };
  },
  components: {
    uniSegmentedControl,
    uniFab,
    uniPopup
  },
  methods: {
    importResume() {
      uni.chooseImage({
        success: chooseImageRes => {
          const tempFilePaths = chooseImageRes.tempFilePaths;
          uni.uploadFile({
            url: "https://www.example.com/upload", //仅为示例，非真实的接口地址
            filePath: tempFilePaths[0],
            name: "file",
            formData: {
              user: "test"
            },
            success: uploadFileRes => {
              console.log(uploadFileRes.data);
            }
          });
        }
      });
    },
    toEditExperience(type) {
      uni.navigateTo({
        url: `/pages/component/${type}/${type}`
      });
    },
    toEdit(type) {
      if (type === "objective") {
        uni.navigateTo({
          url: "/pages/component/objective/objective"
        });
      }
      if (type === "education") {
        uni.navigateTo({
          url: "/pages/component/education/education"
        });
      }
      if (type === "baseInfo") {
        uni.navigateTo({
          url: "/pages/component/base-info/base-info"
        });
      }
      if (type === "experience") {
        uni.navigateTo({
          url: "/pages/component/work-experience/work-experience"
        });
      }
      if (type === "project") {
        uni.navigateTo({
          url: "/pages/component/project-experience/project-experience"
        });
      }
      if (type === "practice") {
        uni.navigateTo({
          url: "/pages/component/practice-experience/practice-experience"
        });
      }
      if (type === "specialty") {
        uni.navigateTo({
          url: "/pages/component/specialty/specialty"
        });
      }
      if (type === "selfEvaluation") {
        uni.navigateTo({
          url: "/pages/component/self-evaluation/self-evaluation"
        });
      }
    },
    // 切换是否预览
    onClickItem(index) {
      if (this.webview !== index) {
        uni.navigateTo({
          url:
            "/pages/component/edit-resume/edit-resume?resumeId=" +
            (this.resumeId || "") +
            "&templateId=" +
            (this.templateId || "") +
            "&webview=" +
            index
        });
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
    },
    // 添加模块
    addModule() {
      let arr = [
        {
          id: "objective",
          name: "求职意向",
          infos: null,
          open: false
        },
        {
          id: "education",
          name: "教育背景",
          infos: null,
          open: false
        },
        {
          id: "experience",
          name: "工作经历",
          infos: null,
          open: false
        },
        {
          id: "practice",
          name: "实践经历",
          infos: null,
          open: false
        },
        {
          id: "project",
          name: "项目经历",
          infos: null,
          open: false
        },
        {
          id: "specialty",
          name: "技能特长",
          infos: null,
          open: false
        },
        {
          id: "selfEvaluation",
          name: "自我评价",
          infos: null,
          open: false
        }
      ];
      let itemList = arr.map(i => {
        return i.name;
      });
      uni.showActionSheet({
        itemList: itemList,
        success: e => {
          this.lists.push(arr[e.tapIndex]);
        }
      });
    },
    // 展开模块
    openModule() {
      this.isAllModuleOpen = !this.isAllModuleOpen;
      this.lists.map(i => {
        i.open = this.isAllModuleOpen;
        return i;
      });
    },
    // 悬浮按钮菜单点击
    trigger(e) {
      console.log(e);
      if (e.item.text === "下载简历") {
        uni.showActionSheet({
          itemList: ["下载Word", "下载PDF", "下载图片"],
          success: e => {
            console.log(e.tapIndex);
            uni.showToast({
              title: "点击了第" + e.tapIndex + "个选项",
              icon: "none"
            });
          }
        });
      } else if (e.item.text === "发送简历") {
        this.showBottomPopup("sendResume");
      } else if (e.item.text === "导入简历") {
        this.showBottomPopup("importResume");
      }
    },
    // 打开底部弹层
    showBottomPopup(type) {
      this.popContentType = type;
      this.hidePopup();
      this.popType = "bottom";
      this.showPopupBottom = true;
    },
    // 关闭底部弹层
    hidePopup() {
      this.showPopupBottom = false;
    },
    // 打开发送简历菜单
    sendTo(type) {
      uni.showActionSheet({
        itemList: ["发送Word简历", "发送PDF简历", "发送在线简历"],
        success: e => {
          console.log(e);
          this.showBottomPopup("writeForm");
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
  margin-bottom: 20upx;
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

.edit-resume-wrap .uni-collapse .has-edit .base-info {
  padding: 20upx 30upx;
  color: #666;
}

.uni-collapse .has-edit .base-info .front-edit-line {
	border-bottom: 1upx solid #f0f0f0;
	margin-bottom: 10upx;
	padding-bottom: 10upx;
}
.uni-collapse .has-edit .base-info view {
  font-size: 24upx;
  line-height: 1.8;
}

.uni-collapse .has-edit .base-info .name {
  font-size: 32upx;
  font-weight: 500;
  margin-right: 10upx;
  color: #333;
}

.uni-collapse .has-edit .base-info text {
  margin: 0 10upx;
}
.uni-collapse .has-edit .base-info .experience-item {
  border-bottom: 1upx solid #f0f0f0;
  padding-bottom: 10upx;
  margin-bottom: 10upx;
}

.uni-collapse .has-edit .base-info .bottom-button {
  text-align: center;
}
.uni-collapse .has-edit .base-info .bottom-button .uni-icon {
  color: #007aff;
  font-size: 34upx;
}

.uni-collapse .has-edit .base-info .company-name {
  display: flex;
  color: #333;
  font-size: 28upx;
  font-weight: 500;
}
.uni-collapse .has-edit .base-info .job {
  font-size: 20upx;
  color: #999;
}
.uni-collapse .has-edit .base-info .company-name view {
  flex: 1;
}
.uni-collapse .has-edit .base-info .company-name view.time {
  text-align: right;
  color: #007aff;
  font-weight: 400;
  font-size: 24upx;
}
.edit-resume-wrap .icon-jia:before {
  content: "\e537";
}

.jlb-popup-content {
  /* background: #fff; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.jlb-popup-content .login-type {
  width: 180upx;
  height: 180upx;
  text-align: center;
}

.jlb-popup-content .login-type .text {
  font-size: 24upx;
  color: #666;
}

.jlb-popup-content .login-type .uni-icon {
  font-size: 88upx;
  width: 120upx;
  height: 120upx;
  line-height: 120upx;
  border-radius: 50%;
  background: #fff;
  border: 2upx solid #f0f0f0;
}

.jlb-popup-content .login-type .uni-icon-qq {
  color: #3299dc;
}

.jlb-popup-content .login-type .uni-icon-weixin {
  color: #2ca43a;
  font-size: 98upx;
}

.jlb-popup-content .login-type .uni-icon-email-filled {
  color: #da251c;
  font-size: 108upx;
}

.edit-resume-wrap .jlb-send-item {
  background: #fff;
  margin-bottom: 20upx;
  padding: 16upx 30upx;
}

.edit-resume-wrap .jlb-send-item .list {
  display: flex;
  border-bottom: 1px solid #f0f0f0;
}

.edit-resume-wrap .jlb-send-item .content {
  width: 100%;
  color: #555;
  font-size: 24upx;
  padding: 16upx 30upx;
  text-align: left;
}

.edit-resume-wrap .jlb-send-item .list .title {
  width: 20%;
  line-height: 64upx;
  color: #333;
  text-align: left;
  font-size: 24upx;
}

.edit-resume-wrap .jlb-send-item .list .value {
  width: 80%;
  text-align: left;
  line-height: 64upx;
  padding: 0;
  height: 64upx;
  color: #999;
  font-size: 24upx;
}
.jlb-import-resume {
	padding: 40upx 0;
}
.jlb-import-resume .mini-btn {
	width: 200upx;
	margin-bottom: 20upx;
}
.jlb-import-resume .text {
	color: #999;
	font-size: 24upx;
}
</style>
