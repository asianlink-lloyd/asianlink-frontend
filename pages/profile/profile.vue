<template>
	<view class="container">
		<CustomHeaderMainVue />
		<view class="header">
			<ProfileVue />	
			<SearchVue />
		</view>
		<view class="profile-header-container">
			<image src="@/static/UntitledDesign.png" mode="aspectFill" />
			<text>{{ userName }}</text>
		</view>
		<view class="button-container">
			<view v-for="(button, index) in profileButtons" :key="index" class="button" @click="navigateToRoute(button.route)">
				<image :src="button.icon" mode="" />
				<text>{{ button.label }}</text>
			</view>	
			<view class="logout-btn" @click="handleLogout">
				Log Out
			</view>
		</view>
		<view class="navtab">
			<BottomNavigationTabVue />
		</view>
	</view>
</template>

<script>
	import CustomHeaderMainVue from '../components/CustomHeaderMain.vue';
	import ProfileVue from '../components/Profile.vue';
	import SearchVue from '../components/Search.vue';
	import AccountIcon from '../../static/user.png';
	import NotificationIcon from '../../static/notification-02.png'
	import HelpIcon from '../../static/help-circle.png'
	import AlerIcon from '../../static/alert-02.png'
	import BlockIcon from '../../static/unavailable.png'
	import BottomNavigationTabVue from '../components/BottomNavigationTab.vue';
	
	export default {
		components: {
			CustomHeaderMainVue,
			ProfileVue,
			SearchVue,
			BottomNavigationTabVue
		},
		data() {
			return {
				userName: '',
				profileButtons : [
					{ icon: AccountIcon, label: 'Account', route: '/pages/profile/details' },
					{ icon: NotificationIcon, label: 'Notification', route: '/pages/profile/details' },
					{ icon: HelpIcon, label: 'Help and Feedback', route: '/pages/profile/details' },
					{ icon: AlerIcon, label: 'Report List', route: '/pages/profile/details' },
					{ icon: BlockIcon, label: 'Block List', route: '/pages/profile/details' },
				]
			}
		},
		methods: {
			navigateToRoute(route) {
				uni.navigateTo({
					url: route,	
				})
			},
			handleLogout() {
				// Clear stored token and user data
				uni.removeStorageSync("jwt_token");
				uni.removeStorageSync("userName");
				uni.removeStorageSync("phoneNumber");
				uni.removeStorageSync("email");
				uni.removeStorageSync("birthday");
				uni.removeStorageSync("province");
				
				uni.showToast({
					title: 'Logged out successfully!',
					icon: 'none',
				});
				
				// Redirect to login or index page
				      setTimeout(() => {
				        uni.reLaunch({
				        url: "/pages/index/index", // Replace with your login/index page route
					});
				}, 1000);
			}
		},
		mounted() {
			this.userName = uni.getStorageSync("userName") || "Guest";
		}
	}
	
</script>

<style scoped>
	.container {
		position: relative;
		min-height: 100vh;
		background-color: #F8F8F8;	
		padding: 0 20px 89px 20px;
	}
	.header {
		padding: 95px 0 20px 0;
		display: flex;
		flex-direction: column;
		gap: 8px;
		width: 100%;
	}
	.profile-header-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		margin-top: 20px;
	}
	.profile-header-container image {
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}
	.profile-header-container text {
		font-size: 16px;
		font-weight: 500;
	}
	.button-container {
		display: flex;
		flex-direction: column;
	}
	.button {
		display: flex;
		align-items: center;
		color: #A0A5AF;
		font-size: 20px;
		gap: 20px;
		padding: 20px;
		border-bottom: 1px solid #A0A5AF;
	}
	.button image {
		height: 20px;
		width: 20px;
	}
	.logout-btn {
		font-size: 20px;
		color: #A0A5AF;
		text-align: center;
		margin: 20px 0;
	}
	
</style>