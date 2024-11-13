<template>
    <div class="buy-page">
      <!-- Display User's Entered Number Pairs -->
      <h2>Number Pairs: </h2>
      <div class="number-list">
        <p v-for="(pair, index) in numberPairs" :key="index">{{ pair }}</p>
      </div>
  
      <!-- Button to Input Numbers -->
      <div class="number-buttons">
        <button v-for="n in numbers" :key="n" @click="addNumber(n)">
          {{ n }}
        </button>
      </div>
  
      <!-- Submit Button for Pair -->
      <button v-if="currentPair.length === 2" @click="submitPair">Submit Pair</button>
  
      <!-- Display Error or Success Message -->
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'BuyPage',
    data() {
      return {
        numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], // Number buttons
        currentPair: [], // Store the current number pair being entered
        numberPairs: [], // Store the pairs that have been submitted
        errorMessage: '', // Error message if any
      };
    },
    mounted() {
      this.fetchNumberPairs();  // Fetch previously entered pairs when the page loads
    },
    methods: {
      // Add a number to the current pair
      addNumber(number) {
        if (this.currentPair.length < 2) {
          this.currentPair.push(number);
        }
      },
      
      // Submit the current pair to the backend and store it in the database
      async submitPair() {
        const pair = this.currentPair.join(''); // Join the numbers into a pair string
        try {
          const token = localStorage.getItem('token');
          if (!token) {
            this.errorMessage = 'You need to be logged in to submit a pair.';
            return;
          }
  
          // Send the pair to the backend
          await axios.post('http://127.0.0.1:8080/submit-pair', { pair }, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
  
          // Successfully submitted, clear the current pair and fetch updated pairs
          this.currentPair = [];
          this.fetchNumberPairs();  // Fetch updated number pairs
        } catch (error) {
          console.error('Error submitting pair:', error);
          this.errorMessage = 'Failed to submit pair. Please try again.';
        }
      },
  
      // Fetch the stored number pairs from the backend
      async fetchNumberPairs() {
        try {
          const token = localStorage.getItem('token');
          if (!token) {
            this.errorMessage = 'You need to be logged in to view your pairs.';
            return;
          }
  
          const response = await axios.get('http://127.0.0.1:8080/get-pairs', {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
  
          this.numberPairs = response.data.pairs; // Update the number pairs
        } catch (error) {
          console.error('Error fetching number pairs:', error);
          this.errorMessage = 'Failed to load pairs. Please try again.';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .buy-page {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .number-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
  }
  
  .number-buttons button {
    padding: 10px;
    font-size: 18px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .number-buttons button:hover {
    background-color: #45a049;
  }
  
  .number-list p {
    font-size: 18px;
    margin-bottom: 5px;
  }
  
  .error {
    color: red;
    text-align: center;
    margin-top: 10px;
  }
  
  button[type="submit"] {
    display: block;
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>
  