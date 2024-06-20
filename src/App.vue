<script setup lang="ts">
import Home from "./components/home.vue";
</script>

<template>
  <home/>
</template>

<style scoped>

@media (max-width: 600px) {
  html, body {
    overflow: hidden;
    height: 100%;
  }

  button {
    margin: 0.5rem 0;
    width: 100%;
  }
}
</style>

