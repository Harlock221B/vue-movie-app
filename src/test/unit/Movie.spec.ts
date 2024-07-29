import { shallowMount } from '@vue/test-utils';
import Movie from '@/views/Movie.vue';
import { createStore } from 'vuex';

describe('Movie.vue', () => {
  let actions: any;
  let store: any;

  beforeEach(() => {
    actions = {
      fetchMovieDetails: jest.fn(),
    };
    store = createStore({
      actions,
    });
  });

  it('renders movie details', () => {
    const wrapper = shallowMount(Movie, { 
      global: {
        plugins: [store]
      }
    });
    expect(wrapper.find('.title').text()).toBe('Movie 1');
    expect(wrapper.find('.overview').text()).toBe('Movie overview');
    expect(wrapper.find('.genres').text()).toContain('Action');
    expect(wrapper.find('.release_date').text()).toBe('2023-01-01');
    expect(wrapper.find('.revenue').text()).toBe('1000000');
  });

  it('allows favoriting the movie', async () => {
    const wrapper = shallowMount(Movie, { 
      global: {
        plugins: [store]
      }
    });
    await wrapper.find('.favorite-button').trigger('click');
    expect(actions.addFavorite).toHaveBeenCalled();
  });
});
