<template>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title class="animate__animated animate__fadeInLeft">MovieApp</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" class="animate__animated animate__fadeIn">Home</v-btn>
      <v-btn to="/favorites" class="animate__animated animate__fadeIn">Favorites</v-btn>
    </v-app-bar>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'NavBar',
  });
  </script>
  
  <style scoped>
  .v-toolbar-title {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: bold;
  }
  
  .v-btn {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    margin-right: 15px;
    color: white;
  }
  
  .animate__animated {
    animation-duration: 1s;
  }
  
  .animate__fadeInLeft {
    --animate-duration: 1s;
  }
  
  .animate__fadeIn {
    --animate-duration: 1s;
  }
  </style>
  