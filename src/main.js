import { createApp } from "vue";
// import "./style.css";
import ElementPlus from "element-plus";

import "element-plus/dist/index.css";
import "./style.css";

import components from "./components/Ui";
import App from "./App.vue";
const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
});
app.use(ElementPlus).mount("#app");
