<template>
	<view class="community-tab-container">
		<view v-for="(item, index) in communityItems" :key="index" class="community-tab-item">
			<image :src="item.icon" mode="" />
			<text>{{ item.label }}</text>
		</view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				communityItems: [
					{ label: 'Feed', icon: '../../static/rss.png', route: '' },
					{ label: 'Circles', icon: '../../static/user-group-02.png', route: '' },
					{ label: 'Events', icon: '../../static/calendar-02(1).png', route: '' },
				]
			}
		}
	}
</script>

<style scoped>
	.community-tab-container {
		display: flex;
		justify-content: space-between;
		gap: 6px;
	}
	.community-tab-item {
		font-size: 12px;
		display: flex;
		text-align: center;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #000080;
		border-radius: 50px;
		color: #ffffff;
		width: 100%;
		height: 50px;
	}
	.community-tab-item image {
		width: 24px;
		height: 24px;
	}
</style>