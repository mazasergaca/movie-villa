import React, { FC } from 'react';
import Slider from 'react-slick';

import { sliderSettingsForHero } from 'services/slider-settings';
import { useTrendingMovies } from 'api/hooks/useTrendingMovies';
import { Section, Container, Poster } from './Hero.styles';

interface Item {
  id: number;
  backdrop_path: string;
}

const Hero: FC = () => {
  const { trendingMovies } = useTrendingMovies(1);

  return (
    <Section>
      <Container>
        <Slider {...sliderSettingsForHero}>
          {trendingMovies &&
            trendingMovies.data.results
              .slice(0, 3)
              .map(({ id, backdrop_path }: Item) => (
                <div key={id}>
                  <Poster color={backdrop_path}></Poster>
                </div>
              ))}
        </Slider>
      </Container>
    </Section>
  );
};

export default Hero;
