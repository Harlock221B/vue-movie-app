<template>
  <div>
    <v-app>
      <v-container>
        <v-row justify="center" class="my-5">
          <v-col cols="12" sm="8" md="6" class="text-center">
            <v-card elevation="2" class="title-card">
              <v-card-title>
                <v-icon large class="mr-2">mdi-movie</v-icon>
                Top Rated Movies
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="movie in movies"
            :key="movie.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
            class="d-flex"
          >
            <MovieCard :movie="movie" v-if="!loading" />
            <v-skeleton-loader
              v-else
              type="card"
              width="100%"
              class="movie-skeleton"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row justify="center" class="my-5">
          <v-col cols="12" sm="8" md="6" class="text-center">
            <v-pagination
              v-model="page"
              :length="totalPages"
              total-visible="7"
              @input="fetchMovies"
              circle
              class="pagination"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import axios from 'axios';
import MovieCard from '../components/MovieCard.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    MovieCard,
  },
  data() {
    return {
      movies: [] as any[],
      page: 1,
      totalPages: 0,
      loading: true,
    };
  },
  created() {
    this.fetchMovies();
  },
  watch: {
    page(newPage) {
      this.fetchMovies();
    }
  },
  methods: {
    fetchMovies() {
      this.loading = true;
      axios
        .get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=2ce444e2f1d358a25becb7c52712b5c0&page=${this.page}`
        )
        .then((response) => {
          this.movies = response.data.results;
          this.totalPages = response.data.total_pages;
          this.loading = false;
        });
    },
    goToMovie(id: number) {
      this.$router.push({ name: 'MovieDetails', params: { id } });
    },
  },
});
</script>

<style scoped>
.title-card {
  background-color: #ffeb3b;
  color: #000;
  font-weight: bold;
  font-size: 1.5em;
  border-radius: 16px;
  padding: 16px;
}

.movie-skeleton {
  height: 400px;
  margin: 10px 0;
  border-radius: 16px;
}

.pagination {
  margin-top: 20px;
}

.v-pagination__item--is-active {
  background-color: #ffeb3b;
  color: #000;
}

@media (min-width: 960px) {
  .title-card {
    font-size: 2em;
  }

  .movie-skeleton {
    height: 450px;
  }
}

@media (min-width: 1280px) {
  .movie-skeleton {
    height: 500px;
  }
}
</style>
