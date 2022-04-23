import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';

const KEY = 'af82d7be8f57d00f4e04fac446f5a0d5';

axios.defaults.baseURL = API_URL;

export const getTrendingMovies = async () => {
  return await axios.get('/trending/all/day', {
    params: {
      api_key: KEY,
    },
  });
};

export const getPopularMovies = async () => {
  return await axios('/movie/popular', {
    params: {
      api_key: KEY,
    },
  });
};

export const getPopularTv = async () => {
  return await axios('/tv/popular', {
    params: {
      api_key: KEY,
    },
  });
};

export const getRatedMovies = async () => {
  return await axios('/movie/top_rated', {
    params: {
      api_key: KEY,
    },
  });
};

export const getUpcomingMovie = async () => {
  return await axios('/movie/upcoming', {
    params: {
      api_key: KEY,
    },
  });
};

export const getMoviesByName = async (name: string) => {
  return await axios('/search/movie', {
    params: {
      api_key: KEY,
      query: name,
    },
  });
};
