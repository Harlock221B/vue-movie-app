<template>
    <div>
      <v-container>
        <v-row>
          <v-col>
            <v-img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"></v-img>
          </v-col>
          <v-col>
            <h1>{{ movie.title }}</h1>
            <p>{{ movie.overview }}</p>
            <p>Genres: <span v-for="genre in movie.genres" :key="genre.id">{{ genre.name }}</span></p>
            <p>Release Date: {{ movie.release_date }}</p>
            <p>Revenue: {{ movie.revenue }}</p>
            <v-btn @click="toggleFavorite">
              {{ isFavorite ? 'Remove from Favorites' : 'Add to Favorites' }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import axios from 'axios';
  import { mapState, mapActions } from 'vuex';
  import { RootState, Movie } from '../store/types';
  
  export default defineComponent({
    name: 'MovieDetails',
    data() {
      return {
        movie: {} as Movie,
      };
    },
    computed: {
      ...mapState<RootState>({
        favorites: (state: RootState) => state.favorites,
      }),
      isFavorite(): boolean {
        return (this as any).favorites.some((f: Movie) => f.id === this.movie.id);
      },
    },
    created() {
      this.fetchMovie();
    },
    methods: {
      ...mapActions(['addFavorite', 'removeFavorite']),
      fetchMovie() {
        const movieId = this.$route.params.id;
        axios
          .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=2ce444e2f1d358a25becb7c52712b5c0`)
          .then((response) => {
            this.movie = response.data;
          });
      },
      toggleFavorite() {
        if (this.isFavorite) {
          this.removeFavorite(this.movie);
        } else {
          this.addFavorite(this.movie);
        }
      },
    },
  });
  </script>
  