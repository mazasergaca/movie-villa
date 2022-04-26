import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import { Container } from '@mui/material';

import makeIdFromSlug from 'services/slug.ts';
import { usePersonDetails } from 'api/hooks/usePersonDetails.ts';
import { usePersonMovies } from 'api/hooks/usePersonMovies.ts';
import { usePersonImages } from 'api/hooks/usePersonImages.ts';

import {
  Wrapper,
  WrapperInfo,
  WrapperBiography,
  Name,
  Avatar,
  TitleInfo,
  InfoName,
  InfoValue,
  ButtonShowMore,
  WrapperSlider,
  Item,
  Poster,
  TitleMovie,
} from './PersonDetails.style';

// settings for react-slick
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 5,
  swipeToSlide: true,
};
//make slug for pathname
const makeSlug = (string: string) => slugify(string, { lower: true });

const PersonDetails = () => {
  const [showMore, setShowMore] = useState(false);

  const location = useLocation();
  const id = makeIdFromSlug(location.pathname);

  const { personDetails } = usePersonDetails(id);
  const { personMovies } = usePersonMovies(id);
  const { personImages } = usePersonImages(id);

  console.log(personImages);

  useEffect(() => window.scrollTo(0, 0));

  const handleClickBtnMore = () => setShowMore(!showMore);

  return (
    <Container>
      <Wrapper>
        {personDetails && (
          <>
            <WrapperInfo>
              <Avatar>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${personDetails.data.profile_path}`}
                  alt={personDetails.data.name}
                  width="100%"
                />
              </Avatar>
              <TitleInfo>Personal Info</TitleInfo>
              <InfoName>Known For</InfoName>
              <InfoValue>{personDetails.data.known_for_department}</InfoValue>
              <InfoName>Gender</InfoName>
              <InfoValue>
                {personDetails.data.gender === '1' ? 'Female' : 'Male'}
              </InfoValue>
              <InfoName>Born</InfoName>
              <InfoValue>{personDetails.data.birthday}</InfoValue>
              <InfoValue>{personDetails.data.place_of_birth}</InfoValue>
              {personDetails.data.deathday && (
                <>
                  <InfoName>Died</InfoName>
                  <InfoValue>{personDetails.data.deathday}</InfoValue>
                </>
              )}
              <InfoName>Also Known As</InfoName>

              {personDetails.data.also_known_as.map((name, index) => (
                <InfoValue key={index}>{name}</InfoValue>
              ))}
            </WrapperInfo>
            <WrapperBiography>
              <Name>{personDetails.data.name}</Name>
              <TitleInfo>Biography</TitleInfo>
              <InfoValue>
                {showMore
                  ? personDetails.data.biography
                  : personDetails.data.biography.substring(0, 250)}{' '}
                <ButtonShowMore onClick={handleClickBtnMore}>
                  {showMore ? 'Show less' : 'Show more'}
                </ButtonShowMore>
              </InfoValue>
              <WrapperSlider>
                <TitleInfo>Known For</TitleInfo>
                <Slider {...settings}>
                  {personMovies &&
                    personMovies.data.cast.map(movie => (
                      <div key={movie.id}>
                        <Link
                          to={{
                            pathname: `/movies/all/${makeSlug(
                              movie.title || movie.original_title
                            )}-${movie.id}`,
                          }}
                        >
                          <Item>
                            <Poster>
                              <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title || movie.original_title}
                                width="100%"
                              />
                            </Poster>
                            <TitleMovie>
                              {movie.title || movie.original_title}
                            </TitleMovie>
                          </Item>
                        </Link>
                      </div>
                    ))}
                </Slider>
                {personImages && <></>}
              </WrapperSlider>
            </WrapperBiography>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default PersonDetails;
