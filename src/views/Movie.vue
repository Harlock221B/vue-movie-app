<template>
  <v-container class="my-5 movie-container">
    <v-row>
      <v-col cols="12" md="5" class="animate__animated animate__fadeInLeft">
        <v-img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" class="movie-poster"></v-img>
      </v-col>
      <v-col cols="12" md="7" class="animate__animated animate__fadeInRight">
        <h1 class="movie-title">
          <font-awesome-icon icon="film" class="mr-2" />
          {{ movie.title }}
        </h1>
        <v-rating
          v-model="rating"
          background-color="green darken-2"
          color="green"
          small
          readonly
        ></v-rating>
        <p class="movie-overview">{{ movie.overview }}</p>
        <p class="movie-genres">
          <strong><font-awesome-icon icon="tags" class="mr-1" />Genres:</strong>
          <span v-for="genre in movie.genres" :key="genre.id">{{ genre.name }}<span v-if="!isLastGenre(genre)">, </span></span>
        </p>
        <p><strong><font-awesome-icon icon="calendar-alt" class="mr-1" />Release Date:</strong> {{ movie.release_date }}</p>
        <p><strong><font-awesome-icon icon="dollar-sign" class="mr-1" />Revenue:</strong> {{ formattedRevenue }}</p>
        <v-btn class="favorite-btn" @click="toggleFavorite">
          <font-awesome-icon :icon="[isFavorite ? 'fas' : 'far', 'heart']" class="mr-1" />
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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default defineComponent({
  name: 'MovieDetails',
  components: {
    FontAwesomeIcon
  },
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
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  color: #333;
}

.movie-poster {
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.movie-title {
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 0.5em;
  color: #333;
  display: flex;
  align-items: center;
}

.movie-title .mr-2 {
  margin-right: 10px;
  font-size: 0.8em;
}

.movie-overview {
  margin: 1em 0;
  line-height: 1.6;
  color: #555;
  text-align: justify;
}

.movie-genres {
  margin: 1em 0;
  font-style: italic;
  color: #777;
}

.movie-genres strong {
  display: flex;
  align-items: center;
}

.favorite-btn {
  margin-top: 1em;
  color: white;
  background-color: #4caf50;
}

.favorite-btn:hover {
  background-color: #45a049;
}

.favorite-btn v-icon {
  margin-right: 8px;
}

.animate__animated {
  animation-duration: 1s;
}

@media (max-width: 600px) {
  .movie-title {
    font-size: 2em;
  }
  .movie-overview {
    font-size: 1em;
  }
  .movie-genres, .movie-genres strong, .favorite-btn {
    font-size: 0.9em;
  }
}
</style>
