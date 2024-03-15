<template lang="">
  <header>Header</header>
  <nav>Navigation</nav>
  <main>
    <div class="container"><Banner /></div>
    <div class="container"><Steps /></div>
    <div class="container"><Form /></div>
  </main>
  <footer>Footer</footer>
</template>
<script>
import Banner from "./components/Banner.vue";
import Steps from "./components/Steps.vue";
import Form from "./components/Form.vue";
export default {
  components: { Banner, Steps, Form },
};
</script>
<style scoped></style>
