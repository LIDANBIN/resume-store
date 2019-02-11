<template>
	<view class="template-detail-wrap">
		<view class="toggle-wrap">
			<view class="uni-icon uni-icon-arrowleft" @click="turnLeft"></view>
			<button class="mini-btn" type="primary" size="middle" @tab="toEditResume">+使用此模版</button>
			<view class="uni-icon uni-icon-arrowright" @click="turnRight"></view>
		</view>
		<image style="width: 100%; height: 680px;" mode="aspectFill" :src="resumeTemplates[templateId].pic"></image>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		methods: {
			toEditResume() {
				console.log(this)
				uni.navigateTo({
					url: '/pages/component/edit-resume/edit-resume?templateId=' + this.templateId
				})
			},
			turnLeft() {
				console.log(this.frontTemplateId)
				uni.navigateTo({
					url: '/pages/component/template-detail/template-detail?templateId=' + this.frontTemplateId
				})
			},
			turnRight() {
				console.log(this.nextTemplateId)
				uni.navigateTo({
					url: '/pages/component/template-detail/template-detail?templateId=' + this.nextTemplateId
				})
			}
		},
		computed: {
			...mapState(['resumeTemplates']),
			templateId() {
				let pages = getCurrentPages() //获取加载的页面
				let currentPage = pages[pages.length - 1] //获取当前页面的对象
				let url = currentPage.route //当前页面url
				let options = currentPage.options //如果要获取url中所带的参数可以查看options
				let route = (this.$route && this.$route.query) || options
				return +route.templateId
			},
			nextTemplateId() {
				if (this.templateId === (this.resumeTemplates.length - 1)) {
					return 0
				} else {
					return this.templateId + 1
				}
			},
			frontTemplateId() {
				if (this.templateId === 0) {
					return this.resumeTemplates.length - 1
				} else {
					return this.templateId - 1
				}
			}
		}
	}
</script>

<style>
	.template-detail-wrap {
		width: 100%;
	}

	.template-detail-wrap .toggle-wrap {
		display: flex;
		line-height: 80upx;
		height: 80upx;
		padding: 20upx;
		background: #f0f0f0;
	}

	.toggle-wrap .uni-icon {
		line-height: 80upx;
		color: #fff;
		font-size: 42px;
	}

	.toggle-wrap .mini-btn {
		line-height: 80upx;
	}
</style>
