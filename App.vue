<script>
	import NavigationBarVue from './pages/components/NavigationBar.vue';
	
	export default {
		components : {
			NavigationBarVue,
		},
		onLaunch: function() {
			const token = uni.getStorageSync("jwt_token");
			    if (token) {
			        uni.reLaunch({
			            url: '/pages/landing/landingScreen', // Replace with your eCommerce page route
			        });
			    } else {
			        uni.reLaunch({
			            url: '/pages/index/index', // Replace with your index page route
			        });
			    }
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@font-face {
	  font-family: 'Poppins';
	  src: url('static/Poppins/Poppins-Regular.ttf') format('truetype');
	}
	* {
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
	}
</style>
