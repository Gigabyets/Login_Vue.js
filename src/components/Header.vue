<!-- src/components/Header.vue -->
<template>
    <header class="header">
        <img src="@/assets/Tt.png"   class="logo" />
      <nav>
        <ul>
        
          <li><a href="/">เข้าสู่ระบบ</a></li>
          <li><a href="/buy">ซื้อหวย</a></li>
          <li><a href="/Pay">เติมเงิน</a></li>
          <li> <router-link to="/home">บัญชี</router-link></li>
          
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  
  export default {
    name: "AppHeader",
  };
  </script>
  
  <style scoped>

  .logo {
  height: 80%; /* ให้ภาพมีความสูงเท่ากับ header */
  object-fit: contain; 
  margin-right: 1rem; /* เพิ่มระยะห่างระหว่าง logo กับเมนู */
}

  .header {
    z-index: 1000; /* เพื่อให้ header อยู่บนสุดของเลเยอร์ */
    position: fixed;
    top: 0;
    height: 60px;
    left: 0;
    width: 100%;
    background-color: #cf4121;
    color: white;
    padding: 1rem;
    display: flex;
  }
  nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    align-items: right;
  }
  a {
    color: white;
    text-decoration: none;
  }

 
  </style>
  