<template>
	<view class="profile-container">
		<view class="img-profile-container">
			<view class="img-container">
			</view>
			<view class="text-container">
				<text class="text-name">{{ userName }}</text>
				<text class="text-date">{{ formattedDate }}</text>
			</view>	
		</view>
		<view class="btn-container">
			<view class="profile-btn">
				<image src="@/static/bubble-chat-translate.png" mode=""></image>	
			</view>	
			<view class="profile-btn">
				<image src="@/static/moon-02.png" mode=""></image>	
			</view>
			<view class="profile-btn">
				<image src="@/static/moon-02.png" mode=""></image>	
			</view>
		</view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName: '',
				formattedDate: '',
			}
		},
		methods: {
			getFormattedDate() {
				const date = new Date();
				const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
				const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
				
				const day = days[date.getDay()];
				const month = months[date.getMonth()];
				const dayNumber = date.getDate();
				
				return `${day}, ${month} ${dayNumber}`;
			},
		},
		mounted() {
			this.userName = uni.getStorageSync("userName") || "Guest";
			this.formattedDate = this.getFormattedDate();
		}
	}
</script>

<style>
	.profile-container{
		display: flex;
		justify-content: space-between;
		
	}
	.img-profile-container {
		display: flex;
		align-items: center;
		gap: 4px;
	}
	.img-container {
		width: 30px;
		height: 30px;
		background-image: url('@/static/UntitledDesign.png');
		background-size: cover;
		border-radius: 50%;
	}
	.text-container {
		display: flex;
		flex-direction: column;
	}
	.text-name {
		font-weight: 500;
		font-size: 16px;
		line-height: 1em;
	}
	.text-date {
		font-size: 13px;
		line-height: 1em;
		color: #A0A5AF;
	}
	.btn-container {
		display: flex;
		gap: 7px;
		
	}
	.profile-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 38px;
		width: 38px;
		padding: 12px;
		background-color: #ffffff;
		border: 1px solid rgba(160, 165, 175, 0.2); /* 20% opacity */
		border-radius: 50%;

	}
	.profile-btn image {
		width: 100%;
		height: 100%;
	}

</style>