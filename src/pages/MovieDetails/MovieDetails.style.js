import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 50px 0 0 0;
`;

export const BackdropInfo = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  height: 750px;

  display: flex;
  align-items: center;
  background-color: #222;
  background-image: ${props =>
    props.img
      ? `linear-gradient(83deg, rgba(0,0,0,0.6674019949776786) 0%, rgba(0,0,0,0.7486344879748774) 100%),url(https://image.tmdb.org/t/p/original/${props.img})`
      : 'none'}
    
  background-size: cover;
`;

export const WrapperInfo = styled.div`
  display: flex;

  /* background-color: #111; */
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
  /* width: 100%; */
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
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  color: #000;
`;

export const WrapperReviews = styled.div`
  background-color: #fff;
`;
