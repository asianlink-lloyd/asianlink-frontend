<template>
  <view class="input-group">
    <label>{{ label }}<text class="span">*</text></label>
    <input
      class="input-field"
      :type="type"
      :placeholder="placeholder"
      v-model="value"
       @input="$emit('update:modelValue', value)"
    />
  </view>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      value: this.modelValue,
    };
  },
  watch: {
    modelValue(newValue) {
      this.value = newValue;
    },
  },
};
</script>

<style scoped>
.form {
  background-color: #DBDBDC;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Drop shadow added */
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
  border: 2px solid navy;
  border-radius: 40px;
  font-size: 16px;
  background-color: #ffffff;
  z-index: 1;
}
.line {
  position: absolute;
  border: 2px solid lightgray;
  width: 100%;
  height: 0;
  top: 50%;
}
.input-group {
	display: flex;
	flex-direction: column;
	gap: 4px;
  width: 100%;
}
.input-group label {
	font-size: 16px;
}
.span {
	color: red;
}
input {
  font-size: 14px;
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
.form-validation {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.form-validation image {
  width: 12px;
  height: 12px;
}
.form-validation .valid {
  color: #000080;
}
.continue-btn {
  width: 100%;
}
</style>
