<template>
	<text class="profile-title">{{ title }}</text>
</template>

<script>
	export default {
		name: 'ProfileTitle',
		props: {
			title: {
				type: String,
				required: true,
			}
		}
	}
</script>

<style>
	.profile-title {
		display: flex;
		justify-content: start;
		color: blue;
		font-size: 20px;
		font-weight: 600;
	}
</style>