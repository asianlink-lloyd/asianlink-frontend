<template>
	<view class="container" v-if="isVisible">
		<image src="@/static/Illustration1.png" mode="aspectFill" />
		<text>Coming Soon</text>
		<view class="btn-container" @click="closePrompt">
			Close
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isVisible: true,
			}
		},
		methods: {
			closePrompt() {
				this.isVisible = false;
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
		min-height: 100vh;

		padding: 0 20px 109px 20px;
		
	}
	.container image{
		width: 250px;
		height: 214px;
		margin-bottom: 20px;
	}
	.container text {
		font-size: 30px;
		font-weight: 500;
		margin-bottom: 40px;
	}
	.btn-container {
		background-color: navy;
		padding: 16px 80px;
		border-radius: 50px;
		color: #ffffff;
		font-size: 20px;
	}
</style>