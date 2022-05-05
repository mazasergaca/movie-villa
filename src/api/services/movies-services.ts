import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';

const KEY = 'af82d7be8f57d00f4e04fac446f5a0d5';

axios.defaults.baseURL = API_URL;

export const getTrendingMovies = async (page: number) => {
  return await axios.get('/trending/all/day', {
    params: {
      api_key: KEY,
      page,
    },
  });
};

export const getPopularMovies = async (page: number) => {
  return await axios('/movie/popular', {
    params: {
      api_key: KEY,
      page,
    },
  });
};

export const getRatedMovies = async (page: number) => {
  return await axios('/movie/top_rated', {
    params: {
      api_key: KEY,
      page,
    },
  });
};

export const getUpcomingMovie = async (page: number) => {
  return await axios('/movie/upcoming', {
    params: {
      api_key: KEY,
      page,
    },
  });
};

export const getMoviesByName = async (name: string, page: number) => {
  return await axios('/search/movie', {
    params: {
      api_key: KEY,
      query: name,
      page,
    },
  });
};

export const getMovieById = async (id: string) => {
  return await axios(`/movie/${id}`, {
    params: {
      api_key: KEY,
    },
  });
};

export const getMovieVideoById = async (id: string) => {
  return await axios(`/movie/${id}/videos`, {
    params: {
      api_key: KEY,
    },
  });
};

export const getMovieSimilar = async (id: string) => {
  return await axios(`/movie/${id}/similar`, {
    params: {
      api_key: KEY,
    },
  });
};

export const getMovieCast = async (id: string) => {
  return await axios(`/movie/${id}/credits`, {
    params: {
      api_key: KEY,
    },
  });
};

export const getPersonDetails = async (id: string) => {
  return await axios(`/person/${id}`, {
    params: {
      api_key: KEY,
    },
  });
};

export const getPersonMovies = async (id: string) => {
  return await axios(`/person/${id}/movie_credits`, {
    params: {
      api_key: KEY,
    },
  });
};

export const getPersonImages = async (id: string) => {
  return await axios(`/person/${id}/images`, {
    params: {
      api_key: KEY,
    },
  });
};

export const getReviewsMovie = async (id: string) => {
  return await axios(`/movie/${id}/reviews`, {
    params: {
      api_key: KEY,
    },
  });
};

export const getImagesMovie = async (id: string) => {
  return await axios(`/movie/${id}/images`, {
    params: {
      api_key: KEY,
    },
  });
};
