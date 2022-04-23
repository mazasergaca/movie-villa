import React from 'react';

import { usePopularMovies } from 'api/hooks/usePopularMovies.ts';
import { useTrendingMovies } from 'api/hooks/useTrendingMovies.ts';
import { usePopularTv } from 'api/hooks/usePopularTv.ts';
import { useRatedMovies } from 'api/hooks/useRatedMovies.ts';
import { useUpcomingMovies } from 'api/hooks/useUpcomingMovies.ts';

import Hero from 'components/Hero';
import BoxMovie from 'components/BoxMovie';
import Footer from 'components/Footer';

const Home = () => {
  const { popularMovies } = usePopularMovies();
  const { trendingMovies } = useTrendingMovies();
  const { popularTv } = usePopularTv();
  const { ratedMovies } = useRatedMovies();
  const { upcomingMovies } = useUpcomingMovies();

  return (
    <>
      <Hero />
      <BoxMovie movies={trendingMovies} title="Latest and trending" />
      <BoxMovie movies={popularMovies} title="Popular" />
      <BoxMovie movies={ratedMovies} title="Top rated" />
      <BoxMovie movies={upcomingMovies} title="Upcoming movies in theatres" />
      {/* <BoxMovie movies={arr} title="Anime" /> */}
      <BoxMovie movies={popularTv} title="TV shows" />
      <Footer />
    </>
  );
};

export default Home;
