<template>
  <v-app-bar app color="black" dark>
    <v-toolbar-title class="brand animate__animated animate__fadeIn">
      <v-btn to="/" class="brand-link">Movue</v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn to="/favorites" class="nav-btn animate__animated animate__fadeIn">
      <font-awesome-icon icon="heart" class="mr-2" />
      Favorites
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart);

export default defineComponent({
  name: 'NavBar',
  components: {
    FontAwesomeIcon
  }
});
</script>

<style scoped>
.v-app-bar {
  background-color: #000000;
  border-bottom: 2px solid #4caf50;
}

.brand {
  display: flex;
  align-items: center;
}

.brand-link {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #4caf50;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-decoration: none;
}

.brand-link:hover {
  color: #45a049;
}

.nav-btn {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: white;
  background-color: #4caf50;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  margin-left: 10px;
  text-transform: uppercase;
  text-decoration: none;
}

.nav-btn:hover {
  background-color: #45a049;
}

.font-awesome-icon {
  font-size: 18px;
  margin-right: 8px;
}

.animate__animated {
  animation-duration: 1s;
}
</style>
