import React, { FC } from 'react';

import { usePopularMovies } from 'api/hooks/usePopularMovies';
import { useTrendingMovies } from 'api/hooks/useTrendingMovies';
import { useRatedMovies } from 'api/hooks/useRatedMovies';
import { useUpcomingMovies } from 'api/hooks/useUpcomingMovies';

import Hero from 'components/Hero';
import BoxMovie from 'components/BoxMovie';

const Home: FC = () => {
  const { popularMovies } = usePopularMovies(1);
  const { trendingMovies } = useTrendingMovies(1);
  const { ratedMovies } = useRatedMovies(1);
  const { upcomingMovies } = useUpcomingMovies(1);

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
        title="Upcoming"
        path="movies/upcoming"
      />
    </>
  );
};

export default Home;
