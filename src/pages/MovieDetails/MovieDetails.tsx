import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '@mui/material';
import Rating from '@mui/material/Rating';

import { useMovieCast } from 'api/hooks/useMovieCast.ts';
import { useMovieSimilar } from 'api/hooks/useMovieSimilar.ts';
import { useMovieById } from 'api/hooks/useMovieById.ts';
import { useMovieVideoById } from 'api/hooks/useMovieVideoById.ts';
import BoxMovie from 'components/BoxMovie';
import BoxCast from 'components/BoxCast';
import makeIdFromSlug from 'services/slug.ts';
import {
  Wrapper,
  Title,
  Poster,
  WrapperInfo,
  Info,
  Genre,
  InfoName,
  InfoValue,
  Logo,
  LogoList,
  WrapperVideo,
  BackdropInfo,
} from './MovieDetails.style';

const MovieDetails = () => {
  const location = useLocation();
  const id = makeIdFromSlug(location.pathname);

  const { movieById, refetchMovieById } = useMovieById(id);
  const { movieVideo, refetchMovie } = useMovieVideoById(id);
  const { movieSimilar, refetchMoviesSimilar } = useMovieSimilar(id);
  const { movieCast } = useMovieCast(id);

  useEffect(() => {
    refetchMovieById();
    refetchMoviesSimilar();
    refetchMovie();
    window.scrollTo(0, 0);
  }, [location, refetchMovieById, refetchMoviesSimilar, refetchMovie]);

  return (
    <>
      {movieById && (
        <BackdropInfo img={movieById.data.backdrop_path}>
          <Container>
            <WrapperInfo>
              <Poster>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movieById.data.poster_path}`}
                  alt={movieById?.data.original_title}
                  width="100%"
                />
              </Poster>
              <Info>
                <Title>{movieById.data.original_title}</Title>

                <WrapperInfo>
                  {movieById.data.genres.map((item, index) => (
                    <Genre key={index}>{item.name.toLowerCase()}</Genre>
                  ))}
                </WrapperInfo>

                <InfoName>
                  Release date:{' '}
                  <InfoValue>{movieById.data.release_date}</InfoValue>
                </InfoName>
                <InfoName>
                  Tagline: <InfoValue>{movieById.data.tagline}</InfoValue>
                </InfoName>
                <InfoName>
                  <InfoValue>{movieById.data.overview}</InfoValue>
                </InfoName>
                <InfoName>
                  <Rating
                    value={movieById.data.vote_average}
                    precision={0.1}
                    readOnly
                    max={10}
                  />
                </InfoName>
                <InfoName>Prodaction companies:</InfoName>
                <LogoList>
                  {movieById.data.production_companies.map((item, index) => (
                    <Logo key={index}>{item.name}</Logo>
                  ))}
                </LogoList>
              </Info>
            </WrapperInfo>
          </Container>
        </BackdropInfo>
      )}

      <Container>
        <Wrapper>
          <BoxCast cast={movieCast} title="Cast and crew" />
          <WrapperVideo>
            {movieVideo?.data?.results[0]?.key && (
              <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${movieVideo?.data.results[0].key}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            )}
          </WrapperVideo>
          {movieSimilar && (
            <BoxMovie movies={movieSimilar} title="Similar movies" path="/" />
          )}
        </Wrapper>
      </Container>
    </>
  );
};

export default MovieDetails;
