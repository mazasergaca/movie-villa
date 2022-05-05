import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 50vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }
`;

export const Title = styled.h1`
  font-size: 26px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const Text = styled.span`
  font-size: 52px;
  @media screen and (min-width: 768px) {
    font-size: 66px;
  }
`;
