import { createStore } from 'vuex';
import { RootState, Movie } from './types';

const store = createStore<RootState>({
  state: {
    favorites: [],
  },
  mutations: {
    ADD_FAVORITE(state, movie: Movie) {
      state.favorites.push(movie);
    },
    REMOVE_FAVORITE(state, movie: Movie) {
      state.favorites = state.favorites.filter((f) => f.id !== movie.id);
    },
  },
  actions: {
    addFavorite({ commit }, movie: Movie) {
      commit('ADD_FAVORITE', movie);
    },
    removeFavorite({ commit }, movie: Movie) {
      commit('REMOVE_FAVORITE', movie);
    },
  },
  getters: {
    favorites: (state) => state.favorites,
  },
});

export default store;
