<template>
    <div>
      <h1>Top Rated Movies</h1>
      <v-container>
        <v-row>
          <v-col v-for="movie in movies" :key="movie.id" cols="12" sm="6" md="4">
            <v-card @click="goToMovie(movie.id)">
              <v-img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"></v-img>
              <v-card-title>{{ movie.title }}</v-card-title>
              <v-card-subtitle>Average Votes: {{ movie.vote_average }} | Votes: {{ movie.vote_count }}</v-card-subtitle>
              <v-card-text>Popularity: {{ movie.popularity }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-pagination v-model="page" :length="totalPages" @input="fetchMovies"></v-pagination>
      </v-container>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import axios from 'axios';
  
  export default defineComponent({
    name: 'TopRatedMovies',
    data() {
      return {
        movies: [] as any[],
        page: 1,
        totalPages: 0,
      };
    },
    created() {
      this.fetchMovies();
    },
    methods: {
      fetchMovies() {
        axios
          .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=2ce444e2f1d358a25becb7c52712b5c0&page=${this.page}`)
          .then((response) => {
            this.movies = response.data.results;
            this.totalPages = response.data.total_pages;
          });
      },
      goToMovie(id: number) {
        this.$router.push({ name: 'MovieDetails', params: { id } });
      },
    },
  });
  </script>
  