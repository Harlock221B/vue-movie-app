export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    genres: Array<{ id: number; name: string }>;
    release_date: string;
    revenue: number;
    vote_average: number;
  }
  
  export interface RootState {
    favorites: Movie[];
  }
  