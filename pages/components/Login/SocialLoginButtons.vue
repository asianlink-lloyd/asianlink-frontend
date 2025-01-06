<template>
  <view class="social-buttons">
    <button class="social-button google"><image src="@/static/search.png" />Continue with Google</button>
    <button class="social-button facebook"><image src="@/static/facebook.png" />Continue with Facebook</button>
    <button class="social-button tiktok"><image src="@/static/tik-tok.png" />Continue with TikTok</button>
  </view>
</template>

<script>
export default {
  name: 'SocialLoginButtons'
};
</script>

<style scoped>
.social-buttons {
	display: flex;
	flex-direction: column;
	gap: 12px;
}
.social-button {
	display: flex;
	gap: 30px;
	font-size: 16px;
	display: flex;
	align-items: center;
	height: 60px;
	width: 100%;
	padding: 0 20px;
	text-align: start;
	background-color: #ffffff;
	border-radius: 12px;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); /* Drop shadow added */
}
image {
	width: 20px;
	height: 20px;
}
</style>
