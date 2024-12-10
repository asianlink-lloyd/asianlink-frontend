<template>
	<view :class="['bottom-nav', { dark: isDarkMode}]">
		<view 
			v-for="(nav, index) in navItems" 
			:key="index" 
			class="nav-item"
			:class="{ active: activeRoute === nav.route }" 
			@click="navigateTo(nav.route)">
			<image :src="nav.icon" mode=""></image>
			<text :class="{ active: activeRoute === nav.route }">{{ nav.label }}</text>
		</view>	
	</view>
</template>

<script>
	import homeIcon from '../../static/home-02.png';
	import communityIcon from '../../static/user-group.png';
	import aiIcon from '../../static/ai-brain-02.png';
	import bookmarkIcon from '../../static/bookmark-02.png';
	import profileIcon from '../../static/user-sharing.png';
	
	export default {
		props: {
			isDarkMode: {
				type: Boolean,
				default: false,
			}
		},
		data() {
			return {
				navItems: [
					{ icon: homeIcon, label: 'home', route: '/pages/landing/landingScreen' },
					{ icon: communityIcon, label: 'community', route: '/pages/community/community' },
					{ icon: aiIcon, label: 'ai', route: '/pages/ai/aiScreen' },
					{ icon: bookmarkIcon, label: 'bookmark', route: '/pages/bookmark/bookmarkScreen' },
					{ icon: profileIcon, label: 'profile', route: '/pages/profile/profile' },
				],
				activeRoute: '',
			}
		},
		methods: {
			navigateTo(route) {
				if(this.activeRoute !== route) {
					uni.navigateTo({
						url: route,
						success: () => {
						    this.activeRoute = route; // Update the active route
						},
						fail: (error) => {
						    console.error('Navigation failed:', error);
						},
					});
				}
			}
		},
		mounted() {
			const pages = getCurrentPages();
			this.activeRoute = `/${pages[pages.length - 1].route}`;
		}
	}
</script>

<style scoped>
	.bottom-nav {
	  position: fixed;
	  bottom: 0;
	  left: 0;
	  width: 100%;
	  padding: 20px;
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  background-color: #FFFFFF;
	  color: white;
	  z-index: 1000; /* Ensure it's on top */
	}
	
	.bottom-nav.dark {
	  background-color: black;
	  color: lightgray;
	}
	
	.nav-item {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  gap: 4px;
	  color: lightgray;
	  font-size: 14px;
	  text-transform: uppercase;
	}
	.nav-item.active,
	.nav-item:hover {
	  color: #FFBF00; /* Highlight color for active or hovered items */
	}
	.nav-item text.active {
	  font-weight: bold;
	  color: #FFBF00;
	}
	.nav-item image {
		width: 24px;
		height: 24px;
	}
</style>