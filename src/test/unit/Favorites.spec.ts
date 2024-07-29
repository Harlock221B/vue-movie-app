import { shallowMount } from '@vue/test-utils';
import Favorites from '@/views/Favorites.vue';
import { createStore } from 'vuex';
import MovieCard from '@/components/MovieCard.vue';

describe('Favorites.vue', () => {
  let store: any;

  beforeEach(() => {
    store = createStore({
      state: {
        favorites: [
          { title: 'Movie 1', poster_path: '/path/to/image.jpg' }
        ]
      }
    });
  });

  it('renders a list of favorite movies', () => {
    const wrapper = shallowMount(Favorites, { 
      global: {
        plugins: [store]
      }
    });
    expect(wrapper.findAllComponents(MovieCard)).toHaveLength(1);
  });

  it('displays empty state when no favorites', () => {
    store.state.favorites = [];
    const wrapper = shallowMount(Favorites, { 
      global: {
        plugins: [store]
      }
    });
    expect(wrapper.find('.empty-state').exists()).toBe(true);
  });

  it('clears all favorites when clear button is clicked', async () => {
    const wrapper = shallowMount(Favorites, { 
      global: {
        plugins: [store]
      }
    });
    await wrapper.find('.clear-button').trigger('click');
    expect(store.state.favorites).toHaveLength(0);
  });

  it('navigates to movie details on click', async () => {
    const wrapper = shallowMount(Favorites, { 
      global: {
        plugins: [store]
      }
    });
    await wrapper.findComponent(MovieCard).trigger('click');
    expect(wrapper.vm.$route.path).toBe('/movie/1');
  });
});
