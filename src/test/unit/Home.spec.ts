import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import { createStore } from 'vuex';
import MovieCard from '@/components/MovieCard.vue';

describe('Home.vue', () => {
  let actions: any;
  let store: any;

  beforeEach(() => {
    actions = {
      fetchTopRatedMovies: jest.fn(),
    };
    store = createStore({
      actions,
    });
  });

  it('renders a list of top-rated movies', () => {
    const wrapper = shallowMount(Home, { 
      global: {
        plugins: [store]
      }
    });
    expect(wrapper.findAllComponents(MovieCard)).toHaveLength(1);
  });

  it('displays movie details correctly', () => {
    const wrapper = shallowMount(Home, { 
      global: {
        plugins: [store]
      }
    });
    const movieCard = wrapper.findComponent(MovieCard);
    expect(movieCard.props().movie.title).toBe('Movie 1');
    expect(movieCard.props().movie.poster_path).toBe('/path/to/image.jpg');
  });

  it('navigates to movie details on click', async () => {
    const wrapper = shallowMount(Home, { 
      global: {
        plugins: [store]
      }
    });
    await wrapper.findComponent(MovieCard).trigger('click');
    expect(wrapper.vm.$route.path).toBe('/movie/1');
  });
});
