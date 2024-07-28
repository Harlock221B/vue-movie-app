<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Movie App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/">Home</v-btn>
      <v-btn to="/favorites">Favorites</v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
  .v-application {
    font-family: 'Roboto', sans-serif;
  }
</style>
