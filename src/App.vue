<template>
   <AppHeader />
   <div class="content"></div>
  <HelloWorld msg=""/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AppHeader from "./components/Header.vue";
export default {
  name: 'App',
  components: {
    HelloWorld,
    AppHeader,
  }
}
</script>

<style>
  .content {
  padding-top: 25px; /* ปรับ padding-top ตามความสูงของ header */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
