<template>
  <view class="form">
	  <view class="container">
			<IndicatorComponentVue />
			<view class="title-container">
			    <text class="title">Registration</text>
			    <text class="title-content">Fill up all the information fields</text>
			</view>
			<InputField
				label="Email Address"
				placeholder="e.g dave@asinlink.ai"
				type="email"
				v-model="localData.email"
			/>
			<InputField
				label="Password"
				placeholder="enter password"
				type="password"
				v-model="localData.password"
				@input="validatePassword"
			/>
			<view class="form-validation">
			    <view :class="{ 'valid': passwordCriteria.hasUppercase }">
			        <image :src="passwordCriteria.hasUppercase ? validIcon : invalidIcon" /> One uppercase
			    </view>
			    <view :class="{ 'valid': passwordCriteria.hasLowercase }">
					<image :src="passwordCriteria.hasLowercase ? validIcon : invalidIcon" /> One lowercase
			    </view>
			    <view :class="{ 'valid': passwordCriteria.hasNumber }">
			        <image :src="passwordCriteria.hasNumber ? validIcon : invalidIcon" /> One number
			    </view>
			    <view :class="{ 'valid': passwordCriteria.hasSpecial }">
					<image :src="passwordCriteria.hasSpecial ? validIcon : invalidIcon" /> One special character
			    </view>
			    <view :class="{ 'valid': passwordCriteria.minLength }">
			        <image :src="passwordCriteria.minLength ? validIcon : invalidIcon" /> Min of 8 characters
			    </view>
			</view>
			<InputField 
				label="Confirm Password"
				placeholder="retype password"
				type="password"
				v-model="localData.confirmPassword"
				required
			/>
			<ContinueButton
				:disabled="!isValid"
				@click="nextStep"
			/>	
		</view>
	</view>
</template>

<script>
import InputField from '../InputField.vue';
import ContinueButton from '../ContinueButton.vue';
import validIcon from '@/static/ok-24.png';
import invalidIcon from '@/static/ok-25.png';
import IndicatorComponentVue from '../IndicatorComponent.vue';

export default {
  components: {
    InputField,
    ContinueButton,
	IndicatorComponentVue
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      localData: { ...this.data , password: '', confirmPassword: '' },
	  validIcon,
	  invalidIcon,	
	  passwordCriteria: {
	        hasUppercase: false,
	        hasLowercase: false,
	        hasNumber: false,
	        hasSpecial: false,
	        minLength: false,
	    },
    };
  },
  computed: {
    isValid() {
        const password = this.localData.password; // Retrieve the password value
        return (
          this.localData.email && // Ensure email is provided
          password.length >= 6 && // Check password length
          /[A-Z]/.test(password) && // At least one uppercase letter
          /[a-z]/.test(password) && // At least one lowercase letter
          /\d/.test(password) && // At least one number
          /[!@#$%^&*(),.?":{}|<>]/.test(password) // At least one special character
        );
    },
  },
  methods: {
    nextStep() {
      if (!this.localData.email || !this.localData.password || !this.localData.confirmPassword) {
            uni.showToast({
              title: "Please fill all required fields",
              icon: "none",
            });
            return;
          }
      
          if (this.localData.password !== this.localData.confirmPassword) {
            uni.showToast({
              title: "Passwords do not match",
              icon: "none",
            });
            return;
          }
      
          if (this.isValid) {
            this.$emit("update-data", this.localData);
            this.$emit("next"); // Emit the event to go to the next step
          } else {
            uni.showToast({
              title: "Password does not meet the criteria",
              icon: "none",
            });
          }
    },
	validatePassword() {
	    const password = this.localData.password;
	    this.passwordCriteria.hasUppercase = /[A-Z]/.test(password);
	    this.passwordCriteria.hasLowercase = /[a-z]/.test(password);
	    this.passwordCriteria.hasNumber = /\d/.test(password);
	    this.passwordCriteria.hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
	    this.passwordCriteria.minLength = password.length >= 8;
	}
  },
  watch: {
	  'localData.password' : function() {
		  this.validatePassword();
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
	font-weight: 500;
}
.title-content {
	font-size: 14px;
}
.form-validation {
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
}
.form-validation view {
	display: flex;
	align-items: center;
	gap: 8px;
	min-width: 140px;
	font-size: 12px;
}
.form-validation image {
  width: 12px;
  height: 12px;
}
.form-validation .valid {
  color: #000080;
}
</style>

