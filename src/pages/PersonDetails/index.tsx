import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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

interface Cast {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
}

const PersonDetails = () => {
  const [showMore, setShowMore] = useState(false);

  const location = useLocation();
  const id = makeIdFromSlug(location.pathname);

  const { personDetails, isFetchingPersonDetails } = usePersonDetails(id);
  const { personMovies } = usePersonMovies(id);
  const { personImages } = usePersonImages(id);

  const handleClickBtnMore = () => setShowMore(!showMore);

  return (
    <Container>
      <Wrapper>
        {personDetails && !isFetchingPersonDetails && (
          <>
            <WrapperInfo>
              <Avatar>
                <img
                  src={
                    personDetails?.data.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${personDetails.data.profile_path}`
                      : noPoster
                  }
                  alt={personDetails?.data.name}
                  width="100%"
                />
              </Avatar>
              <NameMobile>{personDetails.data.name}</NameMobile>
              <TitleInfo>Personal Info</TitleInfo>
              <InfoName>Known For</InfoName>
              <InfoValue>{personDetails.data.known_for_department}</InfoValue>
              <InfoName>Gender</InfoName>
              <InfoValue>
                {personDetails.data.gender === '1' ? 'Female' : 'Male'}
              </InfoValue>
              {personDetails.data.birthday && (
                <>
                  <InfoName>Born</InfoName>
                  <InfoValue>{personDetails.data.birthday}</InfoValue>
                  <InfoValue>{personDetails.data.place_of_birth}</InfoValue>
                </>
              )}
              {personDetails.data.deathday && (
                <>
                  <InfoName>Died</InfoName>
                  <InfoValue>{personDetails.data.deathday}</InfoValue>
                </>
              )}
              {!!personDetails.data.also_known_as.length && (
                <>
                  <InfoName>Also Known As</InfoName>

                  {personDetails.data.also_known_as.map((name: string) => (
                    <InfoValue key={name}>{name}</InfoValue>
                  ))}
                </>
              )}
            </WrapperInfo>
            <WrapperBiography>
              <Name>{personDetails.data.name}</Name>
              {personDetails.data.biography && (
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
              <WrapperSlider>
                <TitleInfo>Known For</TitleInfo>
                <Slider {...sliderSettingsForPersonDetails}>
                  {personMovies &&
                    personMovies.data.cast.map(
                      ({ id, title, original_title, poster_path }: Cast) => (
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
              </WrapperSlider>
              {personImages?.data?.profiles.length > 2 && (
                <WrapperGallery>
                  <ImageList
                    sx={{ width: 500, height: 450 }}
                    variant="woven"
                    cols={3}
                    gap={8}
                  >
                    {personImages?.data.profiles.map(
                      ({ file_path }: string) => (
                        <ImageListItem key={file_path}>
                          <img
                            src={`https://image.tmdb.org/t/p/w500${file_path}`}
                            alt={personDetails.data.name}
                            loading="lazy"
                          />
                        </ImageListItem>
                      )
                    )}
                  </ImageList>
                </WrapperGallery>
              )}
            </WrapperBiography>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default PersonDetails;
