<template>
	<view class="ecommerce">
		<view class="search-container">
			<image src="@/static/search-01.png" mode=""></image>
			<input type="text" placeholder="Search" />
		</view>
		<view class="filter-container">
			<image src="@/static/filter.png" mode=""></image>	
		</view>	
	</view>	
</template>

<script>
</script>

<style>
	.ecommerce {
		display: flex;
		gap: 12px; /* Gap between the search and filter containers */
		justify-content: space-between;
		align-items: center; /* Align items vertically */
		width: 100%; /* Ensure the parent container spans the full width */
	}
	
	.search-container {
		color: #A0A5AF;
		display: flex;
		gap: 12px;
		align-items: center;
		height: 50px;
		font-size: 14px;
		flex-grow: 1; /* Allow this container to take the remaining space */
		padding: 20px 12px 20px 20px;
		background-color: #F1F2F7;
		border: 1px solid rgba(160, 165, 175, 0.2); /* 20% opacity */
		border-radius: 80px;
	}
	
	.search-container image {
		max-width: 16px;
		height: 16px;
	}
	.search-container input {
		font-size: 14px;
		color: #A0A5AF;
	}
	
	.filter-container {
		color: #A0A5AF;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50px;
		width: 50px; /* Fixed width */
		padding: 12px;
		border: 1px solid rgba(160, 165, 175, 0.2); /* 20% opacity */
		border-radius: 80px;
	}
	
	.filter-container image {
		width: 20px;
		height: 20px;
		object-fit: contain;
	}

</style>