<template>
	<scroll-view class="news-scroll-container" scroll-x="true" >
		<view class="news-container">
			<view v-for="(item, index) in newsItems" :key="index" class="news">
				<view class="news-text-origin">
					<text class="text">{{ item.origin }}</text>
					<view class="bookmark-btn-container">
						<image src="@/static/bookmark-02.png" mode="aspectFill" />
					</view>
				</view>
				<view class="news-image-container">
					<image :src="item.image" mode="aspectFill" />
				</view>
				<view class="news-content-container">
					<text class="text">{{ item.content }}</text>
				</view>
				<view class="news-author-container">
					<view class="news-author-profile">
						<image :src="item.authorProfile" mode="aspectFill" />
						<text>{{ item.author }}</text>
					</view>
					<view class="news-author-date">
						<text>{{ item.date }}</text>
					</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				newsItems: [
					{ origin: 'PH News', image: '../../static/metromanila_pic01.jpg', content: 'OFWs sa Israel, nakikipag-ugnayan sa Pamahalaan para sa mga Serbisyong Pangkabuhayan at Proteksyon', author: 'Juan Dela Cruz', authorProfile: '../../static/UntitledDesign.png', date: 'May 30, 2024' },
					{ origin: 'PH News', image: '../../static/metromanila_pic01.jpg', content: 'OFWs sa Israel, nakikipag-ugnayan sa Pamahalaan para sa mga Serbisyong Pangkabuhayan at Proteksyon', author: 'Juan Dela Cruz', authorProfile: '', date: 'May 30, 2024' },
					{ origin: 'PH News', image: '../../static/metromanila_pic01.jpg', content: 'OFWs sa Israel, nakikipag-ugnayan sa Pamahalaan para sa mga Serbisyong Pangkabuhayan at Proteksyon', author: 'Juan Dela Cruz', authorProfile: '', date: 'May 30, 2024' },
					
				]
			}
		}
	}
</script>

<style scoped>
	.news-scroll-container {
		display: flex;
		overflow-x: scroll;
		white-space: nowrap;
	}
	.news-container {
		display: flex;
		gap: 8px;
		width: 100%;
		padding-bottom: 20px;
	}
	.news {
		display: flex;
		flex-direction: column;
		padding: 12px;
		border: 1px solid rgba(160, 165, 175, 0.2); /* 20% opacity */
		border-radius: 14px;
		gap: 12px;
		background-color: #ffffff;
		
	}
	.bookmark-btn-container {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 80px;
		background-color: #ffffff;
		width: 30px;
		height: 30px;
	}
	.news-text-origin {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.news-text-origin .text {
		font-size: 20px;
		line-height: 30px;
		font-weight: 600;
		color: #242FB9;
	}
	.news-text-origin image {
		width: 14px;
		height: 14px;
		flex-shrink: 0;
		flex-grow: 0;
	}
	.news-image-container image {
		width: 200px;
		height: 140px;
		border-radius: 4px;
	}
	.news-content-container .text {
		color: black;
		font-size: 16px;
		line-height: 24px;
		font-weight: 400;
	}
	.news text {
		color: #ffffff;
		font-size: 14px;	
	}
	.news-author-profile image {
		width: 20px;
		height: 20px;
		border-radius: 50%;
	}
	.news-author-container {
		display: flex;
		gap: 27px;
	}
	.news-author-container text {
		color: #A0A5AF;
		font-size: 12px;
		font-weight: 400;
		line-height: 18px;
	}
	.news-author-profile {
		display: flex;
		flex-direction: column;
		gap: 4px;	
	}
	.news-author-date {
		display: flex;
		align-items: end;
	}
</style>