<template>
  <v-container class="my-5 favorites-container">
    <v-row>
      <v-col cols="12">
        <h1 class="favorites-title">My Favorite Movies</h1>
        <v-btn @click="clearFavorites" color="error" class="mb-4">Clear All</v-btn>
      </v-col>
    </v-row>
    <v-row class="favorites-list">
      <v-col v-if="favorites.length === 0" cols="12" class="empty-state">
        <v-card>
          <v-card-title>No Favorite Movies</v-card-title>
          <v-card-text>It looks like you don't have any favorite movies yet.</v-card-text>
        </v-card>
      </v-col>
      <v-col v-else v-for="movie in favorites" :key="movie.id" cols="12" sm="6" md="4" lg="3"
        class="animate__animated animate__fadeInUp favorite-card">
        <MovieCard :movie="movie" @remove="removeFavorite(movie)" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import MovieCard from '@/components/MovieCard.vue';
import { RootState, Movie } from '../store/types';

export default defineComponent({
  name: 'FavoritesView',
  components: {
    MovieCard,
  },
  setup() {
    const store = useStore<RootState>();

    const favorites = computed(() => store.getters.favorites);

    const removeFavorite = (movie: Movie) => {
      store.dispatch('removeFavorite', movie);
    };

    const clearFavorites = () => {
      store.dispatch('clearFavorites');
    };

    return {
      favorites,
      removeFavorite,
      clearFavorites,
    };
  },
});
</script>

<style scoped>
.favorites-container {
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  color: #333;
}

.favorites-title {
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.favorites-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.favorite-card {
  padding: 10px;
  box-sizing: border-box;
}

.empty-state {
  text-align: center;
}

.empty-state .v-card {
  padding: 20px;
  background: #f9f9f9;
}

.animate__animated {
  animation-duration: 1s;
}
</style>
