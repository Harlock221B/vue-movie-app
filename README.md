# Vue Movie App

This project is a movie app developed with Vue.js that allows users to explore and view movie information. It uses The Movie Database (TMDb) API to fetch and display movie data.

## Features

- **Discover New Movies**: Browse popular and top-rated movies.
- **Movie Search**: Search for movies by title using a search field.
- **Favorites**: Add movies to favorites and view them in a dedicated section.

## Technologies Used

- **Vue.js**: JavaScript framework for building user interfaces.
- **Vuex**: State management for the application.
- **Vuetify**: Material Design component framework for Vue.js.
- **Axios**: Library for making HTTP requests.
- **The Movie Database (TMDb) API**: API for getting movie information.

## Project Setup

1. **Install Dependencies**

    First, install all project dependencies using Yarn:

    ```bash
    yarn install
    ```

2. **Compile and Reload for Development**

    To start the development server and view the project locally, run:

    ```bash
    yarn serve
    ```

    The application will be available at http://localhost:8080 by default.

3. **Compile and Minify for Production**

    To create an optimized version of the project for production, run:

    ```bash
    yarn build
    ```

    The production files will be generated in the dist folder.

4. **Linter and File Correction**

    To check and fix linting issues in the code, use:

    ```bash
    yarn lint
    ```

## API Configuration

This project uses The Movie Database (TMDb) API to get movie information. To use the API, you need an API key. Create an account on TMDb and get your API key.

1. **Add Your API Key**

    Create a .env file in the root of the project.

    Add your API key to the .env file:

    ```env
    VUE_APP_TMDB_API_KEY=your_api_key_here
    ```

    Make sure to restart the development server after adding the API key.

## Customization and Configuration

To customize or configure the application, you can edit the following files:

- src/App.vue: The root component of the application.
- src/views/HomeView.vue: The main view where movies are displayed.
- src/components/MovieCard.vue: Component that displays information about an individual movie.

For more information on how to customize Vue CLI configuration, refer to the Configuration Reference.

