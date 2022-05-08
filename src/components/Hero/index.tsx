import React, { FC } from 'react';
import Slider from 'react-slick';
import Skeleton from '@mui/material/Skeleton';

import { sliderSettingsForHero } from 'services/slider-settings';
import { useTrendingMovies } from 'api/hooks/useTrendingMovies';
import { Section, Container, Poster } from './Hero.styles';

interface ItemI {
  id: number;
  backdrop_path: string;
}

const Hero: FC = () => {
  const { trendingMovies, isLoadingTrendingMovies } = useTrendingMovies(1);

  return (
    <Section>
      <Container>
        {!isLoadingTrendingMovies && (
          <Slider {...sliderSettingsForHero}>
            {trendingMovies &&
              trendingMovies.data.results
                .slice(0, 3)
                .map(({ id, backdrop_path }: ItemI) => (
                  <div key={id}>
                    <Poster color={backdrop_path}></Poster>
                  </div>
                ))}
          </Slider>
        )}
        {isLoadingTrendingMovies && (
          <Skeleton variant="rectangular" width="100%" height="100%" />
        )}
      </Container>
    </Section>
  );
};

export default Hero;
