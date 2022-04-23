import styled from 'styled-components';

export const Section = styled.section`
  margin-top: 130px;

  // classes from the react-slick library
  & .slick-prev:before {
    content: '❮';
  }

  & .slick-next:before {
    content: '❯';
  }
  & .slick-arrow {
    top: 40%;
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 58px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 48px;
  line-height: 1.16;
`;

export const Link = styled.a`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 20px;
  line-height: 1.16;

  color: #ffffff;
`;
