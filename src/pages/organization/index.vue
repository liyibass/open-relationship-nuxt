<template>
  <div class="pplPage container main-container">
    <h1>新增人物資料表單</h1>
    <p>
      這是新增台灣政商人物資料的表單 歡迎大家花費 5-10 分鐘的時間幫忙填寫資料
      如果有任何問題 歡迎來信 readr@readr.tw 或是私訊粉專
      https://www.facebook.com/readr.tw/ 我們會有專人為你解答 謝謝你的參與！
    </p>

    <form action v-on:submit.prevent="checkForm">
      <div class="fieldBlock">
        <h5>人物的姓名</h5>
        <p>作答示範：原住民名字中間使用半形空格，例：Walis Nokan</p>
        <input type="text" v-model="character.name" />
      </div>

      <div class="fieldBlock">
        <h5>人物是否有其他名字</h5>
        <input type="text" v-model="character.alternative_name" />
      </div>

      <div class="fieldBlock">
        <h5>人物是否有其他別稱</h5>
        <input type="text" v-model="character.former_name" />
      </div>

      <div class="fieldBlock">
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
      </div>

      <div class="fieldBlock">
        <h5>人物的電子信箱</h5>
        <p>作答示範：readr123@gmail.com</p>
        <input type="email" v-model="character.email" />
      </div>

      <div class="fieldBlock">
        <h5>資料來源</h5>
        <p>作答示範：www.readr.tw</p>
      </div>

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
      fieldList: [],
      character: {
        name: "",
        alternative_name: "",
        former_name: "",
        identifiers: "",
        email: "",
        gender: "",
        birth_date: "",
        death_date: "",
        image: "",
        summary: "",
        biography: "",
        national_identity: "",
        //contact_details: { label: "contact_details", type: Relationship, many: false, ref: 'Contact_detail' },
        links: "",
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
      } = this.character;
      await graphql(ADD_PPL, {
        name,
        alternative_name,
        former_name,
        email,
        gender,
        // identifiers: this.character.identifiers,
        // birth_date: this.character.birth_date,
        // death_date: this.character.death_date,
        // image: this.character.image,
        // summary: this.character.summary,
        // biography: this.character.biography,
        // national_identity: this.character.national_identity,
      });
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
