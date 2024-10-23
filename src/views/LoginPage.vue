<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input v-model="phone" placeholder="Phone" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',  // เปลี่ยนชื่อคอมโพเนนต์
  data() {
    return {
      phone: '',
      password: '',
    };
  },
  methods: {
    async login() {
      const response = await fetch("http://10.10.0.91:8080", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: this.phone,
          password: this.password,
        }),
      });
      const data = await response.json();
      console.log(data);
      // Redirect to Home
    },
  },
};
</script>
