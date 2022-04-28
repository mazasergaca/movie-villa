import React from 'react';

import { usePopularMovies } from 'api/hooks/usePopularMovies.ts';
import { useTrendingMovies } from 'api/hooks/useTrendingMovies.ts';
import { useRatedMovies } from 'api/hooks/useRatedMovies.ts';
import { useUpcomingMovies } from 'api/hooks/useUpcomingMovies.ts';

import Hero from 'components/Hero';
import BoxMovie from 'components/BoxMovie';

const Home = () => {
  const { popularMovies } = usePopularMovies();
  const { trendingMovies } = useTrendingMovies(1);
  const { ratedMovies } = useRatedMovies();
  const { upcomingMovies } = useUpcomingMovies();

  return (
    <>
      <Hero />
      <BoxMovie
        movies={trendingMovies}
        title="Trending"
        path="movies/trending"
      />
      <BoxMovie movies={popularMovies} title="Popular" path="movies/popular" />
      <BoxMovie
        movies={ratedMovies}
        title="Top rated"
        path="movies/top_rated"
      />
      <BoxMovie
        movies={upcomingMovies}
        title="Upcoming movies in theatres"
        path="movies/upcoming"
      />
    </>
  );
};

export default Home;
