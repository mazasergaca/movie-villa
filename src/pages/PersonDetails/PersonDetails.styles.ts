import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    display: flex;
  }
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    margin-top: 40px;
  }
`;

export const WrapperBiography = styled.div`
  margin-top: 20px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

export const Avatar = styled.div`
  width: 300px;
  height: 450px;
  margin: 0 auto 20px;

  overflow: hidden;
  border-radius: 10px;
  background-color: #111;

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 450px;
    margin-bottom: 30px;
  }
`;

export const Name = styled.span`
  margin-bottom: 30px;
  display: none;

  font-size: 36px;
  font-family: 'DM Sans';
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

export const NameMobile = styled.p`
  margin-bottom: 30px;

  font-size: 36px;
  font-family: 'DM Sans';
  text-align: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
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
  width: 100%;
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

  @media screen and (min-width: 768px) {
    width: 700px;
    margin: 40px auto;
  }
`;
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Poster = styled.div`
  width: 135px;
  height: 200px;

  overflow: hidden;
  border-radius: 10px;

  background-color: #111;

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 220px;
  }
  @media screen and (min-width: 1280px) {
    width: 120px;
    height: 180px;
  }
`;

export const TitleMovie = styled.span`
  margin-top: 7px;

  font-size: 14px;
  text-align: center;

  color: #fff;

  @media screen and (min-width: 1280px) {
    margin-top: 10px;
  }
`;

export const WrapperGallery = styled.div`
  display: flex;
  justify-content: center;
`;
