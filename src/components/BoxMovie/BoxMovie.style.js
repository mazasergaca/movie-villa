import styled from 'styled-components';

export const Section = styled.section`
  margin-top: 130px;

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

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Poster = styled.div`
  width: 200px;
  height: 260px;

  border-radius: 10px;
  background-color: ${props => props.color};
`;

export const Date = styled.span`
  margin-top: 18px;

  font-weight: 700;

  color: #9ca3af;
`;

export const Name = styled.span`
  margin-top: 8px;

  font-weight: 700;
  font-size: 18px;
`;

export const Genre = styled.span`
  margin-top: 8px;

  font-weight: 700;

  color: #9ca3af;
`;
