<template lang="">
  <button class="btn">
    <svg class="icon" v-if="!store">
      <use xlink:href="../../assets/sprite.svg#star-empty"></use>
    </svg>
    <svg class="icon" v-else :style="{ fill: '#ff0000' }">
      <use xlink:href="../../assets/sprite.svg#star-full"></use>
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
