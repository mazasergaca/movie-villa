import React, { FC, useEffect } from 'react';

import { usePopularMovies } from 'api/hooks/usePopularMovies';
import { useTrendingMovies } from 'api/hooks/useTrendingMovies';
import { useRatedMovies } from 'api/hooks/useRatedMovies';
import { useUpcomingMovies } from 'api/hooks/useUpcomingMovies';

import Hero from 'components/Hero';
import BoxMovie from 'components/BoxMovie';

const Home: FC = () => {
  const { trendingMovies, isLoadingTrendingMovies } = useTrendingMovies(1);
  const { popularMovies, isLoadingPopularMovies } = usePopularMovies(1);
  const { ratedMovies, isLoadingRatedMovies } = useRatedMovies(1);
  const { upcomingMovies, isLoadingUpcomingMovie } = useUpcomingMovies(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <BoxMovie
        isLoading={isLoadingTrendingMovies}
        movies={trendingMovies}
        title="Trending"
        path="movies/trending"
      />
      <BoxMovie
        isLoading={isLoadingPopularMovies}
        movies={popularMovies}
        title="Popular"
        path="movies/popular"
      />
      <BoxMovie
        isLoading={isLoadingRatedMovies}
        movies={ratedMovies}
        title="Top rated"
        path="movies/top_rated"
      />
      <BoxMovie
        isLoading={isLoadingUpcomingMovie}
        movies={upcomingMovies}
        title="Upcoming"
        path="movies/upcoming"
      />
    </>
  );
};

export default Home;
