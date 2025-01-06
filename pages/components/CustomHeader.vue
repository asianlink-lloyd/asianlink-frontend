<template>
  <view class="custom-header">
    <view class="header-left" @click="goBack">
      <text> < </text> <!-- You can replace this with an icon if preferred -->
    </view>
    <view class="header-title">
      <image src="../../static/asianlinkAI_FINAL APPROVED.png" mode=""></image>
    </view>
    <view class="header-right" @click="onSettings">
      <image src="../../static/moon-02.svg" mode=""></image> <!-- Replace with an icon or other functionality -->
    </view>
  </view>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Custom Header'
    }
  },
  methods: {
    goBack() {
      uni.navigateBack(); // Go back to the previous page
    },
    onSettings() {
      // Add any settings functionality here
      console.log("Settings clicked");
    }
  }
};
</script>

<style scoped>
.custom-header {
	width: 100%;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 49px 20px 20px 20px;
	z-index: 50;
	background-color: #F8F8F8;	
}
.header-right {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 38px;
	width: 38px;
	background-color: #ffffff;
	border: 1px solid rgba(160, 165, 175, 0.2); /* 20% opacity */
	border-radius: 80px;
}
.header-left {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 38px;
	width: 38px;
	background-color: #ffffff;
	border-radius: 80px;	
}
.header-right image {
	width: 14px;
	height: 14px;
}
.header-title image {
	height: 28px;
	width: 172px;
}

</style>
