import React, { useEffect, useState, ReactNode, FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '@mui/material';
import Rating from '@mui/material/Rating';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Skeleton from '@mui/material/Skeleton';
import { MdReviews } from 'react-icons/md';
import { IoMdPhotos } from 'react-icons/io';

import noPhoto from '../../assets/no_photo.png';
import noPoster from '../../assets/not-found-poster.png';
import { useMovieImages } from 'api/hooks/useMovieImages';
import { useReviewsMovies } from 'api/hooks/useReviewsMovie';
import { useMovieCast } from 'api/hooks/useMovieCast';
import { useMovieSimilar } from 'api/hooks/useMovieSimilar';
import { useMovieById } from 'api/hooks/useMovieById';
import { useMovieVideoById } from 'api/hooks/useMovieVideoById';
import BoxMovie from 'components/BoxMovie';
import BoxCast from 'components/BoxCast';
import makeIdFromSlug from 'services/slug';
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
  AvatarRewiew,
  NameReview,
  Review,
  WrapperVideo,
  InfoReview,
  NoReviews,
  Iframe,
  WrappperNotFound,
  WrapperGenre,
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

interface ItemI {
  id: number;
  name: string;
}

interface ReviewI {
  id: number;
  author: string;
  content: string;
  author_details: any;
}
interface MovieImagesI {
  file_path: string;
}

const MovieDetails: FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_: any, newValue: number): void => {
    setValue(newValue);
  };

  const location = useLocation();
  const id = makeIdFromSlug(location.pathname);

  const {
    movieById,
    refetchMovieById,
    isFetchingMovieById,
    isErrorMovieById,
    isLoadingMovieById,
  } = useMovieById(id);

  const { movieVideo, refetchMovieVideo, isFetchingMovieVideo } =
    useMovieVideoById(id);
  const {
    movieSimilar,
    refetchMoviesSimilar,
    isFetchingMoviesSimilar,
    isLoadingSimilarMovies,
  } = useMovieSimilar(id);
  const { movieCast, refetchMovieCast, isFetchingMovieCast } = useMovieCast(id);
  const { reviewsMovie, isFetchingReviewsMovies } = useReviewsMovies(id);
  const { movieImages, isFetchingMovieImages } = useMovieImages(id);

  useEffect(() => {
    refetchMovieById();
    refetchMoviesSimilar();
    refetchMovieVideo();
    refetchMovieCast();
    window.scrollTo(0, 0);
  }, [
    location,
    refetchMovieById,
    refetchMoviesSimilar,
    refetchMovieVideo,
    refetchMovieCast,
  ]);

  return (
    <>
      {!isErrorMovieById ? (
        <>
          <BackdropInfo
            $backdrop={
              !isLoadingMovieById && !isFetchingMovieById
                ? movieById?.data.backdrop_path
                : ''
            }
          >
            <Container>
              <WrapperInfo>
                <Poster>
                  {!isLoadingMovieById && !isFetchingMovieById ? (
                    <img
                      src={
                        movieById?.data.poster_path
                          ? `https://image.tmdb.org/t/p/w500/${movieById.data.poster_path}`
                          : noPoster
                      }
                      alt={movieById?.data.original_title}
                      width="100%"
                    />
                  ) : (
                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      height="100%"
                    />
                  )}
                </Poster>
                <Info>
                  {!isLoadingMovieById && !isFetchingMovieById ? (
                    <Title>{movieById?.data.original_title}</Title>
                  ) : (
                    <Skeleton variant="text" width={550} height={32} />
                  )}

                  {!isLoadingMovieById && !isFetchingMovieById ? (
                    <WrapperGenre>
                      {movieById?.data.genres.map(({ id, name }: ItemI) => (
                        <Genre key={id}>{name.toLowerCase()}</Genre>
                      ))}
                    </WrapperGenre>
                  ) : (
                    <Skeleton variant="text" width={150} height={26} />
                  )}

                  {!isLoadingMovieById &&
                  !isFetchingMovieById &&
                  movieById?.data.release_date ? (
                    <InfoName>
                      Release date:{' '}
                      <InfoValue>{movieById.data.release_date}</InfoValue>
                    </InfoName>
                  ) : (
                    <Skeleton variant="text" width={200} height={32} />
                  )}
                  {!isLoadingMovieById &&
                  !isFetchingMovieById &&
                  movieById?.data.tagline ? (
                    <InfoName>
                      Tagline: <InfoValue>{movieById.data.tagline}</InfoValue>
                    </InfoName>
                  ) : (
                    <Skeleton variant="text" width={300} height={32} />
                  )}
                  {!isLoadingMovieById &&
                  !isFetchingMovieById &&
                  movieById?.data.overview ? (
                    <InfoName>
                      <InfoValue>{movieById.data.overview}</InfoValue>
                    </InfoName>
                  ) : (
                    <Skeleton variant="text" width="100%" height={255} />
                  )}
                  {!isLoadingMovieById &&
                  !isFetchingMovieById &&
                  movieById?.data.vote_count > 0 ? (
                    <InfoName>
                      <Rating
                        value={movieById?.data.vote_average}
                        precision={0.1}
                        readOnly
                        max={10}
                      />
                    </InfoName>
                  ) : (
                    <Skeleton variant="text" width={300} height={40} />
                  )}
                  {!isLoadingMovieById &&
                  !isFetchingMovieById &&
                  !!movieById?.data.production_companies.length ? (
                    <>
                      <InfoName>Prodaction companies:</InfoName>
                      <LogoList>
                        {movieById.data.production_companies.map(
                          ({ id, name }: ItemI) => (
                            <Logo key={id}>{name}</Logo>
                          )
                        )}
                      </LogoList>
                    </>
                  ) : (
                    <Skeleton variant="text" width={100} height={60} />
                  )}
                </Info>
              </WrapperInfo>
            </Container>
          </BackdropInfo>

          <Container>
            <Wrapper>
              {!!movieCast?.data.cast.length && !isFetchingMovieCast && (
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
                        {!!movieImages?.data.backdrops.length && (
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
                            {reviewsMovie.data.results.map(
                              ({
                                id,
                                author,
                                content,
                                author_details,
                              }: ReviewI) => (
                                <li key={id}>
                                  <InfoReview>
                                    <AvatarRewiew>
                                      <img
                                        src={
                                          author_details.avatar_path?.includes(
                                            'http'
                                          )
                                            ? author_details.avatar_path?.substring(
                                                1
                                              )
                                            : author_details.avatar_path
                                            ? `https://image.tmdb.org/t/p/w500/${author_details.avatar_path}`
                                            : noPhoto
                                        }
                                        alt={author}
                                        width="50px"
                                      />
                                    </AvatarRewiew>
                                    <NameReview>{author}</NameReview>
                                  </InfoReview>
                                  <Review>{content}</Review>
                                </li>
                              )
                            )}
                          </ListReviews>
                        ) : (
                          <NoReviews>No reviews</NoReviews>
                        )}
                      </TabPanel>

                      <TabPanel value={value} index={1}>
                        {movieImages && (
                          <ImageList
                            sx={{ width: '100%', height: 500 }}
                            cols={3}
                          >
                            {movieImages.data.backdrops.map(
                              ({ file_path }: MovieImagesI) => (
                                <ImageListItem key={file_path}>
                                  <img
                                    src={`https://image.tmdb.org/t/p/w500/${file_path}`}
                                    alt={movieById?.data.original_title}
                                    loading="lazy"
                                  />
                                </ImageListItem>
                              )
                            )}
                          </ImageList>
                        )}
                      </TabPanel>
                    </>
                  )}
              </WrapperMedia>
              {!!movieSimilar?.data.results.length &&
                !isFetchingMoviesSimilar && (
                  <BoxMovie
                    isLoading={isLoadingSimilarMovies}
                    movies={movieSimilar}
                    title="Similar movies"
                  />
                )}
            </Wrapper>
          </Container>
        </>
      ) : (
        <WrappperNotFound>
          <h1>Not found movie</h1>
        </WrappperNotFound>
      )}
    </>
  );
};

export default MovieDetails;
