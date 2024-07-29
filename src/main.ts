import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp, faStar, faChartLine, faFilm } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'animate.css';

library.add(faThumbsUp, faStar, faChartLine, faFilm);
loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
