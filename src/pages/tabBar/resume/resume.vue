<template>
	<view class="jlb-resume-wrap">
		<!-- 创建简历按钮 -->
		<view class="button-create-resume">
			<button type="primary" @click="navigateTo()">+创建新简历</button>
		</view>
		<!-- 简历列表 -->
		<view class="jlb-resume-list">
			<!-- 已登录但是没有简历 -->
			<view v-if="!data.length" class="jlb-resume-never">
				——还没有创建简历——
			</view>
			<!-- 未登录 -->
			<view v-if="!isLogin" class="jlb-resume-login">
				——登录后查看简历——<br />
				<button class="mini-btn" type="primary" size="mini" @click="toLogin">登录/注册</button>
			</view>
			<view v-if="isLogin" class="jlb-resume-item" v-for="(i,index) in data" :key="index">
				<view class="resume-item-pic">
					<img :src="i.pic"></img>
				</view>
				<view class="resume-item-infos">
					<view class="title">
						{{i.name}}——{{i.job}}
					</view>
					<view class="time">
						{{i.time}}
					</view>
					<view class="btns">
						<button class="mini-btn" type="primary" size="mini" @click="toEditResume(i, index)">编辑</button>
						<button class="mini-btn" type="primary" size="mini" @click="toPreViewResume(i, index)">预览</button>
						<view class="uni-icon uni-icon-trash" @click="deleteResume(i, index)"></view>
					</view>
				</view>
				<!-- 侧滑删除在微信小程序上点击事件失效 失效原因未知 -->
				<!-- <uni-drawer :visible="visibleDrawer === index" mode="right">
					<view class="delete-btns">
						<input type="text" value="" />
						<button class="mini-btn" type="warn" size="mini" :loading="isDeleting" @click="deleteResume(i, index)">删除</button>
						<button class="mini-btn" type="primary" size="mini" @click="visibleDrawer = ''">取消</button>
					</view>
				</uni-drawer> -->
			</view>
			<!-- 加载更多文字提示 -->
			<view class="jlb-loadmore" v-if="showLoadMore">{{loadMoreText}}</view>
		</view>
	</view>
</template>

<script>
	import uniDrawer from '../../../components/uni-drawer.vue';
	export default {
		data() {
			return {
				data: [], // 简历列表
				isLogin: true, // 是否登录
				isDeleting: false, // 是否正在删除简历
				visibleDrawer: '', // 被操作简历索引
				loadMoreText: "加载中...",
				showLoadMore: false,
				max: 0
			}
		},
		components: {
			uniDrawer
		},
		onLoad() {
			this.initData();
		},
		onUnload() {
			this.max = 0,
				this.data = [],
				this.loadMoreText = "加载更多",
				this.showLoadMore = false;
		},
		onReachBottom() {
			console.log("onReachBottom");
			if (this.max > 40) {
				this.loadMoreText = "没有更多数据了!"
				return;
			}
			this.showLoadMore = true;
			setTimeout(() => {
				this.setDate();
			}, 300);
		},
		onPullDownRefresh() {
			console.log('onPullDownRefresh');
			this.initData();
		},
		methods: {
			toLogin() {
				uni.navigateTo({
					url: "/pages/component/login/login"
				})
			},
			navigateTo() {
				uni.navigateTo({
					url: '/pages/component/select-template/select-template'
				})
			},
			// 初始化数据
			initData() {
				setTimeout(() => {
					this.max = 0;
					this.data = [];
					let data = [];
					this.max += 10;
					for (var i = this.max - 9; i < this.max + 1; i++) {
						data.push({
							name: '郭帅的简历' + i,
							time: i + '个月',
							job: '产品经理',
							pic: i / 3 === parseInt(i / 3) ? 'http://pic1.win4000.com/pic/a/87/7a5266f550.jpg' : 'http://pic1.win4000.com/pic/d/b6/0b8b162c13.jpg'
						})
					}
					this.data = this.data.concat(data);
					uni.stopPullDownRefresh();
				}, 300);
			},
			// 上拉刷新数据
			setDate() {
				let data = [];
				this.max += 10;
				for (var i = this.max - 9; i < this.max + 1; i++) {
					data.push({
						name: '郭帅的简历' + i,
						time: i + '个月',
						job: '产品经理',
						pic: i / 3 === parseInt(i / 3) ? 'http://pic1.win4000.com/pic/a/87/7a5266f550.jpg' : 'http://pic1.win4000.com/pic/d/b6/0b8b162c13.jpg'
					})
				}
				this.data = this.data.concat(data);
			},
			// 编辑简历
			toEditResume(i, index) {
				uni.navigateTo({
					url: '/pages/component/edit-resume/edit-resume?resumeId=' + index + '&webview=0'
				})
			},
			// 预览简历
			toPreViewResume(i, index) {
				uni.navigateTo({
					url: '/pages/component/edit-resume/edit-resume?resumeId=' + index + '&webview=1'
				})
			},
			// 删除简历
			deleteResume(i, index) {
				console.log(i)
				uni.showModal({
					content: '确定要删除该' + i.name + '吗？',
					success: res => {
						if (res.confirm) {
							this.isDeleting = true;
							setTimeout(() => {
								this.data.splice(index, 1)
								uni.showToast({
									title: '删除成功',
									icon: 'success',
									duration: 2000
								});
								this.isDeleting = false;
								this.visibleDrawer = ''
							}, 300)
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});

			}
		}
	}
</script>

<style>
	.jlb-resume-wrap .button-create-resume {
		padding: 50upx 100upx;
	}

	.jlb-resume-wrap .jlb-resume-list {
		font-size: 24upx;
	}

	.jlb-resume-list .jlb-resume-item {
		background: #fff;
		margin: 16upx 0;
		background-color: #fff;
		color: #555;
		border-radius: 8upx;
		padding: 20upx;
		display: flex;
		position: relative;
	}

	.jlb-resume-list .jlb-resume-never {
		line-height: 200px;
		text-align: center;
		color: #999999;
	}

	.jlb-resume-list .jlb-resume-login {
		color: #999999;
		text-align: center;
		line-height: 78upx;
		padding-top: 300upx;
	}

	.jlb-resume-list .jlb-loadmore {
		text-align: center;
		line-height: 120upx;
		color: #999999;
	}

	.jlb-resume-item .delete-btns {
		padding: 18px;
		display: flex;
		align-self: center;
		/* display: inline-block; */
		/* height: 80%; */
		flex-wrap: wrap;
	}

	.delete-btns uni-button[type=warn] {
		margin-bottom: 20upx;
	}

	.jlb-resume-item .resume-item-pic {
		width: 260upx;
		height: 160upx;
		box-sizing: content-box;
		overflow: hidden;
	}

	.resume-item-pic img {
		display: block;
		width: 100%;
	}

	.jlb-resume-item .resume-item-infos {
		flex-grow: 1;
		padding-left: 20upx;
	}

	.resume-item-infos .title {
		font-size: 30upx;
		font-weight: 500;
		height: 50upx
	}

	.resume-item-infos .time {
		height: 50upx;
		color: #999;
	}

	.resume-item-infos .btns button {
		margin-right: 20upx;
		vertical-align: middle;
	}

	.resume-item-infos .btns .uni-icon {
		vertical-align: middle;
		float: right;
	}
</style>
