import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 40px;
  display: flex;
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperBiography = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
`;

export const Avatar = styled.div`
  width: 300px;
  height: 450px;
  margin-bottom: 30px;

  overflow: hidden;
  border-radius: 10px;
  background-color: #111;
`;

export const Name = styled.span`
  margin-bottom: 30px;

  font-size: 36px;
  font-family: 'DM Sans';
`;

export const TitleInfo = styled.p`
  margin-bottom: 22px;

  font-size: 20px;
`;

export const InfoName = styled.span`
  margin-bottom: 5px;

  font-weight: 700;
  font-size: 16px;
  text-decoration: underline;
`;

export const InfoValue = styled.span`
  font-size: 16px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ButtonShowMore = styled.button`
  text-decoration: underline;
  border: none;
  background-color: transparent;
  color: #ff3b5f;
  cursor: pointer;
  transition: color 250ms;

  &:hover {
    color: #ff5e7c;
  }
`;

export const WrapperSlider = styled.div`
  width: 700px;
  margin: 40px auto;

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
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Poster = styled.div`
  width: 120px;
  height: 200px;

  overflow: hidden;
  border-radius: 10px;

  background-color: #111;
`;

export const TitleMovie = styled.span`
  font-size: 14px;
  text-align: center;

  color: #fff;
`;

export const WrapperGallery = styled.div`
  display: flex;
  justify-content: center;
`;
