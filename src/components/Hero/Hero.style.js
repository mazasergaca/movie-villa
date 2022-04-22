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

export const Poster = styled.div`
  height: 600px;

  background-color: ${props => props.color};
`;
