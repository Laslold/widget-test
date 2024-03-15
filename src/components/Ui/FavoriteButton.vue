<template lang="">
  <button class="btn"><span class="icon"></span><slot></slot></button>
</template>
<script>
export default {
  name: "favoriteButton",
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
  /* color: var(--color-grey); */
}
.icon {
  position: absolute;
  top: 50%;
  left: 10px; /* Регулируйте отступ иконки по горизонтали */
  transform: translateY(-50%);
  width: 12px; /* Размер иконки */
  height: 12px; /* Размер иконки */
  background-image: url("../../assets/istar.png"); /* Подставьте путь к вашей иконке */
  background-size: cover;
}
</style>
