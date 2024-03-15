<template>
  <input
    class="input"
    :value="modelValue"
    @input="updateInput"
    :placeholder="placeholder"
    :type="type"
    :required="required"
    :pattern="pattern"
  />
</template>
<script>
export default {
  name: "myInput",

  props: {
    placeholder: { type: String, required: true },
    type: { type: String, required: true },
    required: true,
    modelValue: [String, Number],
    pattern: { type: String },
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
<style scoped>
.input {
  width: 360px;
  height: 40px;
  border-radius: 4px;
  outline: none;
  border: 1px solid var(--color-lightgrey);
  padding: 3px 20px;
}
.input:focus-visible {
  border-color: var(--color-secondary);
}
</style>
