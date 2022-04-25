import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 50px 0 0 0;
`;

export const WrapperInfo = styled.div`
  margin-top: 30px;
  display: flex;

  background-color: #111;
`;

export const Poster = styled.div`
  width: 500px;
  height: 750px;
  flex-shrink: 0;

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

export const WrapperVideo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
