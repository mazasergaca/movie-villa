import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 50px 0 0 0;
`;

export const BackdropInfo = styled.div`
  margin: 40px auto;
  height: 750px;
  max-width: 2100px;

  display: flex;
  align-items: center;
  background-color: #222;
  background-image: ${props =>
    props.img
      ? `linear-gradient(83deg, rgba(0,0,0,0.6674019949776786) 0%, rgba(0,0,0,0.7486344879748774) 100%),url(https://image.tmdb.org/t/p/original/${props.img})`
      : 'none'};

  background-size: cover;
`;

export const WrapperInfo = styled.div`
  display: flex;
`;

export const Poster = styled.div`
  width: 450px;
  height: 650px;
  flex-shrink: 0;

  overflow: hidden;
  border-radius: 10px;
  background-color: #111;
`;

export const Info = styled.div`
  padding-left: 15px;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: 'DM Sans';
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
  margin-top: 10px;

  font-size: 24px;
`;

export const InfoValue = styled.span`
  font-size: 16px;
`;

export const LogoList = styled.ul`
  margin: 10px -10px -10px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const Logo = styled.li`
  padding: 5px;
  margin: 10px;

  font-size: 18px;

  border: 1px solid #fff;
`;

export const WrapperMedia = styled.div`
  margin-top: 50px;

  color: #000;
`;

export const WrapperVideo = styled.div`
  margin-bottom: 30px;

  display: flex;
  justify-content: center;
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
  font-size: 26px;
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
