<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<uni-segmented-control :current="current" :values="items" v-on:clickItem="onClickItem" :styleType="styleType"
			 :activeColor="activeColor"></uni-segmented-control>
		</view>
		<view class="content">
			<view v-show="current === 0">
				<view class="uni-card" v-for="(list,index) in lists" :key="index">
					<view class="uni-list">
						<view class="uni-list-cell uni-collapse">
							<view class="uni-list-cell-navigate" hover-class="uni-list-cell-hover" :class="[list.open ? 'uni-active' : '',list.pages ? 'uni-navigate-bottom' : 'uni-navigate-right']">
								<view class="list-title" @click="triggerCollapse(index)">
									<view class="title">
										{{list.name}}
									</view>
									<view class="uni-icon" :class="list.open ? 'uni-icon-arrowdown' : 'uni-icon-arrowright'"></view>
								</view>
							</view>
							<view class="uni-list uni-collapse" v-if="list.pages" :class="list.open ? 'uni-active' : ''">
								详细
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-show="current === 1">
				这是一个webview
			</view>
		</view>
	</view>
</template>

<script>
	import uniSegmentedControl from '../../../components/uni-segmented-control.vue';

	export default {
		data() {
			return {
				lists: [{
						id: 'navbar',
						name: '基本信息',
						open: false,
						pages: [
							{
								name: '默认样式',
								url: 'nav-default'
							},
							{
								name: '透明渐变样式',
								url: 'nav-transparent'
							}, {
								name: '导航栏带自定义按钮',
								url: 'nav-button'
							},
							{
								name: '导航栏带图片',
								url: 'nav-image'
							},
							{
								name: '导航栏带红点和角标',
								url: 'nav-dot'
							},
							{
								name: '导航栏带城市选择',
								url: 'nav-city-dropdown'
							},
							{
								name: '自定义导航栏组件(非原生)',
								url: 'nav-bar'
							}
						]
					},
					{
						id: 'navbar',
						name: '求职意向',
						open: false,
						pages: [
							{
								name: '默认样式',
								url: 'nav-default'
							},
							{
								name: '透明渐变样式',
								url: 'nav-transparent'
							}, {
								name: '导航栏带自定义按钮',
								url: 'nav-button'
							},
							{
								name: '导航栏带图片',
								url: 'nav-image'
							},
							{
								name: '导航栏带红点和角标',
								url: 'nav-dot'
							},
							{
								name: '导航栏带城市选择',
								url: 'nav-city-dropdown'
							},
							{
								name: '自定义导航栏组件(非原生)',
								url: 'nav-bar'
							}
						]
					},
					{
						id: 'navbar',
						name: '教育背景',
						open: false,
						pages: [
							{
								name: '默认样式',
								url: 'nav-default'
							},
							{
								name: '透明渐变样式',
								url: 'nav-transparent'
							}, {
								name: '导航栏带自定义按钮',
								url: 'nav-button'
							},
							{
								name: '导航栏带图片',
								url: 'nav-image'
							},
							{
								name: '导航栏带红点和角标',
								url: 'nav-dot'
							},
							{
								name: '导航栏带城市选择',
								url: 'nav-city-dropdown'
							},
							{
								name: '自定义导航栏组件(非原生)',
								url: 'nav-bar'
							}
						]
					},
					{
						id: 'navbar',
						name: '工作经历',
						open: false,
						pages: [
							{
								name: '默认样式',
								url: 'nav-default'
							},
							{
								name: '透明渐变样式',
								url: 'nav-transparent'
							}, {
								name: '导航栏带自定义按钮',
								url: 'nav-button'
							},
							{
								name: '导航栏带图片',
								url: 'nav-image'
							},
							{
								name: '导航栏带红点和角标',
								url: 'nav-dot'
							},
							{
								name: '导航栏带城市选择',
								url: 'nav-city-dropdown'
							},
							{
								name: '自定义导航栏组件(非原生)',
								url: 'nav-bar'
							}
						]
					},
					{
						id: 'navbar',
						name: '实践经历',
						open: false,
						pages: [
							{
								name: '默认样式',
								url: 'nav-default'
							},
							{
								name: '透明渐变样式',
								url: 'nav-transparent'
							}, {
								name: '导航栏带自定义按钮',
								url: 'nav-button'
							},
							{
								name: '导航栏带图片',
								url: 'nav-image'
							},
							{
								name: '导航栏带红点和角标',
								url: 'nav-dot'
							},
							{
								name: '导航栏带城市选择',
								url: 'nav-city-dropdown'
							},
							{
								name: '自定义导航栏组件(非原生)',
								url: 'nav-bar'
							}
						]
					},
					{
						id: 'navbar',
						name: '项目经历',
						open: false,
						pages: [
							{
								name: '默认样式',
								url: 'nav-default'
							},
							{
								name: '透明渐变样式',
								url: 'nav-transparent'
							}, {
								name: '导航栏带自定义按钮',
								url: 'nav-button'
							},
							{
								name: '导航栏带图片',
								url: 'nav-image'
							},
							{
								name: '导航栏带红点和角标',
								url: 'nav-dot'
							},
							{
								name: '导航栏带城市选择',
								url: 'nav-city-dropdown'
							},
							{
								name: '自定义导航栏组件(非原生)',
								url: 'nav-bar'
							}
						]
					},
					{
						id: 'navbar',
						name: '技能特长',
						open: false,
						pages: [
							{
								name: '默认样式',
								url: 'nav-default'
							},
							{
								name: '透明渐变样式',
								url: 'nav-transparent'
							}, {
								name: '导航栏带自定义按钮',
								url: 'nav-button'
							},
							{
								name: '导航栏带图片',
								url: 'nav-image'
							},
							{
								name: '导航栏带红点和角标',
								url: 'nav-dot'
							},
							{
								name: '导航栏带城市选择',
								url: 'nav-city-dropdown'
							},
							{
								name: '自定义导航栏组件(非原生)',
								url: 'nav-bar'
							}
						]
					},
					{
						id: 'navbar',
						name: '自我评价',
						open: false,
						pages: [
							{
								name: '默认样式',
								url: 'nav-default'
							},
							{
								name: '透明渐变样式',
								url: 'nav-transparent'
							}, {
								name: '导航栏带自定义按钮',
								url: 'nav-button'
							},
							{
								name: '导航栏带图片',
								url: 'nav-image'
							},
							{
								name: '导航栏带红点和角标',
								url: 'nav-dot'
							},
							{
								name: '导航栏带城市选择',
								url: 'nav-city-dropdown'
							},
							{
								name: '自定义导航栏组件(非原生)',
								url: 'nav-bar'
							}
						]
					},
				],
				items: [
					'编辑',
					'预览'
				],
				current: 0,
				activeColor: '#007aff',
				styleType: 'button'
			}
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
				if (!this.lists[e].pages) {
					this.goDetailPage(this.lists[e].url);
					return;
				}
				for (var i = 0; i < this.lists.length; ++i) {
					if (e === i) {
						this.lists[i].open = !this.lists[e].open;
					} else {
						this.lists[i].open = false;
					}
				}
			}
		}
	}
</script>

<style>

	.uni-card {
		box-shadow: none;
	}

	.uni-list:after {
		height: 0;
	}

	.uni-list-cell-navigate.uni-navigate-bottom:after {
		content: '\E401';
		font-size: 48upx;
	}

	.uni-list-cell-navigate .list-title {
		display: flex;
		color: #666;
	}
	
	.list-title .title {
		font-size: 30upx;
	}

	.list-title .uni-icon {
		line-height: 1.8;
		font-size: 30upx;
	}

	.uni-list:before {
		height: 0;
	}

	.uni-hello-text {
		word-break: break-all;
	}
</style>
