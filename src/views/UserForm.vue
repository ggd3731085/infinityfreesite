<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");

const submitForm = async () => {
  //const url = "http://mindflow.kesug.com/api/usersave.php";
  const url = "http://localhost/backend/usersave.php";
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: name.value, email: email.value })
  });

  const result = await response.json();
  message.value = result.success || result.error;
};
</script>

<template>
  <div>
    <h2>登録フォーム</h2>
    <input v-model="name" placeholder="名前" />
    <input v-model="email" placeholder="メール" type="email" />
    <button @click="submitForm">送信</button>
    <p>{{ message }}</p>
  </div>
</template>

<style scoped>
    input { display: block; margin: 10px 0; padding: 8px; }
    button { padding: 10px; background: blue; color: white; }
</style>
