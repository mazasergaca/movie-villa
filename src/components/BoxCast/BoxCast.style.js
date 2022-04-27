import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
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

export const Title = styled.h2`
  margin: 0 0 10px 0;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Poster = styled.div`
  width: 138px;
  height: 207px;
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  border-radius: 10px;
  background-color: #111;
`;

export const Name = styled.span`
  font-size: 18px;

  text-align: center;
  color: #fff;
`;
