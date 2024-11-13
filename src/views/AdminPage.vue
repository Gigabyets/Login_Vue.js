<template>
  <div>
    <h1>Admin Page</h1>
    <div v-for="image in images" :key="image.url">
      <img :src="image.url" alt="Uploaded Image" width="200" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
    };
  },
  mounted() {
    this.fetchImages();
  },
  methods: {
    async fetchImages() {
      const response = await fetch("http://localhost:8080/images");
      const data = await response.json();
      this.images = data;
    },
  },
};
</script>
