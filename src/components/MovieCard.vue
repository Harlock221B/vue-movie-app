<template>
    <v-card @click="goToMovie" class="movie-card" outlined>
      <v-img
        :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
        class="movie-img"
        aspect-ratio="2"
      >
        <div class="overlay">
          <v-card-title class="movie-title">
            {{ movie.title }}
          </v-card-title>
        </div>
      </v-img>
      <v-card-text class="movie-details">
        <v-row>
          <v-col cols="6" class="movie-votes">
            <v-icon small class="mr-1">mdi-thumb-up</v-icon> {{ movie.vote_count }}
          </v-col>
          <v-col cols="6" class="movie-rating text-right">
            <v-icon small class="mr-1">mdi-star</v-icon> {{ movie.vote_average }}
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="movie-popularity">
            <v-icon small class="mr-1">mdi-chart-line</v-icon> Popularity: {{ movie.popularity }}
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'MovieCard',
    props: {
      movie: {
        type: Object,
        required: true,
      },
    },
    methods: {
      goToMovie() {
        this.$router.push({ name: 'MovieDetails', params: { id: this.movie.id } });
      },
    },
  });
  </script>
  
  <style scoped>
  .movie-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    width: 300px;
    height: 450px;
    border-radius: 16px;
    overflow: hidden;
  }
  .movie-card:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.3);
  }
  .movie-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: relative;
  }
  .overlay {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
    color: white;
    padding: 20px;
  }
  .movie-title {
    font-size: 22px;
    font-weight: bold;
  }
  .movie-details {
    background: #202020;
    color: white;
    padding: 20px;
  }
  .movie-votes, .movie-rating, .movie-popularity {
    font-size: 16px;
  }
  .v-icon {
    vertical-align: middle;
  }
  </style>
  