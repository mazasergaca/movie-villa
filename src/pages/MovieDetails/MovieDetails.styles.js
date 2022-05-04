import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px 0 0 0;

  @media screen and (min-width: 768px) {
    padding: 50px 0 0 0;
  }
  @media screen and (min-width: 1280px) {
    padding: 50px 0 0 0;
  }
`;

export const BackdropInfo = styled.div`
  margin: 20px auto;
  padding: 10px 0;

  display: flex;
  align-items: center;
  background-color: #222;
  background-image: ${props =>
    props.$backdrop
      ? `linear-gradient(83deg, rgba(0,0,0,0.6674019949776786) 0%, rgba(0,0,0,0.7486344879748774) 100%),url(https://image.tmdb.org/t/p/original/${props.$backdrop})`
      : 'none'};

  background-size: cover;

  @media screen and (min-width: 768px) {
    padding: 0;
    margin: 30px auto;
    height: 500px;
  }
  @media screen and (min-width: 1280px) {
    margin: 40px auto;
    height: 750px;
    max-width: 2100px;
  }
`;

export const WrapperInfo = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Poster = styled.div`
  width: 300px;
  height: 420px;
  margin: 0 auto 10px;
  flex-shrink: 0;

  overflow: hidden;
  border-radius: 10px;
  background-color: #111;
  @media screen and (min-width: 480px) {
    width: 300px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    height: 450px;
  }
  @media screen and (min-width: 1280px) {
    width: 450px;
    height: 650px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    padding-left: 15px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 25px;

  text-align: center;
  font-size: 28px;
  font-family: 'DM Sans';

  @media screen and (min-width: 768px) {
    margin-bottom: 10px;

    font-size: 24px;
  }
`;

export const Genre = styled.span`
  padding: 5px 10px;

  border-radius: 10px;
  background-color: #555;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const InfoName = styled.span`
  margin-top: 15px;

  font-size: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 8px;

    font-size: 22px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 10px;

    font-size: 24px;
  }
`;

export const InfoValue = styled.span`
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const LogoList = styled.ul`
  margin: 6px -6px -6px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    margin: 10px -10px -10px;
  }
`;

export const Logo = styled.li`
  padding: 5px;
  margin: 10px;

  font-size: 16px;

  border: 1px solid #fff;

  @media screen and (min-width: 768px) {
    margin: 6px;

    font-size: 18px;
  }
`;

export const WrapperMedia = styled.div`
  margin-top: 35px;

  color: #000;

  @media screen and (min-width: 768px) {
    margin-top: 50px;
  }
`;

export const WrapperVideo = styled.div`
  margin-bottom: 15px;

  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 300px;
  @media screen and (min-width: 480px) {
    height: 400px;
  }
  @media screen and (min-width: 768px) {
    width: 853px;
    height: 480px;
  }
`;

export const ListReviews = styled.ul`
  height: 500px;
  padding: 0 10px;

  overflow-y: scroll;

  color: #fff;
`;

export const ItemReview = styled.li``;

export const InfoReview = styled.div`
  padding: 5px 0;
  position: sticky;
  top: 0;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  background-color: #111;
`;

export const AvatarRewiew = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 15px;

  overflow: hidden;

  border-radius: 50%;
  background-color: #111;
`;

export const NameReview = styled.span`
  font-size: 24px;

  @media screen and (min-width: 480px) {
    font-size: 26px;
  }
`;

export const Review = styled.p`
  font-size: 16px;

  &:first-child {
    padding: 60px;
  }
`;

export const NoReviews = styled.p`
  padding: 15px;

  font-size: 26px;
  color: #fff;
`;

export const WrappperNotFound = styled.div`
  width: 100%;
  height: 50vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleNotFound = styled.h1``;
