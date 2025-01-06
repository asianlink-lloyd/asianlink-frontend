<template>
	<view class="container">
		<view class="img-container">
			<image class="img-group" src="../../static/Photo.png" mode="" />
			<view class="content-group">
				<image class="img-logo" src="../../static/asianlinkAI_FINAL APPROVED (1).png" mode=""></image>
				<text>Your Connect to News, \nPublic Service & E-Commerce</text>
			</view>
		</view>
		<view class="content">
			<view class="content-container">
				<view v-for="(item, index) in landingItems" :key="index" class="btn-container" @click="navigateTo(item.route)">
					<view class="content-btn">
							<image :src="item.icon" mode="" />{{ item.label }}
					</view>	
					<view class="content-btn">
						<image class="content-primary-btn" src="../../static/Group 22581.png"></image>
					</view>
				</view>	
			</view>	
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				landingItems: [
					{ icon: '../../static/Vector.png', label: 'Public Service', route: '/pages/publicService/publicService' },
					{ icon: '../../static/news.png', label: 'News', route: '/pages/news/news' },
					{ icon: '../../static/store-02.png', label: 'e-Commerce', route: '/pages/Ecommerce/Ecommerce' }
				]
			}
		},
		methods: {
			navigateTo(route) {
				if(route) {
					uni.navigateTo({
						url: route,
					});
				} else {
					console.log('Route not define for this item');
				}
			}
		}
	}
</script>

<style scoped>
	.container {
		position: relative;
		min-height: 100vh;
		background-color: #F8F8F8;	
	}
	.img-container {
		position: relative;
		height: 477px;
		width: 100%;
		background-image: url('../../static/landingbg.gif');
		background-repeat: no-repeat;
		background-size: cover;
	}
	.img-container .img-group {
		position: absolute;
		bottom: -4px;
		width: 100%;
		height: 175px;
	}
	.img-container .img-logo {
		width: 188px;
		height: 92px;
	
	}
	.content {
		position: absolute;
		top: 458px;
		width: 100%;
		padding: 0 20px;
	}
	.btn-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
		border: 1px solid lightgray;
		border-radius: 20px;
		width: 100%;
		
	}
	.content-primary-btn {
		height: 24px;
		width: 24px;
	}
	.content-group {
		position: absolute;
		top: 82px;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;	
		gap: 12px;
	}
	.content-group text {
		width: 239px;
		color: #ffffff;
		text-align: center;
	}
	.content-container {
		display: flex;
		flex-direction: column;
		padding: 20px;
		background-color: #ffffff;
		border-radius: 30px;
		gap: 20px;
	}
	.content-btn {
		display: flex;
		align-items: center;
		gap: 18px;
		font-size: 20px;
	}
	.content-container .content-btn image {
		width: 24px;
		height: 24px;
	}
	.content-container .content-btn text {
		font-size: 20px;
		display: flex;
		align-items: center;
		gap: 18px;
	}
</style>