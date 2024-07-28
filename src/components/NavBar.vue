<template>
  <v-app-bar app color="black" dark>
    <v-toolbar-title class="animate__animated animate__fadeInLeft">
      <v-btn to="/" class="app-title">Movue</v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn to="/favorites" class="animate__animated animate__fadeIn nav-btn">Favorites</v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar',
});
</script>

<style scoped>
.v-toolbar-title {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #4caf50;
}

.app-title {
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #4caf50;
}

.nav-btn {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  margin-right: 15px;
  color: white;
  background-color: #4caf50;
  text-transform: uppercase;
}

.v-app-bar {
  background-color: #000000;
  border-bottom: 2px solid #4caf50;
}

.v-btn {
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 20px;
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
