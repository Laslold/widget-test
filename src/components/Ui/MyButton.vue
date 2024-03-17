<template lang="">
  <button class="btn"><slot></slot></button>
</template>
<script>
export default {
  name: "myButton",
  props: { type: { type: String, required: true } },
};
</script>
<style scoped>
.btn {
  padding: 8px 20px;
  gap: 4px;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: var(--color-secondary);
  color: var(--color-white);
  font-family: var(--font-primary);
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
}
.btn:hover {
  composes: btn;
  border: 1px solid var(--color-secondary);
  background-color: var(--color-white);
  color: var(--color-secondary);
}
</style>
