<script setup>
import { ref } from "vue";
import logo from '/image/logo.png';

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
  <div class="header">
      <!--背景色  -->
    <div class="bg">
    </div>
    <!-- 画面レイアウトの中心 -->
    <div class="w">
        <a href="#" class="logo">
          <img :src="logo" alt="">
        </a>
        <div class="header-item">
          <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">宠物中心</a></li>
            <li><a href="#">购宠流程</a></li>
            <li><a href="#">服务网点</a></li>
            <li><a href="#">行业动态</a></li>
            <li><a href="#">服务保障</a></li>
            <li><a href="#">联系我们</a></li>
            </ul>
        </div>
        <div class="header-search">
          <!-- 検索インプット -->
           <input type="text" placeholder="検索...">
        </div>
        <div class="login-sign">
          <ul>
            <li>ログイン</li>
            <li>無料サインアップ</li>
          </ul>
        </div>
    </div>
  </div>
</template>

<style scoped>
  @import './header.css';
</style>
