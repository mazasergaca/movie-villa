import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  margin-top: 40px;

  // classes from the react-slick library
  & .slick-prev:before {
    content: '❮';
  }

  & .slick-next:before {
    content: '❯';
  }
  & .slick-arrow {
    top: 30%;
  }

  & .slick-next {
    right: -12px;
  }
  & .slick-prev {
    left: -12px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 90px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 130px;
    & .slick-arrow {
      top: 40%;
    }

    & .slick-next {
      right: -35px;
    }
    & .slick-prev {
      left: -35px;
    }
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 45px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 58px;
  }
`;

export const Title = styled.h2`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 30px;
  line-height: 1.16;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 48px;
  }
`;

export const LinkStyled = styled(Link)`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.16;

  color: #ffffff;
  transition: color 250ms;

  &:hover {
    color: #ff3b5f;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;
