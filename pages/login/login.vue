<template>
	<CustomHeaderVue />
		<view class="login">
			<view class="login-container">
				<LoginForm />
				<OrDivider />
				<SocialLoginButtons />
			</view>
			<view class="">
				<FooterComponentVue />		
			</view>	
		</view>
</template>

<script>
import CustomHeaderVue from '@/pages/components/CustomHeader.vue';
import LoginForm from '@/pages/components/Login/LoginForm.vue';
import SocialLoginButtons from '@/pages/components/Login/SocialLoginButtons.vue';
import FooterComponentVue from '../components/FooterComponent.vue';
import OrDivider from '@/pages/components/OrDivider.vue';
	
	export default {
		components: {
			CustomHeaderVue,
			LoginForm,
			OrDivider,
			SocialLoginButtons,
			FooterComponentVue
		}
	}
</script>

<style>
	.login {
		padding: 107px 20px 0 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 100vh;
		background-color: #F8F8F8;
	}
	.login-container {
		display: flex;
		flex-direction: column;
		gap: 12px;
		padding-bottom: 20px;
	}
	.or-divider {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  gap: 12px;
	  width: 100%;
	}
	
	.line {
	  flex-grow: 1;
	  border: 1px solid rgba(11, 11, 11, 0.12); /* 12% opacity for the border */
	}
	
	.or-text {
	  font-size: 14px;
	  font-weight: 500;
	  color: #000000;
	  padding: 0 8px;
	}

</style>