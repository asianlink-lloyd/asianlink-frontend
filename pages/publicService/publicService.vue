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
		<view class="public-service-conatiner">
			<ContainerVue />
			<NewsVue />
		</view>
		<view class="">
			<TagVue />
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
	import NavigationBarVue from '../components/NavigationBar.vue';
	import BottomNavigationTabVue from '../components/BottomNavigationTab.vue';
	import ContainerVue from '../components/publicService/container.vue';
	import NewsVue from '../components/publicService/news.vue';
	import TagVue from '../components/publicService/tag.vue';
	
	export default {
		name: 'PublicService',
		components: {
			CustomHeaderMainVue,
			ProfileVue,
			SearchVue,
			NavigationBarVue,
			BottomNavigationTabVue,
			ContainerVue,
			NewsVue,
			TagVue
		}
	}
</script>

<style scoped>
	.container {
		position: relative;
		min-height: 100vh;
		background-color: #F8F8F8;	
		padding: 0 0 89px 0;
	}
	.header {
		padding: 95px 20px 20px 20px;
		display: flex;
		flex-direction: column;
		gap: 8px;
		width: 100%;
	}
	.navbar {
		padding: 0 20px 0 20px;
	}
	.public-service-conatiner {
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding: 0 20px 0 20px;
	}
</style>