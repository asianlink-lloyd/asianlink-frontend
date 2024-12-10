<template>
  <view>
		<view class="container">
		  		<view class="title-container">
		  		<text class="title">Login</text>
		  		<view class="title-content">
					Need <text class="company-title">Asian Link</text> Account? 
					<text class="register" @click="goToRegister">Register</text> here
				</view>
		  		</view>
				<view v-for="(item, index) in input" :key="index" class="">
					<InputField
					:label="item.label"
					:placeholder="item.placeholder"
					v-model="formData[item.model]"
					:type="item.type"
					/>	
				</view>
					<button type="submit" class="login-button" @click="handleLogin">Log In</button> 
		  		<view class="forgot-password">
		  		<text @click="goToForgotPassword">Forgot Password?</text>
		  		</view> 	
		</view>	
  </view>
</template>

<script>
	import InputField from '../InputField.vue';
export default {
  name: 'LoginForm',
  components: {
	  InputField,
  },
  data() {
    return {
      formData: {
        emailOrPhone: '',
        password: '',
      },
      isSubmitting: false,
      input: [
        { label: 'Email or Phone', placeholder: 'Enter email address or number', model: 'emailOrPhone', type: 'email' },
        { label: 'Password', placeholder: 'Enter password', model: 'password', type: 'password' },
      ],
    };
  },

  methods: {
      handleLogin() {
		  console.log('Login button clicked');
          if (this.isSubmitting) return; // Prevent multiple submissions
              this.isSubmitting = true;
          
          uni.request({
              url: 'http://127.0.0.1:8000/api/v1/auth/users/api/login',
              method: 'POST',
              data: {
                  email: this.formData.emailOrPhone,
                  password: this.formData.password,
              },
              success: (res) => {
                  if (res.statusCode === 200) {
                      // Save user data and token
                      const token = res.data?.token || "";
                      const userName = res.data?.user?.name || "Unknown User";
                      const phoneNumber = res.data?.user?.phone;
                      const email = res.data?.user?.email;
                      const birthday = res.data?.user?.birthday;
                      const province = res.data?.user?.province;
  
                      uni.setStorageSync("jwt_token", token);
                      uni.setStorageSync("userName", userName);
                      uni.setStorageSync("phoneNumber", phoneNumber);
                      uni.setStorageSync("email", email);
                      uni.setStorageSync("birthday", birthday);
                      uni.setStorageSync("province", province);
  
                      // Navigate to eCommerce page
                      uni.showToast({
                          title: 'Login successful!',
                          icon: 'none',
                      });
                      setTimeout(() => {
                          uni.reLaunch({
                              url: '/pages/landing/landingScreen', // Replace with your eCommerce page route
                          });
                      }, 1000);
                  } else if (res.statusCode === 401) {
                      uni.showToast({
                          title: 'Invalid credentials',
                          icon: 'error',
                      });
                  } else {
                      console.error('Unexpected error:', res.data);
                      uni.showToast({
                          title: 'Unexpected error',
                          icon: 'error',
                      });
                  }
              },
              fail: (err) => {
                  console.error('Request failed:', err);
                  uni.showToast({
                      title: 'Network error',
                      icon: 'error',
                  });
              },
              complete: () => {
                  this.isSubmitting = false;
              },
          });
      },
	  
	  goToRegister() {
		  uni.navigateTo({
		  	url: '/pages/register/register',
		  });
	  },
	  
	  goToForgotPassword() {
		  
	  },
  
      checkAuthAndRedirect() {
          const token = uni.getStorageSync("jwt_token"); // Check if JWT token exists
          if (token) {
              // User is logged in, navigate to eCommerce page
              uni.reLaunch({
                  url: '/pages/landing/landingScreen', // Replace with your eCommerce page route
              });
          } else {
              // User is not logged in, navigate to the index page
              uni.reLaunch({
                  url: '/pages/index/index', // Replace with your index page route
              });
          }
      },
  },
};
</script>
<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		gap: 16px;
		background-color: #ffffff;
		border-radius: 20px;
		padding: 20px;
		box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); /* Drop shadow added */
		z-index: 50; /* Ensure it appears above the navbar */
	}
	.title-container {
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	.title {
		font-size: 30px;
	}
	.span {
		color: red;
	}
	input { 
		font-size: 14px;
		height: 60px;
		border: 1px solid #DBDBDC;
		border-radius: 8px;
		padding: 20px;	
	}
	button {
		height: 60px;
		background-color: navy;
		color: #ffffff;
		border-radius: 12px;
		font-size: 24px;
	}
	.forgot-password {
		text-align: center;
		font-size: 14px;
		font-weight: bold;
		color: blue;
		text-decoration: underline;
	}
	.title-content {
		font-size: 14px;
	}
	.register {
		color: blue;
		text-decoration: underline;
		font-weight: bold;
	}
	.company-title {
		font-weight: bold;
	}
	.login-button {
		width: 100%;
	}
	
</style>
