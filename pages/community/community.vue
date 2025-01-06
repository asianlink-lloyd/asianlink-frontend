<template>
	<view class="container">
		<CustomHeaderMainVue />
		<view class="header">
			<ProfileVue />	
			<SearchVue />
		</view>	
		<view class="navbar">
			<CommunityTabVue />
		</view>	
		<view class="reels">
			<ReelsVue />
			<PostVue />	
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
	import CommunityTabVue from '../components/community/CommunityTab.vue';
	import ReelsVue from '../components/ecommerce/Reels.vue';
	import BottomNavigationTabVue from '../components/BottomNavigationTab.vue';
	import PostVue from '../components/community/post.vue';
	
	export default {
		components: {
			CustomHeaderMainVue,
			ProfileVue,
			SearchVue,
			CommunityTabVue,
			ReelsVue,
			BottomNavigationTabVue,
			PostVue
		}	
	}
</script>

<style scoped>
	.container {
		position: relative;
		min-height: 100vh;
		background-color: #F8F8F8;	
		padding: 0 20px 109px 20px;
	}
	.header {
		padding: 95px 0 20px 0;
		display: flex;
		flex-direction: column;
		gap: 8px;
		width: 100%;
	}
	.navbar {
		padding: 0 0 16px 0;
	}
	.reels {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

</style>