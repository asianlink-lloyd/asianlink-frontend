<template>
	<view class="tag-container">
		<view v-for="(item, index) in tagItems" :key="index" class="tag-items">
			<text>{{ item.lable }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tagItems: [
					{ lable: 'DOH' },
					{ lable: 'DOLE' },
					{ lable: 'DA' },
					{ lable: 'DMW' },
					{ lable: 'LGU' },
					{ lable: 'Social Services' },
					{ lable: 'Business' },
					{ lable: 'e-Services' },
					{ lable: 'FAQs' },
					{ lable: 'Featured Stories' },
				]
			}
		}
	}
</script>

<style scoped>
	.tag-container {
		display: flex;
		padding: 20px;
		background-color: #ffffff;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 12px;
	}
	.tag-items {
		display: flex;
		justify-content: center;
		padding: 12px;
		border: 1px solid #A0A5AF;
		border-radius: 20px;
		min-width: 75px;
	}
</style>