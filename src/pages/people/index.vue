<template>
  <div class="pplPage container main-container">
    <h1>新增人物資料表單</h1>
    <p>
      這是新增台灣政商人物資料的表單 歡迎大家花費 5-10 分鐘的時間幫忙填寫資料
      如果有任何問題 歡迎來信 readr@readr.tw 或是私訊粉專
      https://www.facebook.com/readr.tw/ 我們會有專人為你解答 謝謝你的參與！
    </p>

    <form action v-on:submit.prevent="checkForm">
      <div v-for="field in character" :key="field.label" class="fieldBlock">
        <h5>{{ field.label }}</h5>
        <p>{{ field.info }}</p>
        <input :type="field.inputStatus.type" v-model="field.value" />
      </div>

      <!-- <div class="fieldBlock">
        <h5>人物的生理性別</h5>
        <input
          type="radio"
          name="gender"
          value="female"
          v-model="character.gender"
        />
        <label>女</label>
        <input
          type="radio"
          name="gender"
          value="male"
          v-model="character.gender"
        />
        <label>男</label>
      </div> -->

      <div class="fieldBlock">
        <h5>協作者的資料與心得</h5>
        <p>
          以下欄位皆選填，請自由填答，
          我們會拿你的資料做什麼、你有什麼好處、我們不會亂來
          blablablabinbinbapsushinomidorikurasushisushiro
        </p>
      </div>

      <div class="fieldBlock">
        <h5>你的大名</h5>
        <input type="text" v-model="editor.name" />
        <h5>你的email address</h5>
        <input type="email" v-model="editor.email" />
        <h5>你的協作心得</h5>
        <textarea
          name
          id
          cols="30"
          rows="10"
          v-model="editor.feedback"
        ></textarea>
      </div>
      <b-button type="submit">送出</b-button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { graphql } from "../../../graphQL/graphql.util";
import { ADD_PPL } from "../../../graphQL/graphql.types";

export default {
  data() {
    return {
      character: {
        name: {
          label: "人物的姓名",
          info: "作答示範：原住民名字中間使用半形空格，例：Walis Nokan",
          value: "",
          inputStatus: { type: "text" },
        },
        alternative_name: {
          label: "人物是否有其他名字",
          info: "",
          value: "",
          inputStatus: { type: "text" },
        },
        former_name: {
          label: "人物是否有其他別稱",
          info: "",
          value: "",
          inputStatus: { type: "text" },
        },
        gender: {
          label: "人物的生理性別",
          info: "",
          value: "",
          inputStatus: { type: "radio" },
        },
        email: {
          label: "人物的電子信箱",
          info: "作答示範：readr123@gmail.com",
          value: "",
          inputStatus: { type: "text" },
        },
        birth_date: {
          label: "出生日期",
          info: "",
          value: "",
          inputStatus: { type: "date" },
        },
        death_date: {
          label: "死亡日期",
          info: "",
          value: "",
          inputStatus: { type: "date" },
        },
        // image: {
        //   label: "圖像",
        //   info: "",
        //   value: "",
        //   inputStatus: { type: "text" },
        // },
        summary: {
          label: "總結",
          info: "",
          value: "",
          inputStatus: { type: "text" },
        },
        biography: {
          label: "傳記",
          info: "",
          value: "",
          inputStatus: { type: "text" },
        },
        national_identity: {
          label: "國民身分",
          info: "",
          value: "",
          inputStatus: { type: "text" },
        },
      },
      editor: {
        name: "",
        email: "",
        feedback: "",
      },
    };
  },
  methods: {
    async checkForm() {
      // destructure character field
      const {
        name,
        alternative_name,
        former_name,
        email,
        gender,
        birth_date,
        death_date,
        summary,
        biography,
        national_identity,
      } = this.character;

      // commit to graphQL
      await graphql(ADD_PPL, {
        name: name.value,
        alternative_name: alternative_name.value,
        former_name: former_name.value,
        email: email.value,
        gender: gender.value,
        birth_date: birth_date.value,
        death_date: death_date.value,
        summary: summary.value,
        biography: biography.value,
        national_identity: national_identity.value,
      });

      // Greet and redirect to home
      alert("感謝您的幫助！");
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.fieldBlock {
  padding: 20px;
  margin: 29px auto;
  border: 1px solid #756060;
  box-sizing: border-box;
}
</style>
