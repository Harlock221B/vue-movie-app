<template>
  <v-card @click="goToMovie" class="movie-card" outlined>
    <v-img
      :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
      class="movie-img"
      aspect-ratio="2"
    >
      <div class="overlay"></div>
    </v-img>
    <v-card-text class="movie-details">
      <v-row>
        <v-col cols="12" class="movie-title">
          <font-awesome-icon icon="film" class="mr-1" /> {{ movie.title }}
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" class="movie-votes">
          <font-awesome-icon icon="thumbs-up" class="mr-1" /> {{ movie.vote_count }}
        </v-col>
        <v-col cols="6" class="movie-rating text-right">
          <font-awesome-icon icon="star" class="mr-1" /> {{ movie.vote_average }}
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="movie-popularity">
          <font-awesome-icon icon="chart-line" class="mr-1" /> Popularity: {{ movie.popularity }}
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
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  cursor: pointer;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.movie-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  background-color: #f5f5f5;
}

.movie-img {
  width: 100%;
  height: 25.5rem;
  object-fit: cover;
  position: relative;
}

.overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
  color: white;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 16px 16px;
}

.movie-details {
  background: #f9f9f9;
  color: #333;
  padding: 16px;
  border-top: 1px solid #e0e0e0;
  border-radius: 0 0 1rem 1rem;
}

.movie-title,
.movie-votes,
.movie-rating,
.movie-popularity {
  font-size: 14px;
  color: #666;
}

.v-icon {
  vertical-align: middle;
  color: #ffca28;
}

/* Estilos responsivos */
@media (max-width: 600px) {
  .movie-card {
    margin-bottom: 16px;
  }

  .movie-img {
    width: 100%;
    height: 35rem;
  }
}
</style>
