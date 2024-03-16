<template lang="">
  <header>Header</header>
  <nav>
    <div>Navigation</div>
  </nav>
  <main>
    <div class="container"><Banner /></div>
    <div class="container"><Steps /></div>
    <div class="container">
      <Form :urlImg="params" :businessKey="businessKey" />
    </div>
  </main>
  <footer>Footer</footer>
</template>
<script>
import Banner from "./components/Banner.vue";
import Steps from "./components/Steps.vue";
import Form from "./components/Form.vue";
import store from "./store";

import { provide } from "vue";
import { fetchFromApi } from "./components/utils/fetchApi.js";
export default {
  components: { Banner, Steps, Form, fetchFromApi },
  data() {
    return {
      businessKey: "",
      params: "",
    };
  },
  methods: {
    async fetchKey() {
      try {
        const [key, response] = await Promise.all([
          fetchFromApi("api/v1/widgets/widget_start"),
          fetchFromApi("api/v1/widgets/widget_params"),
        ]);

        this.businessKey = key.data.data.businessKey;
        this.params = response.data.data.ui_setting.banner_img_url;
      } catch (error) {
        console.error("Ошибка при выполнении запросов:", error);
      }
    },
  },
  mounted() {
    this.fetchKey();
  },
  setup() {
    provide("store", store);
  },
};
</script>
<style scoped></style>
