<script setup>
import { ref, onMounted } from "vue";

const posts = ref([]);

onMounted(async () => {
  const response = await fetch("http://mindflow.kesug.com/backend/index.php");
  const data = await response.json();
  posts.value = data.posts;
});
</script>

<template>
  <div>
    <h1>ブログ記事</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
      </li>
    </ul>
  </div>
</template>