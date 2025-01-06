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
			<view v-for="(item, index) in reelLists" 
				:key="index"  
				class="reel" 
				:style="{ backgroundImage: `url(${item.backgroundImage})` }"
				@tap="openReelDetails(item)"
				>
				<text>{{ item.productName }}</text>
			</view>
		</view>
	</scroll-view>
	
	<view v-if="selectedReel" class="details-modal">
		<view class="details-content" :style="{ backgroundSize: 'cover', backgroundImage: `url(${selectedReel.backgroundImage})` }">
			<view class="details-container">
				<text class="details-productName">{{ selectedReel.productName }}</text>	
				<text class="details-storeName">{{ selectedReel.storeName }}</text>	
				<text class="details-description">{{ selectedReel.description }}</text>				
			</view>	
			<view class="button-container">
				<button class="view-button">View Item</button>
				<button class="add-button">Add to Cart</button>			
			</view>
			<view class="button-count-container">
				<view class="button">
					<image class="icon" src="@/static/favourite.png" mode=""></image>
					<text>{{ selectedReel.likeCount }}</text>
				</view>
				<view class="button">
					<image class="icon" src="@/static/bubble-chat-fill.png" mode=""></image>
					<text>{{ selectedReel.likeCount }}</text>
				</view>	
				<view class="button">
					<image class="icon" src="@/static/share-01.png" mode=""></image>
					<text>{{ selectedReel.likeCount }}</text>
				</view>				
			</view>
		</view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				reelLists: [
					{ storeName: 'Furniture Store', productName: 'BrandName Natural Face Oil', description: 'Glow naturally with our nourishing oils! Add it to your cart and treat your skin to a radiant, healthy shine.', backgroundImage: 'https://1716401.fs1.hubspotusercontent-na1.net/hub/1716401/hubfs/pink-tax.jpg?width=6000&height=4000&name=pink-tax.jpg', likeCount: 10, commentCount: 10, shareCount: 10 },
					{ storeName: 'Gadgets Store', productName: 'BrandName Natural Face Oil', description: 'Glow naturally with our nourishing oils! Add it to your cart and treat your skin to a radiant, healthy shine.', backgroundImage: 'https://1716401.fs1.hubspotusercontent-na1.net/hub/1716401/hubfs/pink-tax.jpg?width=6000&height=4000&name=pink-tax.jpg', likeCount: 10, commentCount: 10, shareCount: 10 },
					{ storeName: 'Furniture Store', productName: 'BrandName Natural Face Oil', description: 'Glow naturally with our nourishing oils! Add it to your cart and treat your skin to a radiant, healthy shine.', backgroundImage: 'https://1716401.fs1.hubspotusercontent-na1.net/hub/1716401/hubfs/pink-tax.jpg?width=6000&height=4000&name=pink-tax.jpg', likeCount: 10, commentCount: 10, shareCount: 10 },
					{ storeName: 'Furniture Store', productName: 'BrandName Natural Face Oil', description: 'Glow naturally with our nourishing oils! Add it to your cart and treat your skin to a radiant, healthy shine.', backgroundImage: 'https://1716401.fs1.hubspotusercontent-na1.net/hub/1716401/hubfs/pink-tax.jpg?width=6000&height=4000&name=pink-tax.jpg', likeCount: 10, commentCount: 10, shareCount: 10 },
				],
				selectedReel: null,
			}
		},
		methods: {
			openReelDetails(reel) {
				this.selectedReel = reel;
			},
			closeDetails() {
				this.selectedReel = null;
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
		background-position: center;
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
	.details-modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		z-index: 100;	
	}
	.details-content {
		display: flex;
		flex-direction: column;
		justify-content: end;
		width: 100%;;
		height: 90%;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		padding: 20px
	}
	.details-container {
		display: flex;
		flex-direction: column;
		margin-bottom: 8px;
	}
	.details-productName {
		font-size: 20px;
		font-weight: 600;
		color: #ffffff;	
	}
	.details-storeName {
		font-size: 12px;
		color: rgba(255, 255, 255, 0.4);
	}
	.details-description {
		font-size: 14px;
		color: #ffffff;
	}
	.button-container {
		display: flex;
		gap: 8px;
	}
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		font-size: 16px;
		border-radius: 8px;  	
		color: #ffffff;	
		height: 48px;
	}
	.view-button {
		background-color: transparent;
		border: 1px solid #ffffff;
	}
	.add-button {
		background-color: navy;
	}
	.button-count-container {
		position: absolute;
		display: flex;
		flex-direction: column;
		gap: 16px;
		top: 35%;
		right: 0;
		margin-right: 20px;
	}
	.icon {
		width: 32px;
		height: 32px;
	}
	.button {
		display: flex;
		flex-direction: column;
		gap: 4px;
		align-items: center;
	}
</style>