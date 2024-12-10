<template>
	<view class="circle-container">
		<view v-for="step in steps"
		:key="step"
		:class="['circle', { active: currentStep >= step }]">{{ step }}</view>
	    <view class="line1"></view>
		<view class="line2"></view>
	</view>
</template>

<script>
	export default {
		data() {
				return {
					currentStep: 1, // The current step (set it dynamically)
					steps: [1, 2, 3], // Define the steps
				};
			},
			methods: {
				// Example: Method to increment steps (for testing)
				nextStep() {
					if (this.currentStep < this.steps.length) {
					this.currentStep++;
				}
			},
		},	
	}
</script>

<style scoped>
.circle-container {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 240px;
}

.circle {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border: 2px solid lightgray;
  border-radius: 50%;
  font-size: 16px;
  background-color: #ffffff; /* Default background */
  z-index: 1;
}

.circle.active {
	border: 2px solid navy;
  color: navy; /* Text color for active step */
  font-size: 16px;
}

.line1 {
  position: absolute;
  border: 1px solid lightgray;
  width: 50%;
  height: 0;
  top: 50%;
  z-index: 0;
}
.line2 {
  position: absolute;
  border: 1px solid lightgray;
  width: 50%;
  height: 0;
  top: 50%;
  right: 0%;
  z-index: 0;
}
</style>
