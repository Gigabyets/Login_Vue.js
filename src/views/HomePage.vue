<template>
  <div class="container">
    <!-- Display User Information -->
    <h1>Welcome: {{ user.name }}</h1>
    <p><strong>Phone:</strong> {{ user.phone }}</p>
    <p><strong>Bank Account:</strong> {{ user.bank_account }}</p>
    <p><strong>Balance:</strong> ${{ user.balance.toFixed(2) }}</p>

    <!-- Display Error Message if any -->
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

    <!-- Logout Button -->
    <button v-if="!errorMessage" class="logout-button" @click="logout">Logout</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomePage',
  data() {
    return {
      user: {
        name: '',
        phone: '',
        bank_account: '',
        balance: 0,
      },
      errorMessage: '',
    };
  },
  mounted() {
    this.fetchUserData();  // Fetch user data when the page loads
  },
  methods: {
    async fetchUserData() {
      try {
        const token = localStorage.getItem('token');
        
        if (!token) {
          this.errorMessage = 'You need to be logged in to view this page.';
          return;
        }

        // Call API to fetch user data
        const response = await axios.get('http://127.0.0.1:8080/home', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        this.user = response.data; // Update user data
      } catch (error) {
        console.error('Error fetching user data:', error);
        this.errorMessage = 'Unauthorized access. Please log in.';
      }
    },
    logout() {
      localStorage.removeItem('token'); // Remove token from localStorage
      this.$router.push('/login'); // Navigate to login page
    }
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align the content at the top */
  height: 100vh; /* Ensure the container fills the screen */
  box-sizing: border-box; /* Include padding in the height */
}

h1 {
  color: #4CAF50;
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  font-size: 18px;
  margin-bottom: 10px;
}

strong {
  font-weight: bold;
}

.error {
  color: red;
  text-align: center;
  margin-top: 10px;
}

.logout-button {
  display: block;
  width: 200px; /* Set fixed width for the button */
  padding: 10px;
  margin-top: 20px; /* Add some space above the button */
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-left: auto; /* Center the button horizontally */
  margin-right: auto;
}

.logout-button:hover {
  background-color: #d32f2f;
}
</style>
