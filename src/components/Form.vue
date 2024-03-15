<template>
  <div class="wrapper">
    <div class="leftBox">
      <div class="switchForm">
        <div @click="toggle(1)" :class="{ active: active === 1 }">
          <p>За номером авто</p>
        </div>
        <div @click="toggle(2)" :class="{ active: active === 2 }">
          <p>За параметрами</p>
        </div>
      </div>

      <form class="form" @submit.prevent>
        <div class="inputNumber">
          <numberInput
            type="text"
            v-bind:value="inputNumber"
            @input="inputNumber = $event.target.value"
            placeholder="AA1234AA"
            required
          />
        </div>
        <div class="inputAge">
          <h4>Вік страхувальника <span> (повних років)</span></h4>
          <myInput
            placeholder="21"
            type="text"
            v-bind:value="inputAge"
            @input="inputAge = $event.target.value"
            required
          />
        </div>
        <div class="address">
          <h4>Місце реєстрації власника ТЗ</h4>
          <myInput
            placeholder="Київ, Київська обл., 01001"
            type="text"
            v-bind:value="inputAddress"
            @input="inputAddress = $event.target.value"
            required
          />

          <div class="tags"><tags v-bind:tags="tags" @:click="onTag" /></div>
        </div>
        <myButton class="btn" type="submit" @:click="onSubmit"
          >Продовжити</myButton
        >
        <p>
          Розрахунок можливий тільки якщо авто вже було колись застраховано.
        </p>
      </form>
    </div>
    <div class="rightBox"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tags: [
        { id: 1, city: "Київ", code: "UA80000000000093317" },
        { id: 2, city: "Львів", code: "UA46060250010015970" },
        { id: 3, city: "Дніпро", code: "UA12020010010037010" },
        { id: 4, city: "Харків", code: "UA63120270010096107" },
        { id: 5, city: "Одеса", code: "UA51100270010076757" },
      ],
      active: 1,
      code: "",
      inputNumber: "",
      inputAddress: "",
      inputAge: "",
    };
  },
  methods: {
    toggle(divNumber) {
      this.active = divNumber;
    },
    onSubmit() {
      const createData = {
        registrationCarNumber: this.inputNumber,
        carRegistrationCityCode: this.inputAddress,
        birthDate: this.inputAge,
      };
      console.log(createData);
    },
    onTag() {
      console.log(this.code);
    },
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
</style>
