<template>
	<view class="item-continer">
		<view 
			v-for="product in products" 
			:key="product.id" 
			class="profile"
			@click="viewDetails(product.id)">
			<view class="item-img">		
			</view>
			<view class="item-text-container">
				<view class="text-item-container">
					<text class="brand-name">{{ product.name }}</text>
					<text class="store-name">{{ product.seller.business_name }}</text>
					<view class="review">
						<image src="@/static/star.png" mode=""></image>
						<text>4.8</text>
					</view>
				</view>
				<text class="price">₱ {{ getDefaultPrice(product.variants) }} </text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				products: [], // Array to store products
			};
		},
		methods: {
			async fetchProducts() {
				try {
					const response = await uni.request({
						url: 'http://127.0.0.1:8000/api/v1/products',
						method: 'GET',
					});

					// Correctly handle the response
					if (response.statusCode === 200 && response.data?.isSuccess) {
						this.products = response.data.products; // Assign product data
						console.log('Products fetched successfully:');
					} else {
						console.error('API Error:', response.data?.message || 'Unknown error');
					}
				} catch (err) {
					console.error('Request failed:', err);
				}
			},
			
			viewDetails(productId) {
				uni.navigateTo({
					url: `/pages/Ecommerce/ProductDetails?id=${productId}`,
				});
			},

			// Method to get the price of the default variant
			getDefaultPrice(variants) {
				if (!variants || variants.length === 0) {
					return 'No price available';
				}

				// Find the default variant (assuming `is_default` field marks the default)
				const defaultVariant = variants.find(variant => variant.is_default);

				// Return its price or a fallback message
				return defaultVariant ? defaultVariant.price.toFixed(2) : 'No default variant';
			},
		},
		mounted() {
			this.fetchProducts(); // Fetch products when the component is mounted
		},
	};
</script>



<style>
	.item-continer {
		display: grid;
		grid-template-columns: 1fr 1fr ;
		gap: 8px;	
	}
	.profile {
		width: 100%;
		border: 1px solid rgba(160, 165, 175, 0.2);
		border-radius: 12px;
		padding: 8px;
		background-color: #ffffff;
	}
	.item-img {
		height: 155px;
		width: 100%;
		background-image: url('@/static/IMG_8861_50f80066-8930-4865-9ed8-cec74bb43ab7_1445x.webp');
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 12px 12px 0 0;
	}
	.item-text-container {
		display: flex;
		padding: 8px;
		flex-direction: column;
		gap: 8px;
	}
	.text-item-container {
		display: flex;
		flex-direction: column;
	}
	.brand-name {
		font-size: 12px;
		font-weight: 500;
	}
	.store-name {
		font-size: 10px;
		color: gray;
	}
	.price {
		font-size: 14px;
		color: navy;
	}
	.review {
		display: flex;
		align-items: center;
		gap: 4px;
	}
	.review image {
		height: 12px;
		width: 12px;
	}
	.review text {
		font-size: 10px;
	}
</style>