import React, { useEffect, useState, SyntheticEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '@mui/material';
import Rating from '@mui/material/Rating';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { MdReviews } from 'react-icons/md';
import { IoMdPhotos } from 'react-icons/io';

import noPoster from '../../assets/not-found-poster.png';
import { useMovieImages } from 'api/hooks/useMovieImages.ts';
import { useReviewsMovies } from 'api/hooks/useReviewsMovie.ts';
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
  WrapperMedia,
  BackdropInfo,
  WrapperReviews,
} from './MovieDetails.style';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};
const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const MovieDetails = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const location = useLocation();
  const id = makeIdFromSlug(location.pathname);

  const { movieById, refetchMovieById } = useMovieById(id);
  const { movieVideo, refetchMovie } = useMovieVideoById(id);
  const { movieSimilar, refetchMoviesSimilar } = useMovieSimilar(id);
  const { movieCast } = useMovieCast(id);
  const { reviewsMovie } = useReviewsMovies(id);
  const { movieImages } = useMovieImages(id);

  console.log(movieImages);

  console.log(reviewsMovie);

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
                  src={
                    movieById.data.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movieById.data.poster_path}`
                      : noPoster
                  }
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
                {movieById?.data.tagline && (
                  <InfoName>
                    Tagline: <InfoValue>{movieById.data.tagline}</InfoValue>
                  </InfoName>
                )}
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
                {!!movieById?.data.production_companies.length && (
                  <>
                    <InfoName>Prodaction companies:</InfoName>
                    <LogoList>
                      {movieById.data.production_companies.map(
                        (item, index) => (
                          <Logo key={index}>{item.name}</Logo>
                        )
                      )}
                    </LogoList>
                  </>
                )}
              </Info>
            </WrapperInfo>
          </Container>
        </BackdropInfo>
      )}

      <Container>
        <Wrapper>
          <BoxCast cast={movieCast} title="Cast and crew" />
          <WrapperMedia>
            <WrapperReviews>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="icon label tabs example"
              >
                <Tab icon={<MdReviews />} label="REVIEWS" {...a11yProps(0)} />
                <Tab icon={<IoMdPhotos />} label="POSTERS" {...a11yProps(1)} />
              </Tabs>
              <TabPanel value={value} index={0}>
                11111
              </TabPanel>
              <TabPanel value={value} index={1}>
                222222
              </TabPanel>
            </WrapperReviews>
            {movieVideo?.data?.results[0]?.key && (
              <iframe
                width="853"
                height="480"
                src={`https://www.youtube-nocookie.com/embed/${movieVideo?.data.results[0].key}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            )}
          </WrapperMedia>
          {movieSimilar && (
            <BoxMovie movies={movieSimilar} title="Similar movies" path="/" />
          )}
        </Wrapper>
      </Container>
    </>
  );
};

export default MovieDetails;
