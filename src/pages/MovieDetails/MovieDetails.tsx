import React, { useEffect, useState, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '@mui/material';
import Rating from '@mui/material/Rating';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { MdReviews } from 'react-icons/md';
import { IoMdPhotos } from 'react-icons/io';

import noPhoto from 'assets/no_photo.png';
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
  ListReviews,
  ItemReview,
  AvatarRewiew,
  NameReview,
  Review,
  WrapperVideo,
  InfoReview,
  NoReviews,
  Iframe,
} from './MovieDetails.styles';

interface TabPanelProps {
  children?: ReactNode;
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
      {value === index && children}
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

  const handleChange = (_, newValue: number) => {
    setValue(newValue);
  };

  const location = useLocation();
  const id = makeIdFromSlug(location.pathname);

  const { movieById, refetchMovieById, isFetchingMovieById } = useMovieById(id);
  const { movieVideo, refetchMovieVideo, isFetchingMovieVideo } =
    useMovieVideoById(id);
  const { movieSimilar, refetchMoviesSimilar, isFetchingMoviesSimilar } =
    useMovieSimilar(id);
  const { movieCast, isFetchingMovieCast } = useMovieCast(id);
  const { reviewsMovie, isFetchingReviewsMovies } = useReviewsMovies(id);
  const { movieImages, isFetchingMovieImages } = useMovieImages(id);

  useEffect(() => {
    refetchMovieById();
    refetchMoviesSimilar();
    refetchMovieVideo();
    window.scrollTo(0, 0);
  }, [location, refetchMovieById, refetchMoviesSimilar, refetchMovieVideo]);

  return (
    <>
      {movieById && !isFetchingMovieById && (
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
          {movieCast && !isFetchingMovieCast && (
            <BoxCast cast={movieCast} title="Cast and crew" />
          )}

          <WrapperMedia>
            {movieVideo?.data?.results[0]?.key && !isFetchingMovieVideo && (
              <WrapperVideo>
                <Iframe
                  src={`https://www.youtube-nocookie.com/embed/${movieVideo?.data.results[0].key}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              </WrapperVideo>
            )}

            {!isFetchingReviewsMovies &&
              !isFetchingMovieImages &&
              movieImages &&
              reviewsMovie && (
                <>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="icon label tabs example"
                  >
                    <Tab
                      style={{ color: '#fff' }}
                      icon={<MdReviews />}
                      label="REVIEWS"
                      {...a11yProps(0)}
                    />
                    {!!movieImages?.data.posters.length && (
                      <Tab
                        style={{ color: '#fff' }}
                        icon={<IoMdPhotos />}
                        label="POSTERS"
                        {...a11yProps(1)}
                      />
                    )}
                  </Tabs>
                  <TabPanel value={value} index={0}>
                    {!!reviewsMovie?.data.results.length ? (
                      <ListReviews>
                        {reviewsMovie.data.results.map(review => (
                          <ItemReview key={review.id}>
                            <InfoReview>
                              <AvatarRewiew>
                                <img
                                  src={
                                    review.author_details.avatar_path?.includes(
                                      'http'
                                    )
                                      ? review.author_details.avatar_path?.substring(
                                          1
                                        )
                                      : review.author_details.avatar_path
                                      ? `https://image.tmdb.org/t/p/w500/${review.author_details.avatar_path}`
                                      : noPhoto
                                  }
                                  alt={review.author}
                                  width="50px"
                                />
                              </AvatarRewiew>
                              <NameReview>{review.author}</NameReview>
                            </InfoReview>
                            <Review>{review.content}</Review>
                          </ItemReview>
                        ))}
                      </ListReviews>
                    ) : (
                      <NoReviews>No reviews</NoReviews>
                    )}
                  </TabPanel>

                  <TabPanel value={value} index={1}>
                    {movieImages && (
                      <ImageList sx={{ width: '100%', height: 500 }} cols={3}>
                        {movieImages.data.posters.map(image => (
                          <ImageListItem key={image.file_path}>
                            <img
                              src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                              alt={movieById?.data.original_title}
                              loading="lazy"
                            />
                          </ImageListItem>
                        ))}
                      </ImageList>
                    )}
                  </TabPanel>
                </>
              )}
          </WrapperMedia>
          {movieSimilar && !isFetchingMoviesSimilar && (
            <BoxMovie movies={movieSimilar} title="Similar movies" path="/" />
          )}
        </Wrapper>
      </Container>
    </>
  );
};

export default MovieDetails;
