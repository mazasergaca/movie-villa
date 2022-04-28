import styled from 'styled-components';

export const Section = styled.section`
  height: 600px;

  background-color: #002;

  & .slick-dots {
    bottom: 35px;
  }

  & .slick-dots li button:before {
    font-size: 10px;

    color: #ccc;
  }
  & .slick-dots li.slick-active button:before {
    color: #ff3b5f;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1800px;
  height: 100%;
`;

export const Poster = styled.div`
  height: 600px;

  background-image: ${props =>
    `url(https://image.tmdb.org/t/p/original${props.color})`};
  background-size: cover;
  background-position: center;
`;
