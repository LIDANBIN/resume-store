<template>
	<view class="select-template-wrap">
		<view class="template-list-wrap">
			<view class="template-item" v-for="(i, index) in resumeTemplates" :key="index">
				<view class="image">
					<view v-show="templateId == index" class="uni-icon uni-icon-checkbox-filled"></view>
					<image class="pic" mode="widthFix" :src="i.pic" @click="selectTemplate(index)"></image>
				</view>
			</view>
		</view>
		<view class="use-template" @click="toEditResume" v-if="isPage">
			<button class="mini-btn" type="primary" size="middle">开始制作简历</button>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		props: {
			isPage: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				templateId: 0 // 选择的模板ID
			}
		},
		methods: {
			toEditResume() {
				uni.redirectTo({
					url: '/pages/component/edit-resume/edit-resume?templateId=' + this.templateId + '&webview=0'
				})
			},
			selectTemplate(index) {
				this.templateId = index;
			}
		},
		computed: {
			...mapState(['resumeTemplates'])
		}
	}
</script>

<style>
	.select-template-wrap .use-template {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.select-template-wrap .use-template .mini-btn {
		border-radius: 0;
	}

	.template-list-wrap {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 0 30upx 30upx 0;
	}

	.template-list-wrap .template-item {
		width: 50%;
		box-sizing: border-box;
		padding: 30upx 0 0 30upx;
	}

	.template-item .image {
		width: 100%;
		height: 400upx;
		overflow: hidden;
		position: relative;
	}

	.template-item .image .uni-icon {
		text-align: left;
		position: absolute;
		color: #67C23A;
		top: 0;
		bottom: 0;
		width: 100%;
		background-color: rgba(255, 255, 255, .7);
		z-index: 2;
	}

	.template-item .pic {
		width: 100%;
	}
</style>
