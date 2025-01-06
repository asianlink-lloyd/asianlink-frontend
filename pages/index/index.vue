<template>
	<view class="container">
		<view class="content">
			<view class="img-container">
				<image class="logo" src="/static/Illustration.png"></image>
			</view>
			<view class="text-content">
				<text class="title">{{title}}</text>
				<text class="tagline">{{ tagline }}</text>
			</view>
		</view>
		<view class="btn-container">
			<button class="primary-btn" @click="goToAbout">Let’s Get Started</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Welcome to asianlink.ai',
				tagline: "Your connect to News, Public Service & E-Commerce!"	
			}
		},
		onLoad() {

		},
		methods: {
			goToAbout() {
				uni.navigateTo({
					url: '/pages/login/login'
				});
			}
		}
	}
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 20px;
		gap: 40px;
		min-height: 100vh;
		background-color: #F8F8F8;	
	}
	.primary-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 62px;
		width: 100%;
		font-size: 20px;
		color: #fff;
		background-color: #000080;
		border-radius: 50px;
	}
	.content {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	.img-container {
		display: flex;
		justify-content: center;
	}
	.btn-container {
		width: 100%;
	}
	.text-content {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	.title, .tagline {
		text-align: center;
	}
	.title {
		font-size: 30px;
		font-weight: bold;
	}
	
</style>

