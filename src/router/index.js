import { createRouter, createWebHistory } from 'vue-router';
import index from '../views/index.vue';
import Blog from '../views/Blog.vue';
import Header from '../views/header/header.vue';

const routes = [
  { path: '/', component: index },
  { path: '/blog', component: Blog },
  { path: '/header', component: Header },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;