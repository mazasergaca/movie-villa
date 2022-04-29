import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Poster = styled.div`
  position: relative;
  width: 140px;
  height: 210px;

  overflow: hidden;

  border-radius: 10px;
  background-color: #111;

  @media screen and (min-width: 768px) {
    width: 160px;
    height: 240px;
  }
  @media screen and (min-width: 1280px) {
    width: 200px;
    height: 280px;
  }
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: transparent;
  backdrop-filter: blur(0px);
  transition: backdrop-filter 250ms, color 250ms;

  &:hover {
    backdrop-filter: blur(4px);
    color: #fff;
  }
`;

export const Date = styled.span`
  margin-top: 10px;

  font-weight: 700;

  color: #9ca3af;

  @media screen and (min-width: 768px) {
    margin-top: 16px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 18px;
  }
`;

export const Name = styled.span`
  margin-top: 4px;

  font-weight: 700;
  font-size: 14px;
  text-align: center;

  color: #fff;
  transition: color 250ms;

  &:hover {
    color: #ff3b5f;
  }

  @media screen and (min-width: 768px) {
    margin-top: 6px;
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 8px;
    font-size: 18px;
  }
`;
