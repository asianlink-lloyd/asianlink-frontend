<template>
	<view v-for="(item, index) in postItems" :key="index" class="post">
		<view class="user-header">
			<view class="user">
				<image src="@/static/UntitledDesign.png" mode="aspectFill" />
				<view class="text">
					<text class="name">{{ item.author }}</text>
					<text class="date">{{ item.date }}</text>
				</view>
			</view>
			<view class="more-vertical">
				<image src="@/static/more-vertical.png" mode="" />
			</view>
		</view>
		<view class="content">
			<text>{{ item.content }}</text>
		</view>
		<view class="post-image">
			<image :src="item.image" mode="aspectFill" />
		</view>
		<view class="icon-container">
			<view class="icon">
				<image src="@/static/thumbs-up.png" mode="" />
				<text class="count">{{ item.likeCount }}</text>
			</view>
			<view class="icon">
				<image src="@/static/bubble-chat.png" mode="" />
				<text class="count">{{ item.commentCount }}</text>
			</view>
			<view class="icon">
				<image src="@/static/arrow-reload-horizontal.png" mode="" />
				<text class="count">{{ item.shareCount }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				postItems: [
					{ author: 'John Lloyd Butay', date: '2 hrs ago', image: '../../static/Filipinos.jpg', content: 'Blessed🙏', likeCount: '4', commentCount: '4', shareCount: '4' },
					{ author: 'John Lloyd Butay', date: '2 hrs ago', image: '../../static/Filipinos.jpg', content: 'Blessed🙏', likeCount: '4', commentCount: '4', shareCount: '4' },
					{ author: 'John Lloyd Butay', date: '2 hrs ago', image: '../../static/Filipinos.jpg', content: 'Blessed🙏', likeCount: '4', commentCount: '4', shareCount: '4' },
				]
			}
		}
	}
</script>

<style scoped>
	.post {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.user-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.user {
		display: flex;
		gap: 8px;	
	}
	.user .text {
		display: flex;
		flex-direction: column;
	}
	.user .name {
		font-size: 14px;
		font-weight: 400;
		line-height: 21px;
	}
	.user .date {
		font-size: 12px;
		font-weight: 400;
		line-height: 18px;
		color: #A0A5AF;
	}
	.user image {
		width: 40px;
		height: 40px;
		border-radius: 50%;	
	}
	.more-vertical image {
		width: 24px;
		height: 24px;
	}
	.post-image image {
		width: 100%;
		height: 196px;
		border-radius: 12px;
	}
	.icon-container {
		display: flex;
		gap: 16px;
	}
	.icon {
		display: flex;
		align-items: center;
		gap: 4px;
	}
	.icon image {
		width: 20px;
		height: 20px;
	}
	.icon .count {
		font-size: 12px;
		color: #828282;
		font-weight: 500;
		line-height: 18px;
	}
</style>