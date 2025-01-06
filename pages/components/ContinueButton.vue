<template>
  <button
    class="continue-button"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Continue',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
.continue-button {
	height: 60px;
	width: 100%;
  	background-color: navy;
  	color: #ffffff;
  	border-radius: 12px;
  	font-size: 24px;
}
</style>
