<template>
	<scroll-view class="reel-scroll-container" scroll-x="true" >
		<view class="reel-container">
			<view class="reel">
				<text>Bo Designs</text>
				<view class="create-reel-container">
					<view class="create-reel-btn">
						<image src="@/static/Vector(3).png" mode="aspectFill" />
					</view>
					<text>Create Real</text>
				</view>
			</view>
			<view v-for="(item, index) in reelLists" :key="index"  class="reel" :style="{ backgroundImage: `url(${item.backgroundImage})` }">
				<text>{{ item.label }}</text>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				reelLists: [
					{ label: 'Furniture Store', backgroundImage: 'https://image.made-in-china.com/2f0j00jVNpbWDthirq/Home-Furniture-Living-Room-Display-Design-Cabinet-Door-for-Philippines.webp' },
					{ label: 'Gadgets Store', backgroundImage: 'https://filebroker-cdn.lazada.sg/kf/Sbb430e7e829c48c7898e0df7b9282063f.jpg' },
					{ label: 'Furniture Store', backgroundImage: 'https://image.made-in-china.com/2f0j00jVNpbWDthirq/Home-Furniture-Living-Room-Display-Design-Cabinet-Door-for-Philippines.webp' },
					{ label: 'Furniture Store', backgroundImage: 'https://image.made-in-china.com/2f0j00jVNpbWDthirq/Home-Furniture-Living-Room-Display-Design-Cabinet-Door-for-Philippines.webp' },
				]
			}
		}
	}
</script>

<style>
	.reel-scroll-container {
		display: flex;
		overflow-x: scroll;
		white-space: nowrap;
	}
	.reel-container {
		display: flex;
		gap: 8px;
		width: 100%;
	}
	.reel {
		position: relative;
		display: flex;
		align-items: end;
		height: 225px;
		width: 150px;
		background-image: url('@/static/UntitledDesign.png');
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 12px;
		padding: 8px;
		flex-grow: 1; /* Allow each item to grow proportionally */
		min-width: 150px;
	}
	.reel text {
		color: #ffffff;
		font-size: 14px;	
	}
	.create-reel-container {
		position: absolute;
		top: 50%; /* Center vertically */
		left: 50%; /* Center horizontally */
		transform: translate(-50%, -50%); /* Offset by half the element's size */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.create-reel-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 41.67px;
		height: 41.67px;
		background-color: black;
		border-radius: 50%;
		border: 2px solid white;
	}
	.create-reel-btn image {
		width: 16.67px;
		height: 16.67px;
	}
	.create-reel-container text {
		font-size: 12px;
		line-height: 18px;
		font-weight: 400;
	}
</style>