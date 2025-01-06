<template>
  <view class="form">
	  <view class="container">
			<IndicatorComponentVue />
		  	<view class="title-container">
		  		<text class="title">Registration</text>
		  		<text class="title-content">Fill up all the information fields</text>
		  	</view>
		  <InputField
		    label="Birthday"
		    placeholder="mm-dd-yyyy"
		    v-model="localData.birthday"
			type="date"
		  />
		  <InputField
		    label="Mobile Number"
		    placeholder="e.g 098798877876"
		    type="number"
		    v-model="localData.phone"
		  />
		  <InputField
		    label="Province"
		    placeholder="select province"
		    type="text"
		    v-model="localData.province"
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
      localData: { ...this.data },
    };
  },
  computed: {
    isValid() {
      return this.localData.birthday && this.localData.phone.length >= 10 && this.localData.province;
    },
  },
  methods: {
    nextStep() {
		if(this.isValid) {
			this.$emit('update-data', this.localData);
			this.$emit('next');	
		} else {
			uni.showToast({
				title: "Please fill the required fields", icon: "none"
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

	.title-content {
		font-size: 14px;
	}
</style>
