<template>
  <view class="form">
    <view class="container">
		<IndicatorComponentVue />
		<view class="title-container">
			<text class="title">Review Form</text>
			<text class="title-content">Review the information filled up</text>
		</view>
		
		<view class="input-group">
			<label>Email Address <image src="../../../static/edit-02.png" /></label>
			<text>{{ data.accountInfo.email }}</text>
		</view>
		<view class="input-group">
			<label>Birthday <image src="../../../static/edit-02.png" /></label>
			<text>{{ data.personalInfo.birthday }}</text>
		</view>
		<view class="input-group">
			<label>Mobile Number <image src="../../../static/edit-02.png" /></label>
			<text>{{ data.personalInfo.phone }}</text>
		</view>
		<view class="input-group">
			<label>Province <image src="../../../static/edit-02.png" /></label>
			<text>{{ data.personalInfo.province }}</text>
		</view>
		<ContinueButton label="Submit" @click="handleSubmit" />
    </view>
  </view>
</template>

<script>
import ContinueButton from '../ContinueButton.vue';
import IndicatorComponentVue from '../IndicatorComponent.vue';

export default {
	data() {
		return {
			isSubmitting: false,
		}
	},
  components: {
    ContinueButton,
	IndicatorComponentVue
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
	  handleSubmit() {
		  if (this.isSubmitting) {
		      // Prevent another submission if the current one is still in progress
		      return;
		    }
			this.isSubmitting = true;
			
			uni.request({
		  	url: 'http://127.0.0.1:8000/api/v1/users',
			method: 'POST',
			data: {
				email : this.data.accountInfo.email,
				password: this.data.accountInfo.password,
				password_confirmation: this.data.accountInfo.confirmPassword,
				birthday: this.data.personalInfo.birthday,
				phone: this.data.personalInfo.phone,
				province: this.data.personalInfo.province,
			},
			success: (res) => {
				console.log('Response: ', res);
				if(res.statusCode === 201) {
					uni.showToast({
						title: 'Submitted successfully!',
						icon: 'success',
					});	
					setTimeout(() => {
					        uni.navigateTo({
					        url: '/pages/login/login' // Update the path to your login page
					    });
					}, 1000); 	
				} else {
					console.error('Submission failed:', res.data);
					uni.showToast({
						title: 'Submission failed',
						icon: 'error',
					});
				}
			}, fail: (err) => {
				console.error('Request failed:' , err);
				uni.showToast({
					title: 'Network error',
					icon: 'error'
				});
			},
			complete: () => {
				this.isSubmitting = false;
			}
		  })
	  }
  }
};
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
		background-color: #ffffff;
		border-radius: 20px;
		padding: 20px;
		box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); /* Drop shadow added */
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
	.input-group {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.input-group label {
		font-size: 16px;
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.input-group label image {
		width: 16px;
		height: 16px;
	}
	.input-group text {
		color: gray;
		font-size: 14px;
	}
	input { 
		height: 60px;
		width: 100%;
		border: 1px solid #DBDBDC;
		border-radius: 8px;
		padding: 20px;	
	}
	button {
		height: 60px;
		width: 100%;
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
	.form-validation {
		display: flex;
		flex-wrap: wrap;
	}
	.form-validation text {
		display: flex;
		align-items: center;
		gap: 8px;
		min-width: 140px;
	}
	.form-validation text image {
		width: 12px;
		height: 12px;
	}
	.continue-btn {
		width: 100%;
	}
	
</style>

