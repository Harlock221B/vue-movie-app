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
  color: #4caf50; /* Verde para o título */
}

.app-title {
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #4caf50; /* Verde para o título */
}

.nav-btn {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  margin-right: 15px;
  color: white;
  background-color: #4caf50; /* Fundo verde para os botões */
  text-transform: uppercase;
}

.v-app-bar {
  background-color: #000000; /* Preto como cor principal */
  border-bottom: 2px solid #4caf50; /* Borda inferior verde */
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
