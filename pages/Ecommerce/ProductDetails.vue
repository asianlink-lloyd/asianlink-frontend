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
    <!-- Product Details -->
    <view v-if="product">
      <view class="item-img"></view>
      <view class="item-details">
		  <text class="price">Price: ₱ {{ getDefaultPrice(product.variants) }}</text>
        <text class="brand-name">Name: {{ product.name }}</text>
        <text class="store-name">Seller: {{ product.seller.business_name }}</text>
        <text class="category">Category: {{ product.category.name }}</text>
        <text class="description">Description: {{ product.description }}</text>
      </view>
    </view>

    <!-- Loading State -->
    <view v-else-if="isLoading">
      <text>Loading product details...</text>
    </view>

    <!-- Error State -->
    <view v-else>
      <text>{{ error }}</text>
    </view>
  </view>
</template>

<script>
	import CustomHeaderMainVue from '../components/CustomHeaderMain.vue';
	import ProfileVue from '../components/Profile.vue';
	import SearchVue from '../components/Search.vue';
	import NavigationBarVue from '../components/NavigationBar.vue';
	import BottomNavigationTabVue from '../components/BottomNavigationTab.vue';
	
export default {
	components: {
		CustomHeaderMainVue,
		ProfileVue,
		SearchVue,
		NavigationBarVue,	
		BottomNavigationTabVue
	},
  data() {
    return {
      product: null,       // Store product details
      isLoading: true,     // Loading state
      error: null,         // Error message
    };
  },
  methods: {
    // Fetch product details
    async fetchProductDetails(productId) {
      try {
        const response = await uni.request({
          url: `http://127.0.0.1:8000/api/v1/products/${productId}`, // API endpoint
          method: 'GET',
        });

        if (response.statusCode === 200 && response.data?.isSuccess) {
          this.product = response.data.product; // Assign the product data
        } else {
          this.error = response.data?.message || 'Failed to fetch product details.';
        }
      } catch (err) {
        this.error = 'An error occurred while fetching product details.';
        console.error(err);
      } finally {
        this.isLoading = false; // Stop loading
      }
    },

    // Get default variant price
    getDefaultPrice(variants) {
      if (!variants || variants.length === 0) {
        return 'N/A';
      }

      const defaultVariant = variants.find(variant => variant.is_default); // Find default variant
      return defaultVariant ? defaultVariant.price.toFixed(2) : 'N/A';
    },
  },
  onLoad(options) {
    // Retrieve the productId from query parameters passed via navigateTo
    const productId = options.id;

    if (productId) {
      this.fetchProductDetails(productId); // Fetch the product details
    } else {
      this.error = 'No product ID provided.';
      this.isLoading = false;
    }
  },
};
</script>

<style scoped>
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
	.price {
		font-size: 16px;
		color: navy;
		font-weight: 500;
	}

</style>
