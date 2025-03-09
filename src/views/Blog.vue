<!-- src/views/Blog.vue -->
<template>
    <div>
      <h1>Blog</h1>
      <ul>
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
      </ul>
    </div>
  </template>
  
  <script>
    export default {
      name: 'Blog',
      data() {
        return {
          posts: [],
        };
      },
      async created() {
        const response = await fetch('http://localhost:8000/api/posts');
        this.posts = await response.json();
      },
    };
  </script>