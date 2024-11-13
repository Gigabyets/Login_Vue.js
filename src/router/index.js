import { createRouter, createWebHistory } from 'vue-router';
import RegisterPage from '../views/RegisterPage.vue';  
import LoginPage from '../views/LoginPage.vue';        
import HomePage from '../views/HomePage.vue';      
import PayPage from '@/views/PayPage.vue';
import BuyPage from '@/views/BuyPage.vue'; 

const routes = [
  {
    path: '/buy',
    name: 'BuyPage',
    component: BuyPage,  // Route for BuyPage
  },
  
  { path: '/register', component: RegisterPage },
  {
    path: '/home',
    component: HomePage,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token');
      if (!token) {
        next('/login');
      } else {
        next();
      }
    }
  },
  { path: '/login', component: LoginPage },
  { path: '/', component: LoginPage },
  { 
    path: '/pay', 
    component: PayPage,
    beforeEnter: (to, from, next) => {
      // ตรวจสอบการล็อกอิน
      const token = localStorage.getItem('token'); // หรือใช้ Vuex ในการจัดการสถานะการล็อกอิน
      if (token) {
        next(); // ถ้ามี token ให้ไปหน้า PayPage
      } else {
        next({ name: 'login' }); // ถ้าไม่มี token ให้ไปที่หน้า Login
      }
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
