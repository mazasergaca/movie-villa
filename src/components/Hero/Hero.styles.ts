import styled from 'styled-components';

export const Section = styled.section`
  height: 250px;

  background-color: #002;

  //react-slick classes
  & .slick-dots {
    bottom: 15px;
  }

  & .slick-dots li button:before {
    font-size: 10px;

    color: #ccc;
  }
  & .slick-dots li.slick-active button:before {
    color: #ff3b5f;
  }

  @media screen and (min-width: 768px) {
    height: 400px;
    & .slick-dots {
      bottom: 35px;
    }
  }
  @media screen and (min-width: 1280px) {
    height: 600px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;

  height: 100%;
  @media screen and (min-width: 1280px) {
    max-width: 1800px;
  }
`;

export const Poster = styled.div`
  height: 250px;

  background-image: ${props =>
    `url(https://image.tmdb.org/t/p/original${props.color})`};
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 768px) {
    height: 400px;
  }
  @media screen and (min-width: 1280px) {
    height: 600px;
  }
`;
