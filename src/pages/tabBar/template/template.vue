<template>
	<view class="template-list-wrap">
		<view class="template-item" v-for="(i, index) in resumeTemplates" :key="index">
			<view class="image">
				<image class="pic" mode="widthFix" :src="i.pic" @click="navigateTo(index)"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {}
		},
		methods: {
			navigateTo(index) {
				uni.navigateTo({
					url: '/pages/component/template-detail/template-detail?templateId=' + index
				})
			},
		},
		computed: {
			...mapState(['resumeTemplates'])
		}
	}
</script>

<style>
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
	}

	.template-item .pic {
		width: 100%;
	}
</style>
