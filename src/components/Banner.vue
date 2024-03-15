<template>
  <div class="wrapper">
    <h1>Страхування ОСЦПВ</h1>
    <favoriteButton>Додати в бажане</favoriteButton>
  </div>
</template>
<script>
export default {
  name: "banner",
};
</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
h1 {
  font-family: var(--font-secondary);
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
}
</style>
