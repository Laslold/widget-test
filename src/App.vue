<template lang="">
  <div v-loading.fullscreen.lock="store.state.loading">
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
  </div>
</template>
<script>
import Banner from "./components/Banner.vue";
import Steps from "./components/Steps.vue";
import Form from "./components/Form.vue";
import store from "./store";
import { ElNotification } from "element-plus";
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
      this.store.methods.toggleGlobalLoading();
      try {
        const [key, response] = await Promise.all([
          fetchFromApi("widget_start"),
          fetchFromApi("widget_params"),
        ]);

        this.businessKey = key.data.businessKey;
        this.params = response.data.ui_setting.banner_img_url;
      } catch (error) {
        ElNotification({
          title: "Помилка",
          message: `Помилка при обробці запитів`,
          type: "error",
        });
        // console.error("Ошибка при выполнении запросов:", error);
      }
      this.store.methods.toggleGlobalLoading();
    },
  },
  mounted() {
    this.fetchKey();
  },
  setup() {
    provide("store", store);
    return {
      store,
    };
  },
};
</script>
<style scoped></style>
