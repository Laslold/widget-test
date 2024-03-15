<template>
  <input class="input" :placeholder="placeholder" :type="type" />
</template>
<script>
export default {
  name: "myInput",
  props: {
    placeholder: { type: String, required: true },
    type: { type: String, required: true },
  },
};
</script>
<style scoped>
.input {
  width: 360px;
  height: 40px;
  border-radius: 4px;

  border: 1px solid var(--color-lightgrey);
  padding: 3px 20px;
}
</style>
