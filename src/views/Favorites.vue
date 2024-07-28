<template>
    <div>
      <h1>Favorites</h1>
      <v-btn @click="clearFavorites">Clear Favorites</v-btn>
      <div v-if="favorites.length === 0">
        <p>No favorite movies</p>
      </div>
      <v-container v-else>
        <v-row>
          <v-col v-for="movie in favorites" :key="movie.id" cols="12" sm="6" md="4">
            <v-card @click="goToMovie(movie.id)">
              <v-img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"></v-img>
              <v-card-title>{{ movie.title }}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { mapState, mapActions } from 'vuex';
  
  export default defineComponent({
    name: 'FavoriteMovies',
    computed: {
      ...mapState(['favorites']),
    },
    methods: {
      ...mapActions(['clearFavorites']),
      goToMovie(id: number) {
        this.$router.push({ name: 'MovieDetails', params: { id } });
      },
    },
  });
  </script>
  