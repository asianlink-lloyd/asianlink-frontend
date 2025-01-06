<template>
	<view class="container">
		<CustomHeaderMainVue />
		<view class="header">
			<ProfileVue />	
			<SearchVue />
		</view>	
		<view class="navbar">
			<NavigationBarVue />
		</view>	
		<view class="navtab">
			<BottomNavigationTabVue />
		</view>
		<view class="reels">
			<ReelsVue />
			<AdBannerVue />
			<ItemsVue />
		</view>
	</view>
</template>

<script>
	import CustomHeaderMainVue from '../components/CustomHeaderMain.vue';
	import ProfileVue from '../components/Profile.vue';
	import SearchVue from '../components/Search.vue';
	import NavigationBarVue from '../components/NavigationBar.vue';
	import BottomNavigationTabVue from '../components/BottomNavigationTab.vue';
	import ItemsVue from '../components/ecommerce/Items.vue';
	import ReelsVue from '../components/ecommerce/Reels.vue';
	import AdBannerVue from '../components/AdBanner.vue';
	
	export default {
		name: 'Ecommerce',
		components: {
			CustomHeaderMainVue,
			ProfileVue,
			SearchVue,
			NavigationBarVue,
			BottomNavigationTabVue,
			ItemsVue,
			ReelsVue,
			AdBannerVue
		}
	}
</script>

<style>
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
	.reels {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
</style>