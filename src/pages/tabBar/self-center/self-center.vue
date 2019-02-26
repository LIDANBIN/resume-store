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
		<view class="detail-info-wrap" v-if="isLogin">
			<block v-for="(list,index) in lists" :key="index">
				<view class="uni-list-cell uni-collapse">
					<view class="uni-list-cell-navigate uni-navigate-bottom" :class="list.show ? 'uni-active' : ''" @click="trigerCollapse(list)">
						{{list.title}}
					</view>
					<view class="uni-collapse-content" :class="list.show ? 'uni-active' : ''">
						<view v-if="list.type === 'loadRecord'">

						</view>
						<view v-if="list.type === 'sendRecord'">

						</view>
						<view v-if="list.type === 'recharge'">
						
						</view>
						<view v-if="list.type === 'upgrade'">

						</view>
						<view v-if="list.type === 'update'">
							
						</view>
					</view>
				</view>
			</block>
		</view>
		<!-- 退出登录 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists: [{
						title: "下载记录",
						type: 'loadRecord',
						path: '/pages/component/load-record/load-record',
						show: false
					},
					{
						title: "发送记录",
						type: 'sendRecord',
						path: '/pages/component/send-record/send-record',
						show: false
					},
					{
						title: "充值记录",
						type: 'recharge',
						path: '/pages/component/recharge/recharge',
						show: false
					},
					{
						title: "升级VIP",
						type: 'upgrade',
						path: '/pages/component/upgrade/upgrade',
						show: false
					},
					{
						title: "版本更新",
						type: 'update',
						path: '/pages/component/update/update',
						show: false
					}
				],
				isLogin: true // 是否登录
			};
		},
		methods: {
			toLogin() {
				uni.navigateTo({
					url: "/pages/component/login/login"
				})
			},
			trigerCollapse(e) {
				uni.navigateTo({
					url: e.path
				})
			    // for (let i = 0, len = this.lists.length; i < len; ++i) {
			    //     if (e === i) {
			    //         this.lists[i].show = !this.lists[i].show;
			    //     } else {
			    //         this.lists[i].show = false;
			    //     }
			    // }
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

	.self-center-wrap .uni-list-cell-navigate.uni-navigate-bottom:after {
		content: '\e583';
	}
	.self-center-wrap .uni-list-cell-navigate {
		color: #555;
		font-size: 28upx;
	}
</style>
