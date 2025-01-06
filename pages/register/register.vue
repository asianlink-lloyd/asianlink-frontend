<template>
  <CustomHeaderVue />
  <view class="register">
    <view v-if="currentStep === 1">
      <AccountInfo
        :data="formData.accountInfo"
        @update-data="updateAccountInfo"
        @next="goToNextStep"
      />
    </view>
    <view v-else-if="currentStep === 2">
      <PersonalInfo
        :data="formData.personalInfo"
        @update-data="updatePersonalInfo"
        @next="goToNextStep"
        @prev="goToPreviousStep"
      />
    </view>
    <view v-else-if="currentStep === 3">
      <Confirmation
        :data="formData"
        @submit="handleSubmit"
        @prev="goToPreviousStep"
      />
    </view>
    <FooterComponentVue />
  </view>
</template>

<script>
import AccountInfo from '../components/Register/AccountInfo.vue';
import PersonalInfo from '../components/Register/PersonalInfo.vue';
import Confirmation from '../components/Register/Confirmation.vue';
import CustomHeaderVue from '../components/CustomHeader.vue';
import FooterComponentVue from '../components/FooterComponent.vue';

export default {
  components: {
    AccountInfo,
    PersonalInfo,
    Confirmation,
    CustomHeaderVue,
    FooterComponentVue,
  },
  data() {
    return {
      currentStep: 1, // Start at AccountInfo step
      formData: {
        accountInfo: {
          email: '',
          password: '',
        },
        personalInfo: {
          birthday: '',
          phone: '',
          province: '',
        },
      },
    };
  },
  methods: {
    updateAccountInfo(data) {
      this.formData.accountInfo = data; // Update account info
    },
    updatePersonalInfo(data) {
		console.log('Updated PersonalInfo Data:', data); // Debug log
        this.formData.personalInfo = data; // Update personal info
        console.log('FormData after update:', this.formData); // Verify the data update
    },
    goToNextStep() {
        console.log('Current Step:', this.currentStep); // Debug log
        console.log('Validation Result:', this.isStepValid()); // Check validation result
    
        if (this.isStepValid()) {
          if (this.currentStep < 3) { // Restrict to a maximum step of 3
            this.currentStep += 1; // Proceed to the next step
            console.log('Proceeding to Step:', this.currentStep); // Debug log
          } else {
            console.warn('Already at the last step.'); // Debug log
          }
        }
      },
    goToPreviousStep() {
      if (this.currentStep > 1) {
        this.currentStep -= 1; // Go back one step
      }
    },
    handleSubmit() {
      console.log('Final Registration Data:', this.formData);
      alert('Registration successful!');
      this.resetForm(); // Reset form after submission
    },
    isStepValid() {
      if (this.currentStep === 1) {
        // Validate AccountInfo
        const { email, password } = this.formData.accountInfo;
        return email && password.length >= 6;
      }
      if (this.currentStep === 2) {
        // Validate PersonalInfo
        const { birthday, phone, province } = this.formData.personalInfo;
        return birthday && phone && province;
      }
      return true; // Confirmation step doesn't need validation
    },
    resetForm() {
      this.currentStep = 1; // Reset to the first step
      this.formData = {
        accountInfo: {
          email: '',
          password: '',
        },
        personalInfo: {
          birthday: '',
          phone: '',
          province: '',
        },
      };
    },
  },
};
</script>

<style scoped>
	.register {
		padding: 107px 20px 0 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 100vh;
		background-color: #F8F8F8;
		gap: 20px;
	}
</style>
