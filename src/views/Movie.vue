<template>
  <v-container class="my-5 movie-container">
    <v-row>
      <v-col cols="12" md="5" class="animate__animated animate__fadeInLeft">
        <v-img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" class="movie-poster"></v-img>
      </v-col>
      <v-col cols="12" md="7" class="animate__animated animate__fadeInRight">
        <h1 class="movie-title">{{ movie.title }}</h1>
        <v-rating
          v-model="rating"
          background-color="yellow darken-2"
          color="yellow"
          small
          readonly
        ></v-rating>
        <p class="movie-overview">{{ movie.overview }}</p>
        <p class="movie-genres">
          <strong>Genres:</strong>
          <span v-for="genre in movie.genres" :key="genre.id">{{ genre.name }}<span v-if="!isLastGenre(genre)">, </span></span>
        </p>
        <p><strong>Release Date:</strong> {{ movie.release_date }}</p>
        <p><strong>Revenue:</strong> {{ formattedRevenue }}</p>
        <v-btn color="blue" @click="toggleFavorite">
          <v-icon left>{{ isFavorite ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
          {{ isFavorite ? 'Remove from Favorites' : 'Add to Favorites' }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
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
      rating: 0
    };
  },
  computed: {
    ...mapState<RootState>({
      favorites: (state: RootState) => state.favorites,
    }),
    isFavorite(): boolean {
      return (this as any).favorites.some((f: Movie) => f.id === this.movie.id);
    },
    formattedRevenue(): string {
      return this.movie.revenue ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.movie.revenue) : 'N/A';
    }
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
          this.rating = this.movie.vote_average / 2; // Convert rating to 5 stars scale
        });
    },
    toggleFavorite() {
      if (this.isFavorite) {
        this.removeFavorite(this.movie);
      } else {
        this.addFavorite(this.movie);
      }
    },
    isLastGenre(genre: { id: number; name: string }): boolean {
      return this.movie.genres.indexOf(genre) === this.movie.genres.length - 1;
    }
  }
});
</script>

<style scoped>
.movie-container {
  background-color: #f9f9f9; /* Light background color */
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
}

.movie-poster {
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.movie-title {
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 0.5em;
  color: #333; /* Dark text color */
}

.movie-overview {
  margin: 1em 0;
  line-height: 1.6;
  color: #555; /* Medium text color */
}

.movie-genres {
  margin: 1em 0;
  font-style: italic;
  color: #777; /* Light text color */
}

.v-btn {
  margin-top: 1em;
  color: white;
  background-color: #007BFF; /* Blue button */
}

.v-btn v-icon {
  margin-right: 8px;
}

.animate__animated {
  animation-duration: 1s;
}
</style>
