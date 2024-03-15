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
import axios from "axios";

export default {
  components: { Banner, Steps, Form },
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
          axios.post(
            "https://ecom-proxy.codot.pro/api/v1/widgets/widget_start",
            { value: { widget_code: "VUE_TEST" } }
          ),
          axios.post(
            "https://ecom-proxy.codot.pro/api/v1/widgets/widget_params",
            {
              value: { widget_code: "VUE_TEST" },
            }
          ),
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
};
</script>
<style scoped></style>
