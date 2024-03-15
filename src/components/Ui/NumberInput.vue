<template>
  <div class="custom-input">
    <input
      :placeholder="placeholder"
      :type="type"
      :required="required"
      :value="modelValue"
      :pattern="pattern"
      @input="updateInput"
    />
  </div>
</template>
<script>
export default {
  name: "numberInput",
  props: {
    placeholder: { type: String, required: true },
    type: { type: String, required: true },
    required: true,
    modelValue: [String, Number],
    pattern: { type: String, required: true },
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
<style scoped>
.custom-input {
  position: relative;
}
.custom-input:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;

  margin: auto 0;
  width: 31px;
  height: 60px;
  background: url("https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Non-EU-section-with-UA.png/64px-Non-EU-section-with-UA.png")
    no-repeat;
  background-size: contain;
  background-position: center;
}
input {
  outline: none;
  width: 360px;
  height: 60px;
  left: 47px;
  font-family: var(--font-primary);
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.04em;
  padding-left: 37px;
  border: 1px solid var(--color-lightgrey);
  border-radius: 0 4px 4px 0;
  text-align: center;
}
input::placeholder {
  color: var(--color-lightgrey);
  text-align: center;
}
input:focus-visible {
  border-color: var(--color-secondary);
  text-align: left;
}
/* input: {
  background-color: red;
} */
</style>
