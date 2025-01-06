<template>
	<view class="headline-container">
		<view v-for="(item, index) in headlineItems" :key="index" class="headline">
			<view class="headline-img">
				<image :src="item.image" mode="aspectFill"></image>
			</view>
			<view class="headline-frame">
				<view class="headline-content">
					<text class="headline-content-title">{{ item.title }}</text>
					<text class="headline-content-time">{{ item.time }}</text>
				</view>
				<view class="bookmark">
					<image src="@/static/bookmark-02(1).png" mode="" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				headlineItems: [
					{ image: '../../static/IMG_8861_50f80066-8930-4865-9ed8-cec74bb43ab7_1445x.webp', title: 'No winners of major lotto draws on Wedn', time: '1h ago' },
					{ image: '../../static/IMG_8861_50f80066-8930-4865-9ed8-cec74bb43ab7_1445x.webp', title: 'Dangerous level of heat index in 18 are', time: '1h ago' },
					{ image: '../../static/IMG_8861_50f80066-8930-4865-9ed8-cec74bb43ab7_1445x.webp', title: 'Pawsitively Perfect: Let’s Celebrate Nati', time: '1h ago' },
				]
			}
		}
	}
</script>

<style scoped>
	.headline-container {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
	.headline {
		display: flex;
		gap: 21px;
		width: 100%;
		padding: 12px 16px;
		background-color: #000080;
		border-radius: 20px;
		border: 1px solid rgba(160, 165, 175, 0.2); /* #A0A5AF with 20% opacity */
	}
	.headline-img {
		width: 58px;
		height: 60px;
		border-radius: 8px;
		flex-shrink: 0; /* Prevent shrinking */
		flex-grow: 0; /* Prevent growing */
		box-shadow: inset 0 0 0 2px #000080; /* Simple inner border */
	}
	.headline-img image {
		width: 100%;
		height: 100%;
		border-radius: 8px;
	}
	.headline-frame {
		display: flex;
		gap: 40px;
	}
	.bookmark {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #ffffff;
		border-radius: 80px;
		height: 30px;
		width: 30px;
		flex-shrink: 0; /* Prevent shrinking */
		flex-grow: 0; /* Prevent growing */
	}
	.bookmark image {
		height: 14px;
		width: 14px;
	}
	.headline-content {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
	.headline-content-title {
		font-size: 16px;
		line-height: 16px;
		color: #ffffff;
		font-weight: 500;	
	}
	.headline-content-time {
		font-weight: 275;
		font-size: 16px;
		line-height: 24px;
		color: rgba(255, 255, 255, 0.8);;
	}
</style>