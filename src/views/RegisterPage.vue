<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register">
      <input v-model="name" placeholder="Name" required />
      <input v-model="phone" placeholder="Phone" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <input v-model="bankAccount" placeholder="Bank Account" required />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',  // เปลี่ยนชื่อคอมโพเนนต์เป็นหลายคำ
  data() {
    return {
      name: '',
      phone: '',
      password: '',
      bankAccount: '',
    };
  },
  methods: {
    async register() {
      const response = await fetch("http://10.10.0.91:8080/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.name,
          phone: this.phone,
          password: this.password,
          bank_account: this.bankAccount,
        }),
      });
      const data = await response.json();
      console.log(data);
    },
  },
};
</script>
