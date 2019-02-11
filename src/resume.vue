<template>
	<view class="jlb-resume-wrap">
		<!-- 创建简历按钮 -->
		<view class="button-create-resume">
			<button type="primary">+创建新简历</button>
		</view>
		<!-- 简历列表 -->
		<view class="jlb-resume-list">
			<view class="jlb-resume-item" v-for="(i,index) in data" :key="index">
				<view class="resume-item-pic">
					<img :src="i.pic"></img>
				</view>
				<view class="resume-item-infos">
					<view class="title">
						{{i.name}}的简历——{{i.job}}
					</view>
					<view class="time">
						{{i.time}}
					</view>
					<view class="btns">
						<button class="mini-btn" type="primary" size="mini">编辑</button>
						<button class="mini-btn" type="primary" size="mini">预览</button>
						<button class="mini-btn" type="primary" size="mini">删除</button>
					</view>
				</view>
			</view>
			<!-- 加载更多文字提示 -->
			<view class="jlb-loadmore" v-if="showLoadMore">{{loadMoreText}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: [],
				loadMoreText: "加载中...",
				showLoadMore: false,
				max: 0
			}
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
			// 初始化数据
			initData() {
				setTimeout(() => {
					this.max = 0;
					this.data = [];
					let data = [];
					this.max += 10;
					for (var i = this.max - 9; i < this.max + 1; i++) {
						data.push({
							name: '郭帅' + i,
							time: i + '个月',
							job: '产品经理',
							pic: 'http://pic1.win4000.com/pic/a/87/2c524787cb.jpg'
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
						name: '郭帅' + i,
						time: i + '个月',
						job: '产品经理',
						pic: 'http://pic1.win4000.com/pic/a/87/2c524787cb.jpg'
					})
				}
				this.data = this.data.concat(data);
			}
		}
	}
</script>

<style>
	.jlb-resume-wrap {
		background: #f0f0f0;
	}

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
	}

	.jlb-resume-list .jlb-loadmore {
		text-align: center;
		line-height: 120upx;
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
	}

	.resume-item-infos .btns button {
		margin-right: 20upx;
	}
</style>
