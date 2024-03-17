<template>
  <div class="wrapper">
    <div class="leftBox">
      <div class="switchForm">
        <div @click="toggleTabs(0)" :class="{ active: activeTabIndex === 0 }">
          <p>За номером авто</p>
        </div>
        <div @click="toggleTabs(1)" :class="{ active: activeTabIndex === 1 }">
          <p>За параметрами</p>
        </div>
      </div>

      <form class="form" @submit.prevent="onSubmitForm" ref="myForm">
        <div class="inputNumber">
          <numberInput
            type="text"
            v-model.trim="dataForm.inputNumber"
            placeholder="AA1234AA"
            pattern="^[a-zA-Zа-яА-Я]{2}\d{4}[a-zA-Zа-яА-Я]{2}$"
            required
          />
        </div>
        <div class="inputAge">
          <h4>Вік страхувальника <span> (повних років)</span></h4>
          <myInput
            placeholder="21"
            type="text"
            v-model.trim.number="dataForm.inputAge"
            pattern="^(7[4-5]|[3-6]\d|2[0-9]|1[4-9])$"
            required
          />
        </div>
        <div class="address">
          <h4>Місце реєстрації власника ТЗ</h4>

          <!-- <el-input v-model="dataForm.inputAddress" style="width: 240px">
            <template #prefix>
              <el-icon class="el-input__icon"><Search /></el-icon>
            </template>
          </el-input> -->
          <!-- <el-input
            v-model="dataForm.inputAddress"
            style="width: 240px"
            placeholder="Type something"
            :prefix-icon="icons.Search"
          /> -->
          <div class="input-address">
            <myInput
              placeholder="Київ, Київська обл., 01001"
              type="text"
              v-model.trim="dataForm.inputAddress.addressString"
              required
              :style="{ 'padding-left': '45px', width: '335px' }"
            />
            <svg class="icon" width="14" height="14" viewBox="0 0 32 32">
              <!-- <use xlink:href="../assets/sprite.svg#search"></use> -->
              <path
                d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"
              ></path>
            </svg>
          </div>

          <div class="tags">
            <tags v-bind:tags="tags" @addInput="addInput" />
          </div>
        </div>
        <myButton class="btn" type="submit">Продовжити</myButton>
        <p>
          Розрахунок можливий тільки якщо авто вже було колись застраховано.
        </p>
      </form>
    </div>
    <div
      class="rightBox"
      :style="{
        background: `no-repeat url(${urlImg})`,
        'background-size': 'cover',
        'background-position-x': 'center',
      }"
    ></div>
  </div>
</template>
<script>
import { Search } from "@element-plus/icons-vue";
import { ElMessage, ElNotification } from "element-plus";
import { getTariffFromApi } from "./utils/fetchApi.js";
import { inject } from "vue";
export default {
  components: {
    Search,
  },
  props: {
    urlImg: { type: String, default: "../assets/istart.png" },
    businessKey: { type: String },
  },
  data() {
    return {
      tags: [
        { id: 1, city: "Київ", code: "UA80000000000093317" },
        { id: 2, city: "Львів", code: "UA46060250010015970" },
        { id: 3, city: "Дніпро", code: "UA12020010010037010" },
        { id: 4, city: "Харків", code: "UA63120270010096107" },
        { id: 5, city: "Одеса", code: "UA51100270010076757" },
      ],
      activeTabIndex: 0,

      dataForm: {
        inputNumber: "",
        inputAddress: {
          code: "",
          addressString: "",
        },
        inputAge: "",
      },
    };
  },
  methods: {
    toggleTabs(tabIndex) {
      this.activeTabIndex = tabIndex;
    },
    async onSubmitForm(value) {
      const data = {
        businessKey: this.businessKey,
        value: {
          registrationCarNumber: this.dataForm.inputNumber.toUpperCase(),
          carRegistrationCityCode: this.dataForm.inputAddress.code
            ? this.dataForm.inputAddress.code
            : "UA80000000000093317",
          birthDate: this.dataForm.inputAge,
        },
      };
      this.store.methods.toggleGlobalLoading();
      const result = await getTariffFromApi(data);

      this.store.methods.toggleGlobalLoading();
      if (!result) {
        ElMessage.error("Oops, this is a error .");
        return;
      }
      this.dataForm = {
        inputNumber: "",
        inputAddress: {
          code: "",
          addressString: "",
        },
        inputAge: "",
      };
      const { tariff } = result.data;
      ElNotification({
        title: "Ваш тарифний план",
        message: `${tariff}`,
        type: "success",
      });
    },
    addInput(tag) {
      const { city, code } = tag;

      this.dataForm.inputAddress = {
        code,
        addressString: city,
      };
    },
  },
  setup() {
    const icons = { Search };
    const store = inject("store");

    return {
      icons,
      store,
    };
  },
};
</script>
<style lang="css" scoped>
.wrapper {
  padding: 60px 95px;
  display: flex;
  justify-content: space-around;
}
.rightBox {
  width: 458px;
  height: 514px;
  border: 1px solid var(--color-lightgrey);
  border-radius: 4px;
  background: #ebeef5;
}
.leftBox {
  display: block;
}
.switchForm {
  display: flex;
  gap: 38px;
  cursor: pointer;
}
.switchForm p {
  font-family: var(--font-primary);
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
}
.active {
  border-bottom: 2px solid var(--color-secondary);
  color: var(--color-secondary);
}
.form {
  display: flex;
  flex-direction: column;
}
.inputNumber {
  margin-top: 40px;
}
.inputAge {
  margin-top: 40px;
}

h4 {
  font-family: var(--font-primary);
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--color-primary);
}
h4 span {
  composes: p;
  color: var(--color-grey);
}
.address {
  margin-top: 24px;
}
.tags {
  display: flex;
  margin: 16px 0 0;
}
.btn {
  margin: 24px auto 0;
}
p {
  margin-top: 24px;
  font-family: var(--font-primary);
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
}
.input-address {
  position: relative;
}
.icon {
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  width: 14px;
  height: 14px;
  /* background-image: url("../../assets/istar.png");  */
  background-size: cover;
  fill: var(--color-lightgrey);
}
</style>
