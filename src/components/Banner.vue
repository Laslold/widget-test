<template>
  <div class="wrapper">
    <h1>Страхування ОСЦПВ</h1>
    <div v-if="this.store.state.isFavorite === false">
      <favoriteButton @click="onClick" :store="this.store.state.isFavorite"
        >Додати в бажане</favoriteButton
      >
    </div>
    <div v-else>
      <favoriteButton
        @click="onClick"
        :style="{ 'font-size': ' 11px' }"
        :store="this.store.state.isFavorite"
        >Видалити з бажаного</favoriteButton
      >
    </div>
  </div>
</template>
<script>
import { inject } from "vue";
export default {
  name: "banner",
  methods: {
    onClick() {
      this.store.state.isFavorite = !this.store.state.isFavorite;
    },
  },
  setup() {
    const store = inject("store");

    return {
      store,
    };
  },
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
