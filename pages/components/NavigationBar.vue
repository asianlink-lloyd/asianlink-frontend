<template>
	<scroll-view class="nav-scroll-container" scroll-x="true">
		<view class="nav-container">
			<view
				v-for="(nav, index) in navItems"
				:key="index"
				class="nav-item"
				:class=" { active: activeRoute === nav.route } "
				@click="navigateTo(nav.route)"
			>
				<text :class="{ active: activeRoute === nav.route }">{{ nav.label }}</text>
			</view>
		</view>
	</scroll-view>
</template>


<script>
	export default {
		data() {
			return {
				navItems : [
					{ label: 'Public Service', route: '/pages/publicService/publicService' },
					{ label: 'News', route: '/pages/news/news' },
					{ label: 'E-commerce', route: '/pages/Ecommerce/Ecommerce' },		
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
							this.activeRoute = route;
						},
						fail: (error) => {
							console.error('Navigation failed:', error);
						}
					})
					
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
	.nav-scroll-container {
		display: flex;
		overflow-x: scroll;
		white-space: nowrap;
	}
	.nav-container {
		display: flex;
		gap: 6px;
		width: 100%; /* Full width of the container */
		padding-bottom: 20px;
	}
	
	.nav-item {
		height: 50px;
		color: #A0A5AF;
		font-size: 16px;
		display: flex;
		align-items: center;
		justify-content: center; /* Center align text */
		padding: 8px 12px;
		background-color: #F1F2F7;
		border-radius: 50px;
		border: 1px solid rgba(160, 165, 175, 0.2); /* 20% opacity */
		font-weight: 500;
		flex-grow: 1; /* Allow each item to grow proportionally */
		min-width: max-content; /* Ensure the width is at least the size of the text */
	}
	.nav-item.active,
	.nav-item:hover {
	  color: #ffffff; /* Highlight color for active or hovered items */
		background-color: navy;
	}
	.nav-item text.active {
	  font-weight: bold;
	  color: #ffffff;
	}

</style>