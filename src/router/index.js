import { createRouter, createWebHistory } from 'vue-router';
import RegisterPage from '../views/RegisterPage.vue';  
import LoginPage from '../views/LoginPage.vue';        
import HomePage from '../views/HomePage.vue';          
const routes = [
  { path: '/register', component: RegisterPage },
  { path: '/login', component: LoginPage },
  { path: '/', component: HomePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
