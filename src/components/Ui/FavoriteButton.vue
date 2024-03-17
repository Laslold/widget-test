<template lang="">
  <button class="btn">
    <svg
      class="icon"
      v-if="!store"
      width="12px"
      height="12px"
      viewBox="0 0 32 32"
    >
      <path
        d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"
      ></path>
    </svg>
    <svg
      class="icon"
      v-else
      :style="{ fill: '#ff0000' }"
      width="12px"
      height="12px"
      viewBox="0 0 32 32"
    >
      <path
        d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"
      ></path>
    </svg>
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "favoriteButton",
  props: { store: { type: Boolean } },
};
</script>
<style scoped>
.btn {
  position: relative;
  width: 162px;
  height: 32px;
  padding: 0px 20px;

  border: 1px solid var(--color-grey-text);

  border-radius: 4px;
  background-color: var(--color-white);
  color: var(--color-grey);
  font-family: var(--font-primary);
  font-weight: 500;
  font-size: 13px;
  line-height: 24px;
  text-align: right;
  cursor: pointer;
}
.btn:hover {
  composes: btn;
  border: 1px solid var(--color-secondary);
  background-color: var(--color-white);
  fill: var(--color-secondary);
  color: var(--color-secondary);
  /* color: var(--color-grey); */
}
.icon {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  /* background-image: url("../../assets/istar.png");  */
  background-size: cover;
  /* fill: rgb(229, 255, 0); */
}
</style>
