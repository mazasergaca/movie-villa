import React, { useState, FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Skeleton from '@mui/material/Skeleton';

import { makeSlug } from 'services/make-slug';
import { sliderSettingsForPersonDetails } from 'services/slider-settings';
import makeIdFromSlug from 'services/slug';
import { usePersonDetails } from 'api/hooks/usePersonDetails';
import { usePersonMovies } from 'api/hooks/usePersonMovies';
import { usePersonImages } from 'api/hooks/usePersonImages';

import noPoster from 'assets/not-found-poster.png';
import {
  Wrapper,
  WrapperInfo,
  WrapperBiography,
  Name,
  NameMobile,
  Avatar,
  TitleInfo,
  InfoName,
  InfoValue,
  ButtonShowMore,
  WrapperSlider,
  Item,
  Poster,
  TitleMovie,
  WrapperGallery,
} from './PersonDetails.styles';

interface CastI {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
}
interface PersonImagesI {
  file_path: string;
}

const PersonDetails: FC = () => {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => window.scrollTo(0, 0), []);

  const location = useLocation();
  const id = makeIdFromSlug(location.pathname);

  const { personDetails, isFetchingPersonDetails } = usePersonDetails(id);
  const { personMovies } = usePersonMovies(id);
  const { personImages } = usePersonImages(id);

  const handleClickBtnMore = (): void => setShowMore(!showMore);

  return (
    <Container>
      <Wrapper>
        <WrapperInfo>
          <Avatar>
            {!isFetchingPersonDetails && personDetails ? (
              <img
                src={
                  personDetails.data.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${personDetails.data.profile_path}`
                    : noPoster
                }
                alt={personDetails?.data.name}
                width="100%"
              />
            ) : (
              <Skeleton variant="rectangular" width="100%" height="100%" />
            )}
          </Avatar>
          {!isFetchingPersonDetails && (
            <>
              <NameMobile>
                {personDetails && <>{personDetails?.data.name}</>}
              </NameMobile>
              <TitleInfo>Personal Info</TitleInfo>
              <InfoName>Known For</InfoName>
              <InfoValue>{personDetails?.data.known_for_department}</InfoValue>
              <InfoName>Gender</InfoName>
              <InfoValue>
                {personDetails?.data.gender === '1' ? 'Female' : 'Male'}
              </InfoValue>
              {personDetails?.data.birthday && (
                <>
                  <InfoName>Born</InfoName>
                  <InfoValue>{personDetails.data.birthday}</InfoValue>
                  <InfoValue>{personDetails.data.place_of_birth}</InfoValue>
                </>
              )}
              {personDetails?.data.deathday && (
                <>
                  <InfoName>Died</InfoName>
                  <InfoValue>{personDetails.data.deathday}</InfoValue>
                </>
              )}
              {!!personDetails?.data.also_known_as.length && (
                <>
                  <InfoName>Also Known As</InfoName>

                  {personDetails.data.also_known_as.map((name: string) => (
                    <InfoValue key={name}>{name}</InfoValue>
                  ))}
                </>
              )}
            </>
          )}
          {isFetchingPersonDetails && (
            <>
              <Skeleton variant="text" width="100%" height={40} />
              <Skeleton variant="text" width={100} height={30} />
              <Skeleton variant="text" width={150} height={20} />
              <Skeleton variant="text" width={100} height={30} />
              <Skeleton variant="text" width={150} height={20} />
              <Skeleton variant="text" width={100} height={30} />
              <Skeleton variant="text" width={150} height={20} />
              <Skeleton variant="text" width={100} height={30} />
              <Skeleton variant="text" width={150} height={20} />
              <Skeleton variant="text" width={100} height={30} />
              <Skeleton variant="text" width={150} height={20} />
            </>
          )}
        </WrapperInfo>
        <WrapperBiography>
          {!isFetchingPersonDetails && personDetails && (
            <>
              <Name>{personDetails?.data.name}</Name>
              {personDetails?.data.biography && (
                <>
                  <TitleInfo>Biography</TitleInfo>
                  <InfoValue>
                    {showMore
                      ? personDetails.data.biography
                      : personDetails.data.biography.substring(0, 250)}{' '}
                    {personDetails.data.biography.length > 250 && (
                      <ButtonShowMore onClick={handleClickBtnMore}>
                        {showMore ? 'Show less' : 'Show more'}
                      </ButtonShowMore>
                    )}
                  </InfoValue>
                </>
              )}
            </>
          )}
          {isFetchingPersonDetails && (
            <>
              <Skeleton variant="text" width={250} height={60} />
              <Skeleton variant="text" width={100} height={30} />
              <Skeleton variant="text" width="100%" height={150} />
            </>
          )}
          <WrapperSlider>
            {!isFetchingPersonDetails && personMovies && (
              <>
                <TitleInfo>Known For</TitleInfo>
                <Slider {...sliderSettingsForPersonDetails}>
                  {personMovies &&
                    personMovies.data.cast.map(
                      ({ id, title, original_title, poster_path }: CastI) => (
                        <div key={id}>
                          <Link
                            to={{
                              pathname: `/movies/all/${makeSlug(
                                title || original_title
                              )}-${id}`,
                            }}
                          >
                            <Item>
                              <Poster>
                                <img
                                  src={
                                    poster_path
                                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                                      : noPoster
                                  }
                                  alt={title || original_title}
                                  width="100%"
                                />
                              </Poster>
                              <TitleMovie>{title || original_title}</TitleMovie>
                            </Item>
                          </Link>
                        </div>
                      )
                    )}
                </Slider>
              </>
            )}
            {isFetchingPersonDetails && (
              <>
                <Skeleton variant="text" width={180} height={40} />
                <Skeleton variant="rectangular" width="100%" height={200} />
              </>
            )}
          </WrapperSlider>
          {!isFetchingPersonDetails && personImages?.data?.profiles.length > 2 && (
            <WrapperGallery>
              <ImageList
                sx={{ width: 500, height: 450 }}
                variant="woven"
                cols={3}
                gap={8}
              >
                {personImages?.data.profiles.map(
                  ({ file_path }: PersonImagesI) => (
                    <ImageListItem key={file_path}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${file_path}`}
                        alt={personDetails?.data.name}
                        loading="lazy"
                      />
                    </ImageListItem>
                  )
                )}
              </ImageList>
            </WrapperGallery>
          )}
          {isFetchingPersonDetails && (
            <>
              <Skeleton variant="rectangular" width="100%" height={200} />
            </>
          )}
        </WrapperBiography>
      </Wrapper>
    </Container>
  );
};

export default PersonDetails;
