<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<uni-segmented-control :current="current" :values="items" v-on:clickItem="onClickItem" :styleType="styleType"
			 :activeColor="activeColor"></uni-segmented-control>
			<view class="uni-icon uni-icon-more"></view>
		</view>
		<view class="content">
			<!-- 编辑简历 -->
			<view v-show="current === 0">
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
							<view class="uni-list-cell-navigate" hover-class="uni-list-cell-hover" :class="[list.open ? 'uni-active' : '']">
								<!-- 标题部分 -->
								<view class="list-title" @click="triggerCollapse(index)">
									<view class="title uni-icon" :class="list.open ? 'icon-arrowdown' : 'icon-arrowright'">{{list.name}}</view>
								</view>
								<!-- 删除按钮 -->
								<view v-if="index !== 0" @click="deleteModule(list, index)" class="uni-icon" :class="[list.open ? 'uni-navigate-bottom' : 'uni-navigate-right']"></view>
							</view>
							<!-- 模块展开内容 -->
							<view class="uni-list uni-collapse" :class="list.open ? 'uni-active' : ''">详细</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 预览简历 -->
			<view v-show="current === 1">这是一个webview</view>
		</view>
	</view>
</template>

<script>
	import uniSegmentedControl from "../../../components/uni-segmented-control.vue";

	export default {
		data() {
			return {
				lists: [{
						id: "navbar",
						name: "基本信息",
						open: false
					},
					{
						id: "navbar",
						name: "求职意向",
						open: false
					},
					{
						id: "navbar",
						name: "教育背景",
						open: false
					},
					{
						id: "navbar",
						name: "工作经历",
						open: false
					},
					{
						id: "navbar",
						name: "实践经历",
						open: false
					},
					{
						id: "navbar",
						name: "项目经历",
						open: false
					},
					{
						id: "navbar",
						name: "技能特长",
						open: false
					},
					{
						id: "navbar",
						name: "自我评价",
						open: false
					}
				],
				items: ["编辑", "预览"],
				current: 0,
				activeColor: "#007aff",
				styleType: "button"
			};
		},
		components: {
			uniSegmentedControl
		},
		methods: {
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			},
			triggerCollapse(e) {
				for (var i = 0; i < this.lists.length; ++i) {
					if (e === i) {
						this.lists[i].open = !this.lists[e].open;
					} else {
						this.lists[i].open = false;
					}
				}
			},
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
		}
	};
</script>

<style>
	.uni-padding-wrap {
		position: relative;
	}

	.uni-padding-wrap .uni-icon {
		position: absolute;
		right: 10upx;
		font-size: 60upx;
		top: 0;
		bottom: 0;
		text-align: center;
		transform: rotate(90deg);
		background: #d2e7fd75;
		color: #007aff;
		border-radius: 50%;
	}

	.content .add-open {
		display: flex;
	}

	.content .add-open .mini-btn {
		flex: 1;
		background: #f0f0f0;
		color: #666;
		border-radius: 0;
		font-size: 30upx;
		margin-top: 10upx;
	}

	.content .add-open .mini-btn::after {
		border: none;
		border-radius: 0;
		border-right: 1px solid #ccc;
	}

	.uni-card {
		box-shadow: none;
	}

	.uni-list:after {
		height: 0;
	}

	.uni-list-cell-navigate .uni-navigate-bottom:after,
	.uni-list-cell-navigate .uni-navigate-right:after {
		content: "\E401";
		font-size: 48upx;
	}

	.uni-list-cell-navigate.uni-active {
		background: #fff;
		border-bottom: 1upx solid #eee;
	}

	.uni-list-cell-navigate .list-title {
		display: flex;
		color: #666;
	}

	.list-title .title {
		font-size: 30upx;
	}

	.list-title .icon-arrowdown:after {
		content: "\E581";
		font-size: 30upx;
	}

	.list-title .icon-arrowright:after {
		content: "\E583";
		font-size: 30upx;
	}

	.uni-list:before {
		height: 0;
	}

	.uni-hello-text {
		word-break: break-all;
	}
</style>
