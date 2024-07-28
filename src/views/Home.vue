<template>
  <v-container class="home-container">
    <v-row class="header">
      <v-col cols="12">
        <h1 class="title">Discover New Movies</h1>
      </v-col>
    </v-row>
    <v-row class="toolbar" align="center" justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-text-field
          v-model="search"
          label="Search for movies..."
          append-icon="mdi-magnify"
          class="search-bar"
          @input="onSearchInput"
          outlined
          dense
          clearable
          color="green"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="movies-list" align="center" justify="center">
      <v-col v-for="movie in movies" :key="movie.id" cols="12" sm="6" md="4" lg="3">
        <MovieCard :movie="movie" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <v-pagination
          v-model="page"
          :length="totalPages"
          @input="fetchMovies"
          circle
          color="green"
        ></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import MovieCard from '@/components/MovieCard.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    MovieCard,
  },
  data() {
    return {
      search: '',
      movies: [] as any[],
      page: 1,
      totalPages: 0,
    };
  },
  created() {
    this.fetchMovies();
  },
  watch: {
    search() {
      this.page = 1;
      this.fetchMovies();
    },
    page() {
      this.fetchMovies();
    }
  },
  methods: {
    onSearchInput() {
      this.page = 1;
      this.fetchMovies();
    },
    fetchMovies() {
      const query = this.search ? `&query=${this.search}` : '';
      const apiEndpoint = this.search
        ? `https://api.themoviedb.org/3/search/movie?api_key=2ce444e2f1d358a25becb7c52712b5c0${query}&page=${this.page}`
        : `https://api.themoviedb.org/3/movie/top_rated?api_key=2ce444e2f1d358a25becb7c52712b5c0&page=${this.page}`;
      axios.get(apiEndpoint)
        .then((response) => {
          this.movies = response.data.results;
          this.totalPages = response.data.total_pages;
        });
    },
  },
});
</script>

<style scoped>
.home-container {
  padding: 20px;
  background-color: #fff;
}

.header {
  margin-top: 40px;
  margin-bottom: 20px;
}

.title {
  font-size: 2.5em;
  font-weight: bold;
  text-align: center;
  color: #333;
}

.toolbar {
  margin-bottom: 20px;
}

.search-bar {
  width: 100%;
  max-width: 800px;
}

.movies-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.v-pagination {
  justify-content: center;
  display: flex;
  margin-top: 20px;
}

.v-pagination .v-pagination__item--is-active {
  background-color: #4caf50;
  color: #fff;
}

.v-select, .v-text-field {
  --v-theme-primary: #4caf50;
}

@media (max-width: 600px) {
  .movie-card {
    width: 100%;
    height: auto;
  }
}
</style>
